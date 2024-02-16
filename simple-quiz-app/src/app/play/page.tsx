'use client'
import React from 'react'
import Quiz from './components/Quiz'
import Button from './components/Button'
import Loading from './components/Loading'
import RenderQuiz from './play'
import { Question } from '../api/questions/route'

// Component: Play
// Description:
// This component will be used to render the play page
//// Props Type:
// None


export default function Play() {
    interface DataType {
        message: string;
        data: Question[];
        total: number;
    }
    const [loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState( {} as DataType) 
    // Call for api to get questions/answers/hints
    const fetchData : () => Promise<void> = async () => {
        setLoading(true)
        const response = await fetch('/api/questions')
        const data = await response.json()
        setData(data)
        setLoading(false)
    }
    // Fetch Data when component mounts
    React.useEffect(() => {
        fetchData()
    }, [])

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
                    <RenderQuiz
                        data={data}
                    />
                )}
            </div>
        </>
    )
}
