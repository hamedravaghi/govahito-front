"use client";
import { createContext, useEffect, useState } from 'react'
import jwt from 'jsonwebtoken';
import { usePathname, useRouter } from 'next/navigation';
import { getUserPurchases } from '../services/endPoints';
export const authContext = createContext({
     user: null,
     purchases: [],
     handleRemoveTokenAndUser: () => { },
     handleSetTokenAndUser: () => { },
     handleUserPerchases: () => { },
     handleSetUserPurchases: () => { },
     status: ""

})


const AuthProvider = ({ children }) => {
     const { replace } = useRouter()
     const [status, setStatus] = useState("loading")
     const [user, setUser] = useState(null)
     const [purchases, setPurchases] = useState([])
     const pathname = usePathname()



     useEffect(() => {
          if (status !== "loading") {
               if (status !== "authenticated"
                    && pathname === "/dashboard") {
                    replace("/")
               }
          }
     }, [status])



     const handleUserPerchases = async (user) => {
          if (user) {
               const userPerchases = await getUserPurchases(user.userId)
               setPurchases(userPerchases)
          } else {
               setPurchases([])
          }
     }


     const handleSetUserPurchases = (products) => {
          setPurchases(products)
     }


     useEffect(() => {
          const token = localStorage.getItem("authToken")
          if (token) {
               const decodedToken = jwt.decode(token, { complete: true })
               const user = { firstName: decodedToken?.payload.firstName, lastName: decodedToken?.payload.lastName, userId: decodedToken?.payload.userId }
               setUser(user)
               setStatus("authenticated")
               handleUserPerchases(user)
          } else {
               setUser()
               setStatus("unauthenticated")
               handleUserPerchases()
          }
     }, [])







     const handleRemoveTokenAndUser = () => {
          localStorage.removeItem("authToken")
          setUser()
          setStatus("unauthenticated")
          replace("/")
          handleUserPerchases()
     }


     const handleSetTokenAndUser = (token) => {
          localStorage.setItem("authToken", token)
          const decodedToken = jwt.decode(token, { complete: true })
          const user = { firstName: decodedToken?.payload.firstName, lastName: decodedToken?.payload.lastName, userId: decodedToken?.payload.userId }
          setUser(user)
          setStatus("authenticated")
          handleUserPerchases(user)

     }
     return (
          <authContext.Provider value={{ user, status, purchases, handleSetUserPurchases, handleSetTokenAndUser, handleUserPerchases, handleRemoveTokenAndUser }}>{children}</authContext.Provider>
     )
}


export default AuthProvider