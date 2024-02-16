// Use client
'use client'
import React, { useEffect, useState } from 'react'
import Button from '../Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Component: Quiz
// Description:
// This component will be used to render a quiz (a question and multiple choice answers)
//// Props Type:
// question: string
// answers: array of strings
// correctAnswer: number
// onAnswerSelected: function
// Example Usage:
// <Quiz
//     question="What is the capital of France?"
//     answers={['Paris', 'London', 'Berlin', 'Madrid']}
//     correctAnswer={0}
//     onAnswerSelected={(answer) => console.log(answer)}
// />

interface QuizProps {
  question: string
  answers: string[]
  correctAnswer: number | number[]
  onAnswerSelected: (answer: number|number[]) => void
  hint: string,
  showCorrectAnswer: boolean,
  multipleChoice?: boolean
}

const Quiz: React.FC<QuizProps> = ({
  question,
  answers,
  correctAnswer,
  onAnswerSelected,
  hint,
  showCorrectAnswer,
  multipleChoice,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null | string[]>(null)
  const [showHint, setShowHint] = React.useState(false)
  const [indexs, setIndexs] = React.useState([] as number[])

  const handleAnswerClick = (answer: string,index:number) => {
    if(multipleChoice){
      setSelectedAnswer((prev) => {
        if(prev === null){
          return [answer]
        }
        if(Array.isArray(prev)){
          if(prev.includes(answer)){
            return prev.filter((ans) => ans !== answer)
          }
          return [...prev, answer]
        }
        return [prev]
      })
      if(indexs.includes(index) === false){
        indexs.push(index)
      }else{
        indexs.splice(indexs.indexOf(index), 1)
      }
      onAnswerSelected(indexs)
      setIndexs(indexs)
    }else{
      setSelectedAnswer(answer)
      onAnswerSelected(index)
    }
  }

  useEffect(() => {
    setShowHint(false)
    setSelectedAnswer(null)
  }, [hint, question, answers, correctAnswer])
  return (
    <div
      className="
        w-auto
        h-auto
        max-w-[400px]
      "
    >
        <h1
            className="text-2xl font-bold text-white mb-5
            break-words
        "
        >
            {question}
        </h1>
        <div
            className="
                flex
                flex-col
                h-auto
            "
        >
            {answers.map((answer, index) => (
            <button
                key={index}
                className={`
                    bg-white 
                    text-black 
                    font-bold 
                    py-2 
                    px-4 
                    rounded-lg 
                    word-wrap
                    break-words
                    mb-2
                    h-auto
                    text-left
                    select-none
                    hover:bg-blue-500
                    hover:text-white
                    ${showCorrectAnswer && correctAnswer === index ? 'bg-green-500 text-white' : ''}
                ${selectedAnswer === answer && multipleChoice === false? 'opacity-70 hover:bg-white hover:text-black' : ''}
                  ${selectedAnswer?.includes(answer) && multipleChoice === true ? 'opacity-70 hover:bg-white hover:text-black' : ''}
                `
              
              }
                onClick={() => handleAnswerClick(answer,index)}
            >
                {answer}
            </button>
            ))}
        </div>
        <div
            className="
                flex
                flex-row
                items-center
                w-100
                h-auto
            "
        >
            <Button
            className={`
            bg-yellow-300
            text-sm
             text-blue-700
             py-2 px-4 rounded-lg
             font-bold
                ${showHint ? 'bg-yellow-200 text-blue-500' : 'bg-yellow-300 '}
             `}
            onClick={() => setShowHint(!showHint)}
            >
            {showHint ? 'Hide Hint' : 'Show Hint'}
            </Button>
            {showHint && 
            <p
                className="
                    text-white
                    text-sm
                    ml-2
                    word-wrap
                    break-words
                "
            >
                    Hint: {hint}
                </p>}
        </div>
    </div>
  )
}

export default Quiz
