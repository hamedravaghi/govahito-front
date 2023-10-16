"use client"
const { useEffect, useState, useCallback } = require("react");

const useTextGenerator = ({ textArray = [], generateDelay = 40, infinity = true, loopDelay = 10000 }) => {
     const [text, setText] = useState("")
     const [currentTextIndex, setCurrentTextIndex] = useState(0)



     //* generated
     const [currentText, setCurrentText] = useState("");
     const [currentIndex, setCurrentIndex] = useState(0);


     useEffect(() => {
          if (textArray.length > 0) {

               setText(textArray[currentTextIndex])
          }
     }, [textArray, currentTextIndex])





     useEffect(() => {
          createText()
     }, [currentIndex, generateDelay, text]);


     const createText = useCallback(() => {
          if (currentIndex < text?.length) {
               const timeout = setTimeout(() => {
                    setCurrentText((prevText) => prevText + text[currentIndex]);
                    setCurrentIndex((prevIndex) => prevIndex + 1);
               }, generateDelay);

               return () => clearTimeout(timeout);

          } else {

               if (currentTextIndex + 1 < textArray.length) {
                    setTimeout(() => {
                         setCurrentTextIndex(prev => prev + 1)
                         setCurrentText("");
                         setCurrentIndex(0);
                    }, loopDelay);


               } else {
                    if (infinity) {
                         setTimeout(() => {
                              setCurrentTextIndex(0)
                              setCurrentText("");
                              setCurrentIndex(0);
                         }, loopDelay);
                    }
               }


          }
     }, [currentIndex, generateDelay, text])


     return { currentText: textArray[currentTextIndex], typo: currentText }
}


export { useTextGenerator }