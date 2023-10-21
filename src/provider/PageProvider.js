"use client"
import { useState, createContext } from 'react'
import FeatureActionSheet from '../components/actionSheet/FeatureActionSheet'

export const PageContext = createContext({
     visible: "",
     handleSetVisible: () => { },
     featureAction: null,
     handleSetFeatureAction: () => { },
     handleCloseFeatureAction: () => { }
})

const PageProvider = ({ children }) => {
     const [visible, setVisible] = useState(null)
     const [featureAction, setFeatureAction] = useState(null)
     const handleSetVisible = (id) => {
          setVisible(id)
     }





     const handleSetFeatureAction = (featureId) => {
          const body = document.querySelector("body")
          body.style.overflowY = "hidden"
          setFeatureAction(featureId)

     }

     const handleCloseFeatureAction = () => {
          const body = document.querySelector("body")
          body.style.overflowY = "auto"
          setFeatureAction(null)
     }









     return (
          <PageContext.Provider value={{ visible, handleSetVisible, featureAction, handleCloseFeatureAction, handleSetFeatureAction }}>
               <div className='w-full h-full relative'>
                    {children}
                    <FeatureActionSheet />
               </div>
          </PageContext.Provider>
     )
}

export default PageProvider