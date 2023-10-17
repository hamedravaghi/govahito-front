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
     handleGetOpenCart: () => { },
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
          if (user && !openCart) {
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
               await createOrAddProductToCart(userId, product).then(async res => {
                    const response = await res.json()

                    switch (res.status) {
                         case 200:
                              toast.success(response)
                              await handleGetOpenCart(userId).then(() => {
                                   setLoading(false)
                                   router.push("/checkout")
                              })
                              break;
                         case 201:
                              toast.success(response)
                              await handleGetOpenCart(userId).then(() => {
                                   setLoading(false)
                                   router.push("/checkout")
                              })
                              break;
                         case 202:
                              toast.warning(response)
                              break;
                         case 203:
                              toast.info(response)
                              await handleGetOpenCart(userId).then(() => {
                                   setLoading(false)
                                   router.push("/checkout")
                              })
                              break;
                         default:
                              toast.error("خطایی رخ داده است")
                              break;
                    }



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
               const payValue = { cartId, callback_url: "https://www.govahito.ir/resultpay" }
               // const payValue = { cartId, callback_url: "http://localhost:3000/resultpay" }
               const result = await pay(user.userId, payValue)
               setLoading(false)
               if (result && result.link) {
                    router.push(result.link)
               }
          }
     }







     return (
          <CartContext.Provider value={{ openCart, handleGetOpenCart, loading, paymentDetail, handleAddProduct, handleRemoveProduct, handlePay }}>
               {children}
          </CartContext.Provider>
     )
}


export default CartProvider




