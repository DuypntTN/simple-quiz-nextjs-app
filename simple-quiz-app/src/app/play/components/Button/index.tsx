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
  className?: string
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={
        className
          ? className
          : ` bg-white text-black font-bold py-2 px-4 rounded-lg `
      }
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
