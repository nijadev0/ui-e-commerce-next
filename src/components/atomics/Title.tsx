import React from 'react'

interface Title {
  children: React.ReactNode
  className?: string
  variant: 'default' | 'success' | 'info' | 'warning' | 'error'
  size: 'sm' | 'lg'
}

const Title: React.FC<Title> = ({ children, className, variant, size }) => {
  return (
    <h3 className={`Title flex w-fit flex-row items-center gap-3 ${className}`}>
      <div
        className={`${
          (variant === 'default' && 'Default bg-netral-100') ||
          (variant === 'success' && 'Success bg-success-main') ||
          (variant === 'info' && 'Info bg-info-main') ||
          (variant === 'warning' && 'Warning bg-warning-main') ||
          (variant === 'error' && 'Error bg-error-main')
        } h-6 w-2 flex-1 rounded-xl`}
      />

      <span
        className={`${
          (size === 'lg' && 'text-body-xl') || (size === 'sm' && 'text-body-lg')
        } font-semibold`}
      >
        {children}
      </span>
    </h3>
  )
}

export default Title
