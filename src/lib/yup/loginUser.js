import * as Yup from 'yup'



export const loginValidation = Yup.object().shape({

     code: Yup.string().required("وارد کردن کد 5 احراز هویت الزامی است").min(5, "حداقل 5 کاراکتر").max(5, "حداکثر 5 کاراکتر")
})