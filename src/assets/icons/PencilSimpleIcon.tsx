import React from 'react'

const PencilSimpleIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={`pencil-simple_icon ${className}`}
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      viewBox='0 0 256 256'
    >
      <path d='M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z'></path>
    </svg>
  )
}

export default PencilSimpleIcon
