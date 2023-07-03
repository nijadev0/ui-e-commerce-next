import { ArrowDown2Icon } from '@/assets/icons'
import React from 'react'

interface Input {
  disabled?: boolean

  id: string
  message?: string
  label?: string
  placeholder: string
  type?: 'text' | 'password'
  value?: string
  variant?:
    | 'default'
    | 'default-error'
    | 'phone'
    | 'phone-error'
    | 'logo'
    | 'logo-error'
}

const Input: React.FC<Input> = ({
  disabled = false,
  id,
  label,
  message,
  placeholder,
  type = 'text',
  value,
  variant
}) => {
  return (
    <div className='INPUT relative flex w-full flex-col items-start gap-1.5'>
      {label && (
        <label
          htmlFor={id}
          className={`text-body-base font-semibold ${
            (variant === 'default' && 'text-netral-80') ||
            (variant?.includes('error') && 'text-error-main')
          }`}
        >
          {label ?? 'Please Add Label'}
        </label>
      )}

      <div className='relative w-full'>
        {variant?.includes('phone') && (
          <div className='absolute left-3 top-1/2 flex w-fit -translate-y-1/2 items-center gap-1.5'>
            <button className='flex items-center gap-1 rounded-md bg-netral-20 px-2 py-1 text-netral-80'>
              <span className='text-body-base font-bold'>+62</span>

              <ArrowDown2Icon className='h-5 w-5 stroke-2' />
            </button>
            <span className='text-body-base font-normal text-netral-30'>|</span>
          </div>
        )}

        {variant?.includes('logo') && (
          <div className='absolute left-3 top-1/2 flex w-fit -translate-y-1/2 items-center gap-1.5'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className='h-6 w-auto'
              src='/input-bank-logo.png'
              alt='Maybank Logo'
            />
          </div>
        )}
        <input
          id={id}
          name={id}
          type={type}
          className={`w-full rounded-lg border p-3.5 text-body-base font-normal text-netral-80 shadow-1 outline-none ring-[2.5px] ring-transparent transition-all duration-300 ease-out placeholder:text-netral-50 ${
            (variant === 'default' &&
              'border-netral-30 focus:border-primary-border focus:ring-primary-surface disabled:bg-netral-20') ||
            (variant === 'default-error' &&
              'border-error-border/50 focus:border-error-main focus:ring-error-surface') ||
            (variant === 'phone' &&
              'border-netral-30 pl-[102px] focus:border-primary-border focus:ring-primary-surface disabled:bg-netral-20') ||
            (variant === 'phone-error' &&
              'border-error-border/50 pl-[102px] focus:border-error-border focus:ring-error-surface') ||
            (variant === 'logo' &&
              'border-netral-30 pl-28 focus:border-primary-border focus:ring-primary-surface disabled:bg-netral-20') ||
            (variant === 'logo-error' &&
              'border-error-border/50 pl-28 focus:border-error-border focus:ring-error-surface')
          }`}
          placeholder={placeholder ?? 'Please add your placeholder'}
          value={value}
          disabled={disabled}
        />
      </div>

      {variant && message && (
        <p
          className={`text-body-base tracking-[1%] ${
            variant.includes('error') ? 'text-error-main' : 'text-netral-50'
          }`}
        >
          {message ?? 'This is an error message.'}
        </p>
      )}
    </div>
  )
}

export default Input
