"use client"
import { useState, useEffect, useContext } from 'react'
import { useCountdown } from './useContDown'
import { authContext } from '../provider/AuthProvider'
import { saveExamResult } from '../services/endPoints'
import { toast } from 'react-toastify'
import { examContext } from '../provider/ExamProvider'
import { deMascBody, mascBody } from '../utils/mascBody'

const useExam = (slug, questions, certificate) => {
     const { refreshExamResult } = useContext(examContext)

     const { user, status } = useContext(authContext)

     //* get ids for controller

     const questionsId = questions.map(({ _id }) => _id)







     //* classes
     //* user Answer class
     class UserAnswer {
          constructor(questionId, answerId, trueId) {
               this.questionId = questionId;
               this.answerId = answerId;
               this.trueId = trueId
          }
     }

     //* test result class
     class TestResult {
          constructor(slug, pass, allQuestions, notAnswerd, trueAnswerd, falseAnswerd) {
               this.slug = slug;
               this.pass = pass;
               this.allQuestions = allQuestions;
               this.notAnswerd = notAnswerd;
               this.trueAnswerd = trueAnswerd;
               this.falseAnswerd = falseAnswerd;

          }
     }


     class ServerTestResult {
          constructor(userId, slug, selectedAnswer, certificate) {
               this.userId = userId;
               this.slug = slug;
               this.selectedAnswer = selectedAnswer
               this.certificate = certificate
          }
     }



     const serverAnswerDetail = (questionId, userSelect, trueId) => {
          const isCorrect = userSelect === trueId ? true : false
          return { question: questionId, selectedOptionId: userSelect, isCorrect }
     }

     //* questions state
     const [startExam, setStartExam] = useState(false)
     const [activeIndex, setActiveIndex] = useState(0)
     const [examStatus, setExamStatus] = useState("run") // stop run endTime pause
     const [currentQuestion, setCurrentQuestion] = useState(null)
     const [userAnswers, setUserAnswers] = useState([])

     //* initial counter
     const initialCounter = 1200
     const { counter, resumeCounter, stopCounter, pauseCounter, isPauseBtnDisabled,
          isResumeBtnDisabled } = useCountdown({ initialCounter, start: startExam })


     const handleStartExam = () => {
          setStartExam(true)
     }

     //* modals state
     const [reportModal, setReportModal] = useState(false)
     const [pauseModal, setPauseModal] = useState(false)
     const [endTimeModal, setEndTimeModal] = useState(false)
     const [stopModal, setStopModal] = useState(false)

     //* resluts state
     const [testResult, setTestResult] = useState(null)


     //* exam useEffect
     useEffect(() => {
          if (questions) {
               setCurrentQuestion(null)
               setTimeout(() => {
                    setCurrentQuestion({ number: activeIndex + 1, ...questions[activeIndex] })
               }, 500)
          }
     }, [questions, activeIndex])


     //* modals useEffect

     useEffect(() => {
          if (startExam) {
               deMascBody()
          } else {
               mascBody()
          }
     }, [startExam])


     useEffect(() => {
          if (examStatus === "pause") {
               setPauseModal(true)
               mascBody()
          }
          if (examStatus !== "pause") {
               setPauseModal(false)
               deMascBody()

          }

          if (examStatus === "alarm") {
               setStopModal(true)
               mascBody()
          }
          if (examStatus !== "alarm") {
               setStopModal(false)
               deMascBody()
          }



     }, [examStatus, userAnswers])


     useEffect(() => {
          if (counter === 0 && examStatus === "run" && userAnswers.length !== questions.length) {
               setExamStatus("endTime")
               setEndTimeModal(true)
          }

     }, [counter])



     //* exam status useEffect
     useEffect(() => {
          if (examStatus === "end" || examStatus === "endTime") {
               const allQuestions = questions.length
               const notAnswerd = allQuestions - userAnswers.length
               const trueAnswerd = userAnswers.filter(item => item.answerId === item.trueId).length
               const falseAnswerd = userAnswers.length - trueAnswerd
               const pass = trueAnswerd >= allQuestions - 3
               const testReslut = new TestResult(slug, pass, allQuestions, notAnswerd, trueAnswerd, falseAnswerd)
               setTestResult(testReslut)
               if (user && status === "authenticated") {
                    if (userAnswers.length >= 10) {


                         handleSaveResult(user.userId, slug, userAnswers)
                    } else {
                         toast.info("برای ذخیره نتیجه آزمون باید حداقل به 10 سوال جواب داده باشید.")
                    }
               } else {
                    toast.info("برای ذخیره نتیجه آزمون باید وارد سایت شوید.")
               }


          }
     }, [examStatus, user, status])




     //* exam handlers

     //* server exam save

     const handleSaveResult = async (userId, slug, userSelectedAnswer) => {
          const selectedAnswer = []
          userSelectedAnswer.map(item => {
               const serverResult = serverAnswerDetail(item.questionId, item.answerId, item.trueId)
               selectedAnswer.push(serverResult)
          })

          const obj = new ServerTestResult(userId, slug, selectedAnswer, certificate)
          await saveExamResult(obj).then(result => { toast.success(result.message); refreshExamResult(userId) }).catch(err => { console.log(err); toast.error("خطایی در ذخیره اطلاعات آزمون شما رخ داده است") })
     }



     //* process user answer 
     const handleProcessAnswer = (questionId, answerId, trueId) => {
          if (examStatus === "run") {
               const userAnswer = new UserAnswer(questionId, answerId, trueId)
               const arrayCopy = [...userAnswers]
               arrayCopy.push(userAnswer)
               setUserAnswers(arrayCopy)

               handleNextQuestion({ delay: true })
          }

     }



     //* go to next question when user answer or click next question button 

     const handleNextQuestion = ({ delay }) => {
          if (activeIndex < questions.length - 1) {
               const next = activeIndex + 1
               const element = document.getElementById(`qeustionBar-${next}`)
               element?.scrollIntoView({ behavior: "smooth", inline: "center" })

               if (delay) {
                    const timerElement = document.getElementById("nextQuestionTimer")
                    if (timerElement) {

                         timerElement.style.width = "100%"
                         timerElement.style.transition = "all 3s"
                    }
                    setTimeout(() => {
                         setActiveIndex(next)
                         const element = document.getElementById(`qeustionBar-${next}`)
                         if (element !== null) {

                              element?.scrollIntoView({ behavior: "smooth", inline: "center" })
                         }
                    }, 3000)
               } else {
                    setActiveIndex(next)
               }
          }
     }


     //* change active index when click on buttons in exam controller
     const handleSetActiveIndex = (index) => {
          const element = document.getElementById(`qeustionBar-${index}`)
          element?.scrollIntoView({ behavior: "smooth", inline: "center" })
          setActiveIndex(index)
     }











     //* exam controller buttons

     //* pause exam
     const pauseExam = () => {
          setExamStatus("pause")
          pauseCounter()
          mascBody()
     }


     //* resume exam 
     const resumeExam = () => {
          if (examStatus !== "endTime" || examStatus !== "end") {
               setExamStatus("run")
               resumeCounter()
               deMascBody()
          }
     }

     //* show alert for exit exam
     const exitExamAlarm = () => {
          if (examStatus === "run") {
               mascBody()
               setExamStatus("alarm")
               pauseCounter()
          }
     }


     const isStopBtnDisabled = examStatus === "run" ? false : true


     const reportButton = () => {
          const show = examStatus === "run" && userAnswers.length >= questions.length - 3 ? true : false
          const handler = handleEndExam
          return { show, handler }
     }

     //* modal handlers


     const handleHidePauseModal = () => {
          resumeExam()
          deMascBody()
     }

     const handleEndExam = () => {
          stopCounter()
          setExamStatus("end")
          setReportModal(true)
          deMascBody()

     }

     const handleShowReport = () => {
          setExamStatus("end")
          mascBody()

     }

     const handleHideReportModal = () => {
          setExamStatus("end")
          setReportModal(false)
          setEndTimeModal(false)
          deMascBody()
     }












     //* get data


     const resultEachQuestion = (questionId) => {
          const answer = userAnswers.find(item => item.questionId === questionId)
          let pass;
          let userAnswerd;

          if (answer) {
               answer.answerId === answer.trueId ? pass = true : pass = false

          } else {
               userAnswerd = false
          }

          return { userAnswerd, pass }
     }

     const questionDetail = (questionId) => {
          const question = userAnswers.find(item => item.questionId === questionId)
          const isAnswerd = question ? true : false
          const userChoose = question?.answerId || null
          const isActive = questionId === currentQuestion?._id ? true : false
          const canAnswer = examStatus === "run" ? userAnswers.findIndex(item => item.questionId === questionId) >= 0 ? false : true : false
          const isActiveNextButton = activeIndex === questions.length - 1 ? false : true
          const correctAnswerId = question?.trueId
          const showCorrectAnswer = examStatus === "end" ? true : false
          return { isAnswerd, userChoose, canAnswer, isActive, isActiveNextButton, showCorrectAnswer, correctAnswerId }
     }












     return {
          questionsId,
          questionDetail,
          currentQuestion,
          controllerHandler: {
               handleSetActiveIndex,
               examStatus,
               resultEachQuestion,
               examStatus,
               counter,
               resumeExam,
               pauseExam,
               exitExamAlarm,
               isPauseBtnDisabled,
               isResumeBtnDisabled,
               isStopBtnDisabled,
               reportButton
          },
          questionHandler: {
               handleProcessAnswer,
               handleNextQuestion
          },
          modalControllerHandler: {
               pauseModal,
               handleHidePauseModal,
               stopModal,
               resumeExam,
               handleEndExam,
               endTimeModal,
               reportModal,
               handleShowReport,
               handleHideReportModal,
               startExam,
               handleStartExam
          },
          testResult


     }


}



export { useExam }