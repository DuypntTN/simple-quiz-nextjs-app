import React from 'react'

type Props = {}

export default function SuccessPage (props: Props)  {
  return (
    <>
        <div
            className='
                flex
                flex-col
                items-center
                justify-center
                w-screen
                h-screen
                bg-gradient-to-r
                from-green-400
                to-blue-500
            '
        >   
            <h1
                className='
                    text-2xl
                    font-bold
                    text-white
                    mb-5
                    break-words
                '
            >
                Congratulation! You have completed the quiz
            </h1>
        </div>
    </>
  )
}

