"use client"
import { createContext, useState, useEffect, useContext } from 'react'
import { calculateTotalPrice } from '../services/numberAction'
import { createOrAddProductToCart, getCart, pay, removeProductFromCart } from '../services/endPoints'
import { authContext } from './AuthProvider'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export const CartContext = createContext({
     products: [],
     openCart: {},
     loading: null,
     paymentDetail: {},
     handleRemoveProduct: () => { },
     handleAddProduct: () => { },
     handleGetProduct: () => { },
     handlePay: () => { }
})


const CartProvider = ({ children }) => {

     const router = useRouter()
     const { user } = useContext(authContext)
     //* open cart ={id:"",products:"",status:""}
     const [openCart, setOpenCart] = useState(null)
     const [loading, setLoading] = useState(false)
     const [paymentDetail, setPaymentDetail] = useState(null);

     //* get open carts for first time
     useEffect(() => {
          if (user) {
               handleGetOpenCart(user?.userId)
          }
     }, [user])


     //* calculate totol price for show in detail pay cart
     useEffect(() => {
          if (openCart) {
               const totalPrice = calculateTotalPrice(openCart.products)
               setPaymentDetail(totalPrice)
          }
     }, [openCart]);




     const handleGetOpenCart = async (userId) => {
          if (userId) {
               setLoading(true)
               await getCart(userId).then(res => {
                    setLoading(false)
                    if (res) {
                         setOpenCart(res)
                    } else {
                         setOpenCart(null)
                    }
               })


          }
     }



     const handleAddProduct = async (userId, product) => {
          if (userId) {
               setLoading(true)
               await createOrAddProductToCart(userId, product).then(res => toast.info(res))
               await handleGetOpenCart(userId).then(res => {
                    setLoading(false)
                    router.push("/checkout")
               })

          }

     }


     const handleRemoveProduct = async (productId) => {
          if (user && openCart && productId) {
               setLoading(true)
               const body = { cartId: openCart._id, productId: productId }
               await removeProductFromCart(user.userId, body)
               setLoading(false)
               handleGetOpenCart(user.userId)
          }
     }




     const handlePay = async (cartId,) => {


          if (user && cartId) {
               setLoading(true)
               // const payValue = { cartId, callback_url: "https://www.govahito.ir/resultpay" }
               const payValue = { cartId, callback_url: "http://localhost:3000/resultpay" }
               const result = await pay(user.userId, payValue)
               setLoading(false)
               if (result && result.link) {
                    router.push(result.link)
               }
          }
     }







     return (
          <CartContext.Provider value={{ openCart, loading, paymentDetail, handleAddProduct, handleRemoveProduct, handlePay }}>
               {children}
          </CartContext.Provider>
     )
}


export default CartProvider




