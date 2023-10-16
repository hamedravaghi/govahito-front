"use client"
import { createContext, useContext, useState, useEffect } from 'react'
import { authContext } from './AuthProvider'
import { getAllExamResults } from '../services/endPoints'
import { toast } from 'react-toastify'


export const examContext = createContext({
     examResults: [],
     getResultById: () => { },
     refreshExamResult: () => { }
})


const ExamProvider = ({ children }) => {
     const { user } = useContext(authContext)
     const [examResults, setExamResults] = useState(null)






     const getExamResult = async (userId) => {
          try {
               const data = await getAllExamResults(userId)
               setExamResults(data)



          } catch (err) {
               toast.error(err.message)
          }


     }



     const refreshExamResult = async (userId) => {
          if (userId) {
               getExamResult(userId)
          }

     }


     useEffect(() => {

          if (user) {
               getExamResult(user.userId)
          }
     }, [user])


     const getResultById = (examId, allResult) => {

          if (allResult !== null) {

               let result = null;
               for (let i = 0; i < allResult.length; i++) {
                    //* use examId._id because exams will populate for use to profile
                    if (allResult[i].examId._id === examId) {

                         result = allResult[i];
                    }
               }
               return result;
          }
     }





     return (<examContext.Provider value={{ examResults, getResultById, refreshExamResult }}>{children}</examContext.Provider>)
}

export default ExamProvider