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
     handleSetUserWithPurchases: () => { },
     handleSetPurchases:()=>{},
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



     const handleGetUserPurchases = async (userId) => {
          const userPerchases = await getUserPurchases(userId)
          setPurchases(userPerchases)

     }



     const handleSetPurchases = (products) => {
          setPurchases(products)
     }


     useEffect(() => {
          handleSetUserWithPurchases()
     }, [])



     const handleSetUserWithPurchases = () => {
          const token = localStorage.getItem("authToken")
          if (token) {
               const decodedToken = jwt.decode(token, { complete: true })
               const user = { firstName: decodedToken?.payload.firstName, lastName: decodedToken?.payload.lastName, userId: decodedToken?.payload.userId }
               setUser(user)
               setStatus("authenticated")
               handleGetUserPurchases(user.userId)
          } else {
               setUser()
               setStatus("unauthenticated")
               setPurchases([])
          }
     }



     const handleRemoveTokenAndUser = () => {
          localStorage.removeItem("authToken")
          setUser()
          setStatus("unauthenticated")
          replace("/")
          setPurchases([])
     }


     const handleSetTokenAndUser = (token) => {
          localStorage.setItem("authToken", token)
          const decodedToken = jwt.decode(token, { complete: true })
          const user = { firstName: decodedToken?.payload.firstName, lastName: decodedToken?.payload.lastName, userId: decodedToken?.payload.userId }
          setUser(user)
          setStatus("authenticated")
          handleGetUserPurchases(user.userId)

     }
     return (
          <authContext.Provider value={{ user, status, purchases,handleSetPurchases, handleSetUserWithPurchases, handleSetTokenAndUser, handleGetUserPurchases, handleRemoveTokenAndUser }}>{children}</authContext.Provider>
     )
}


export default AuthProvider