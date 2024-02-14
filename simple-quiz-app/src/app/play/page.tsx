'use client'
import React from 'react'
import Quiz from './components/Quiz'
import Button from './components/Button'
import Loading from './components/Loading'
export default function Play() {
    const [loading, setLoading] = React.useState(false)

    const [quesId, setQuestId] = React.useState(0)
    const [totalQuestions, setTotalQuestions] = React.useState(0)

    
    // Call for api to get questions/answers/hints


    // Handle Next/Previous Button
    const handleNext = () => {
        if(quesId === totalQuestions - 1) {
            setQuestId((prev) => prev + 1)
            setLoading(true)
        // Call for api to get questions/answers/hints
        }
    }
    const handlePrevious = () => {
        if(quesId === 0) 
            return       
        setQuestId((prev) => prev - 1)
    }

    return (
        <>
            <div
                className="
                                flex
                                flex-col
                                items-center
                                justify-center
                                w-screen
                                h-screen
                                bg-gradient-to-r
                                from-green-400
                                to-blue-500
                            "
            >
                {loading ? (
                <Loading />
                ) : (
                <div
                    className="
                        flex
                        flex-col
                        items-center
                        w-full
                        h-auto
                        max-w-[500px]
                    "
                >
                    <Quiz
                    question="What is the capital of France?"
                    answers={[
                        'Parisssssssssssssssssssss',
                        'London',
                        'Berlin',
                        'Madrid',
                    ]}
                    correctAnswer={0}
                    onAnswerSelected={(answer) => {
                        console.log(answer)
                    }}
                    hint="The capital of France is Pares dads dasds dads dsdsdsds dsdsdsds sdsd"
                    />

                    {/*Answer Component */}
                    <Button
                    className="
                                        bg-blue-700
                                        text-white
                                        font-bold
                                        py-2
                                        px-[60px]
                                        rounded-lg
                                        mt-5
                                        hover:bg-blue-500
                                        hover:text-white-500
                                        hover:duration-300
                                        mb-5
                                    "
                    >
                    Answer
                    </Button>
                    {/*Next/Previous Component*/}
                    <div
                    className="
                                    flex
                                    justify-between
                                    w-full
                                    px-10
                                    
                                "
                    >
                    <Button
                        onClick={handlePrevious}
                    >Previous</Button>
                    <text
                        className="
                                        text-white
                                        font-bold
                                        text-2xl
                                        self-center
                                        select-none
                                    "
                    >
                        {
                            `${quesId}/${totalQuestions}`
                        }
                    </text>
                    <Button
                        onClick={handleNext}
                    >Next</Button>
                    </div>
                </div>
                )}
            </div>
        </>
    )
}
