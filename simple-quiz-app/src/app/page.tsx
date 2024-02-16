import React from 'react';
import Link from 'next/link';


export default function Home() {
  const handleNavigateToQuizPage : () => void = () => {

  }
  return (
    /* App Structure */
    <main className="
      flex
      flex-col
      items-center
      justify-center
      w-screen
      h-screen
      bg-gradient-to-r
      from-green-400
      to-blue-500
    "> 
      {/* Title */}
      <h1 className="text-4xl font-bold text-white mb-5">Simple Quiz App</h1> 
      {/* Start Quiz Button */}
      <Link 
        href="/play"
      className="bg-white text-black font-bold py-2 px-4 rounded-lg">Start Quiz</Link>
    </main>
  );
}
