'use-client'
import React from 'react'

// Component: Button
// Description:
// This component will be used to render a button
//// Props Type:
// children: React.ReactNode
// Example Usage:
// <Button>Click Me</Button>

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string,
  disable ?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className ,disable}) => {
  return (
    <button
      className={
        !disable?
        className
          ? className
          : ` bg-white text-black font-bold py-2 px-4 rounded-lg `
        : `bg-white text-gray-400 font-bold py-2 px-4 rounded-lg mt-5 mb-5`
      }
      onClick={onClick}
      disabled={disable}
    >
      {children}
    </button>
  )
}

export default Button
