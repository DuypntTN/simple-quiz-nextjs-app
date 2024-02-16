'use client'
import React, {  useEffect } from 'react'
import Button from './components/Button'
import Quiz from './components/Quiz'
import { Question } from '../api/questions/route';
import Loading from './components/Loading';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';


// Component: RenderQuiz
// Description:
// Child of Play component
//// Props Type:
// data: DataType
// Example Usage:
// <RenderQuiz
//     data={data}
// />


type DataType = {
    message: string;
    data: Question[];
    total: number;
}

interface Props  {
    data: DataType
}

const RenderQuiz = (props: Props) => {
    const router = useRouter()
    const { data } = props
    const renderData = data.data


    // STATES
    const [question, setQuestion] = React.useState('' as string)
    const [answers, setAnswers] = React.useState([] as string[])
    const [hints, setHints] = React.useState('' as string)
    const [totalQuestions, setTotalQuestions] = React.useState(0)
    const [curIdQuestion, setCurIdQuestion] = React.useState(0)
    const [correctAns,setCorrectAns] = React.useState(-1 as number | number[])
    const [selectAns,setSelectAns] = React.useState(-1 as number | number[])
    const [listNotAnswerYet,setListNotAnswerYet] = React.useState([] as number[])
    const [multipleChoice,setMultipleChoice] = React.useState(false)


    // Proccess when the data received
    useEffect(() => {
        if (renderData === undefined) return
        const {total} = data
        if (renderData.length>0){
            const {question, answers, hint,correctAnswer, multipleChoice} = renderData[curIdQuestion]
            setQuestion(question)
            setAnswers(answers)
            setHints(hint)
            setTotalQuestions(total)
            setCorrectAns(correctAnswer)
            if(multipleChoice){
                setMultipleChoice(multipleChoice)
            }else{
                setMultipleChoice(false)
            }
            if(listNotAnswerYet.length === 0){ // Prevent re-render
                setListNotAnswerYet(Array.from(Array(total).keys()))
            }
        }
    }, [renderData, curIdQuestion])



    // Process when press next or previous btns
    const handleNext = () => {
        if (curIdQuestion < totalQuestions-1){
            setCurIdQuestion(curIdQuestion+1)     
        }
    }
    const handlePrevious = () => {
        if (curIdQuestion > 0){
            setCurIdQuestion(curIdQuestion-1)
        }
    }
    return (
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
            <ToastContainer />
            {
                renderData === undefined ? (
                <>
                    <Loading />
                </>): (
                    <>
                        <Quiz
                            question={question}
                            answers={answers}
                            correctAnswer={correctAns}
                            onAnswerSelected={(answer) => {
                                setSelectAns(answer)
                            }}
                            hint={hints}
                            showCorrectAnswer={
                                // if the answer is not in the answer yet list
                                listNotAnswerYet.findIndex(a=>a===curIdQuestion) === -1 ? true : false
                            }
                            multipleChoice={multipleChoice}
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
                                disable={selectAns === -1 || listNotAnswerYet.findIndex(a=>a===curIdQuestion) === -1}
                            onClick={()=>{
                                let is_correct = false
                                if(multipleChoice){
                                    // Kiểm tra 2 mang có giống nhau không
                                    if(typeof selectAns === 'object' && typeof correctAns === 'object'){
                                        // Sort 2 mang rồi so sánh
                                        selectAns.sort()
                                        correctAns.sort()
                                        is_correct = selectAns.sort().join(',') === correctAns.sort().join(',')
                                    }
                                }
                                if(selectAns === correctAns || is_correct){
                                    let index = listNotAnswerYet.findIndex(a=>a===curIdQuestion)
                                    let temp = listNotAnswerYet
                                    temp.splice(index,1)
                                    setListNotAnswerYet(temp)
                                    if(temp.length > 0)
                                    {
                                        toast("Correct Answer!", {
                                            position: "bottom-right",
                                            autoClose: 3000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            type: 'success'
                                        })
                                        if(curIdQuestion < totalQuestions-1){
                                            handleNext()
                                        }else{
                                            // Jump to the question not answer yet
                                            setCurIdQuestion(temp[0])
                                        }
                                    }
                                    else{
                                        router.push('/success')
                                    }
                                } else{
                                    if(selectAns !== -1)
                                    {
                                        toast("Wrong Answer Please Try Again!", {
                                            position: "bottom-right",
                                            autoClose: 3000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            type: 'error'
                                        })
                                    }else{
                                        toast("Please Select Answer!", {
                                            position: "bottom-right",
                                            autoClose: 3000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            type: 'warning'
                                        })
                                    }
                                }
                            }}       
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
                                    (totalQuestions>0)?
                                    `${curIdQuestion+1}/${totalQuestions}`
                                    : ''
                                }
                            </text>
                            <Button
                                onClick={handleNext}
                            >Next</Button>
                        </div>
                    </>
                )
            }
            
        </div>
  )
}

export default RenderQuiz
