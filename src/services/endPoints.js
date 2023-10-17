import { toast } from "react-toastify"

export const baseUrl = "http://localhost:5003"
export const onLineUrl = "https://www.server.govahito.ir"
// const onLineUrl = "http://localhost:5003"
const headers = { 'Content-Type': 'application/json' }

export const handleCheckUser = async (value) => {
     return await fetch(`${onLineUrl}/user/check-user`, { body: JSON.stringify(value), method: "POST", headers })
}


export const handleLogin = async (value) => {
     return await fetch(`${onLineUrl}/user/login`, { body: JSON.stringify(value), method: "POST", headers })
}




export const resendCode = async (value) => {
     return await fetch(`${onLineUrl}/user/resend-code`, { body: JSON.stringify(value), method: "POST", headers: { 'Content-Type': 'application/json' } })
}


export const getAllCertificates = async () => {
     const response = await fetch(`${onLineUrl}/certificates`, { next: { revalidate: 10 }, method: "GET", headers: { 'Content-Type': 'application/json' } })
     const result = await response.json()
     return result
}



export const getSingleCertificate = async (slug) => {
     const response = await fetch(`${onLineUrl}/client/certificate/${slug}`, { method: "GET", headers })
     const result = await response.json()
     return result
}

//* book and season

export const getAllBooks = async () => {
     const response = await fetch(`${onLineUrl}/client/book`, { next: { revalidate: 10 }, method: "GET", headers })
     const result = await response.json()
     return result
}


export const getCertificateBook = async (slug) => {
     try {

          const response = await fetch(`${onLineUrl}/client/book/${slug}`, { next: { revalidate: 10 }, method: "GET", headers })
          const result = await response.json()
          return result
     } catch (err) {
          toast.error(err?.message || "دریافت اطلاعات کتاب یار با مشکل مواجه شده است")
     }
     // const response = await fetch(`${onLineUrl}/client/book/${slug}`, {next:{revalidate:10},  method: "GET", headers })
}

export const getSeason = async (slug) => {
     try {

          const response = await fetch(`${onLineUrl}/client/season/${slug}`, { next: { revalidate: 10 }, method: "GET", headers })
          const result = await response.json()
          return result
     } catch (err) {
          toast.error(err.message)
     }
}


//* question categories and questions
export const getCertificateQuestioncategories = async (slug) => {
     try {

          const response = await fetch(`${onLineUrl}/client/question-categories/${slug}`, { next: { revalidate: 3600 }, method: "GET", headers })
          const result = await response.json()
          return result
     } catch (err) {
          toast.error(err.message || "دریافت اطلاعات با خطا مواجه شد")
     }
}

export const getCategoryQuestions = async (slug) => {
     const response = await fetch(`${onLineUrl}/client/single-question-category/${slug}`, { next: { revalidate: 3600 }, method: "GET", headers })
     const result = await response.json()
     return result
}






//* exams


export const getCertificateTestExam = async (slug) => {
     const response = await fetch(`${onLineUrl}/client/test-exams/${slug}`, { next: { revalidate: 3600 }, method: "GET", headers })
     const result = await response.json()
     return result
}

export const getSingleTestExam = async (slug) => {
     const response = await fetch(`${onLineUrl}/client/get-single-test-exam/${slug}`, { method: "GET", headers })
     const result = await response.json()
     return result
}


export const getCertificateGoldExam = async (slug) => {
     const response = await fetch(`${onLineUrl}/client/gold-exams/${slug}`, { next: { revalidate: 3600 }, method: "GET", headers })
     const result = await response.json()
     return result
}

//* exam meta data
export const getExamMetaData = async (examSlug) => {
     const response = await fetch(`${onLineUrl}/client/exam-meta-data/${examSlug}`, { next: { revalidate: 3600 }, method: "GET", headers })
     const result = await response.json()
     return result
}


//* single gold exam
export const getSingleGoldExam = async (userId, examSlug) => {
     const response = await fetch(`${onLineUrl}/client/single-gold-exam?userId=${userId}&examSlug=${examSlug}`, { next: { revalidate: 3600 }, method: "GET", headers })
     const result = await response.json()
     return result
}



export const saveExamResult = async (values) => {
     const response = await fetch(`${onLineUrl}/client/save-exam-result`, { body: JSON.stringify(values), method: "POST", headers: { 'Content-Type': 'application/json' } })
     const result = await response.json()
     return result
}

export const getAllExamResults = async (userId) => {
     try {
          if (userId) {

               const response = await fetch(`${onLineUrl}/client/get-all-exam-result/${userId}`, { next: { revalidate: 10 }, method: "GET", headers })
               const result = await response.json()
               return result
          }
     } catch (err) {
          toast.error(err.message || "دریافت اطلاعات آزمون با مشکل مواجه شده است")
     }

}


export const editProfile = async (values) => {
     const response = await fetch(`${onLineUrl}/user/edit-profile/${values.userId}`, { body: JSON.stringify(values), mode: "cors", method: "PUT", headers })
     const result = await response.json()
     return result

}


//* get sign categories

export const getAllSignCategory = async () => {
     const response = await fetch(`${onLineUrl}/client/sign-categories`, { method: "GET", headers })
     const result = await response.json()
     return result
}


export const getSigns = async (slug) => {
     const response = await fetch(`${onLineUrl}/client/signs/${slug}`, { method: "GET", headers })
     const result = await response.json()
     return result
}

export const getProducts = async () => {
     const response = await fetch(`${onLineUrl}/client/products`, { next: { revalidate: 10 }, method: "GET", headers })
     const result = await response.json()
     return result
}




export const getArticle = async () => {
     const response = await fetch(`https://mag.govahito.ir/wp-json/wp/v2/posts`, { method: "GET", headers })

     return response
}


export const getSingleArticle = async (slug) => {
     const response = await fetch(`https://hamyarwp.com/wp-json/wp/v2/posts?slug=${slug}`, { method: "GET", headers })
     const result = await response.json()
     return result
}



//* cards and products
export const getCart = async (userId) => {
     try {
          const response = await fetch(`${onLineUrl}/cart/${userId}`, { next: { revalidate: 10 }, method: "GET", headers })
          const result = await response.json()
          return result
     } catch (err) {

          toast.error("دریافت اطلاعات سبد خرید امکان پذیر نیست")
     }
}



export const createOrAddProductToCart = async (userId, body) => {
     try {

          const response = await fetch(`${onLineUrl}/cart/create-or-add/${userId}`, { body: JSON.stringify({ product: body }), mode: "cors", method: "POST", headers })
          return response

     } catch (err) {
          toast.error("خطایی در افزودن محصول به سبد خرید رخ داده است . لطفا لحظاتی دیگر تلاش کنید")

     }
}




export const removeProductFromCart = async (userId, body) => {

     try {
          const response = await fetch(`${onLineUrl}/cart/remove-product-from-cart/${userId}`, { body: JSON.stringify(body), mode: "cors", method: "PUT", headers })
          const result = await response.json()
          toast.info(result)
          return result
     } catch (err) {
          console.log(err)
          toast.error("خطای ارتباط با سرور")
     }
}


export const pay = async (userId, payValue) => {
     try {
          const response = await fetch(`${onLineUrl}/pay/${userId}`, { body: JSON.stringify(payValue), mode: "cors", method: "POST", headers })
          const result = await response.json()
          if (response.status === 200) {
               toast.success("در حال انتقال به درگاه پرداخت")
          } else {
               toast.error(result?.message)
          }

          return result
     } catch (err) {
          toast.error("اتصال به درگاه بانک با خطا روبرو شد . لطفا دقایقی دیگر تلاش کنید")
     }
}



export const checkPay = async (payId) => {
     return await fetch(`${onLineUrl}/pay/check-pay/${payId}`, { method: "POST", headers: { 'Content-Type': 'application/json' } })

}


export const getUserPurchases = async (userId) => {
     try {

          const response = await fetch(`${onLineUrl}/client/purchases/${userId}`, { next: { revalidate: 1 }, method: "GET", headers: { 'Content-Type': 'application/json' } })
          const result = await response.json()
          return result
     } catch (err) {
          toast.error("دریافت اطلاعات خرید با خطا روبرو شد")
     }
}