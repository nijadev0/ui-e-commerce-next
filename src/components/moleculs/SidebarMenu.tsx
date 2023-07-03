'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { CaretDownIcon } from '@/assets/icons'

interface SidebarMenu {
  active?: boolean
  href?: string
  icon?: React.ReactNode
  name: string
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  variant: 'default' | 'sub-menu' | 'expand'
}

const SidebarMenu: React.FC<SidebarMenu> = ({
  active,
  href,
  icon,
  name,
  onClick,
  variant
}) => {
  const currentActive = usePathname()

  return (
    <>
      {variant === 'default' && (
        <Link
          href={`${href}`}
          className={`relative flex w-full items-center justify-between gap-3 rounded-lg-10 ${
            currentActive === href
              ? 'bg-netral-20 text-primary-main'
              : 'bg-white text-netral-50'
          } p-3 transition-all duration-300 ease-out hover:bg-netral-20`}
        >
          <div className='flex items-center gap-3'>
            <span className='[&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-2'>
              {icon}
            </span>

            <span className='text-body-sm font-semibold'>{name}</span>
          </div>
        </Link>
      )}

      {variant === 'sub-menu' && (
        <button
          type='button'
          onClick={onClick}
          className={`relative flex w-full items-center justify-between gap-3 rounded-lg-10 ${
            active
              ? 'bg-netral-20 text-primary-main'
              : 'bg-white text-netral-50'
          } p-3 transition-all duration-300 ease-out hover:bg-netral-20`}
        >
          <div className='flex items-center gap-3'>
            <span className='[&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-2'>
              {icon}
            </span>

            <span className='text-body-sm font-semibold'>{name}</span>
          </div>

          <CaretDownIcon
            className={`h-6 w-6 ${active ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      )}

      {variant === 'expand' && (
        <Link
          href={`${href}`}
          className='relative flex w-full items-center justify-between gap-3 rounded-lg-10 p-3 text-netral-50 transition-all duration-300 ease-out hover:bg-netral-20'
        >
          <span className='text-body-sm font-semibold'>{name}</span>
        </Link>
      )}
    </>
  )
}

export default SidebarMenu
