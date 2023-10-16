import * as Yup from 'yup'



export const userValidation = Yup.object().shape({
     code: Yup.string().required("وارد کردن کد 5 احراز هویت الزامی است").min(5, "حداقل 5 کاراکتر").max(5, "حداکثر 5 کاراکتر"),
     registerType: Yup.mixed().oneOf(["raw", "verify"]),
     firstName: Yup.string()
          .when("registerType",
               {
                    is: "raw",
                    then: () => Yup.string().required("وارد کردن نام الزامی است").min(2, "حداقل 2 کاراکتر"),
                    otherwise: () => Yup.string().notRequired()
               }),
     lastName: Yup.string()
          .when("registerType",
               {
                    is: "raw",
                    then: () => Yup.string().required("وارد کردن نام خانوادگی الزامی است").min(2, "حداقل 2 کاراکتر"),
                    otherwise: () => Yup.string().notRequired()
               }),
})



export const editProfileValidation = Yup.object().shape({
     firstName: Yup.string().required("وارد کردن نام الزامی است").min(2, "نام نباید از 2 کاراکتر کمتر باشد").max(20, 'نام  نباید از 20 کاراکتر بیشتر باشد'),
     lastName: Yup.string().required("وارد کردن نام خانوادگی الزامی است").min(2, "نام خانوادگی نباید از 2 کاراکتر کمتر باشد").max(20, 'نام خانوادگی نباید از 20 کاراکتر بیشتر باشد')
})