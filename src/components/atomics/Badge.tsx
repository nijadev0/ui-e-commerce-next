import React from 'react'

interface Badge {
  children: React.ReactNode
  variant: 'default' | 'success' | 'warning' | 'info' | 'error'
}

const Badge: React.FC<Badge> = ({ children, variant }) => {
  return (
    <button
      className={`BADGE ${
        (variant === 'default' &&
          'BADGE-DEFAULT bg-netral-30 text-netral-80') ||
        (variant === 'success' &&
          'BADGE-SUCCESS bg-success-surface text-success-main') ||
        (variant === 'info' && 'BADGE-INFO bg-info-surface text-info-main') ||
        (variant === 'warning' &&
          'BADGE-WARNING bg-warning-surface text-warning-main') ||
        (variant === 'error' && 'BADGE-ERROR bg-error-surface text-error-main')
      } cursor-auto rounded-full px-4 py-2 text-sm font-medium leading-none tracking-[1%]`}
    >
      {children}
    </button>
  )
}

export default Badge
