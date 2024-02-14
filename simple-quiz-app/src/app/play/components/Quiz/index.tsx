// Use client
'use client'
import React, { useState } from 'react'
import Button from '../Button'

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
  correctAnswer: number
  onAnswerSelected: (answer: string) => void
  hint: string
}

const Quiz: React.FC<QuizProps> = ({
  question,
  answers,
  correctAnswer,
  onAnswerSelected,
  hint,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showHint, setShowHint] = React.useState(false)
  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer)
    onAnswerSelected(answer)
  }

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
                ${selectedAnswer === answer ? 'opacity-70 hover:bg-white hover:text-black' : ''}`}
                onClick={() => handleAnswerClick(answer)}
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
