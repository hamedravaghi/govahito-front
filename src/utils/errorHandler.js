"use client"
import { toast } from 'react-toastify'

export const errorHandler = (err) => {

     if (err) {
          if (err.status <= 500) {
               if (err.message) {
                    toast.error(err.message)
               } else {
                    toast.error("خطایی در ارتباط با سرور رخ داده است")
               }
          } else {
               toast.error("خطایی در ارتباط با سرور رخ داده است")
          }
     } else {
          toast.error("خطای سرور")
     }
}  