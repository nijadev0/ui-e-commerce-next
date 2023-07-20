import React from 'react'
import Image from 'next/image'

import {
  BellSimpleIcon,
  CaretDownIcon,
  MagnifyingGlassIcon
} from '@/assets/icons'

const Topbar: React.FC = () => {
  return (
    <header
      className={`relative flex w-full items-center justify-between border-b border-netral-20 bg-white px-8 py-4 shadow-sm`}
    >
      <div className='relative w-[24rem]'>
        <MagnifyingGlassIcon className='absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 stroke-netral-80 stroke-1.5 text-netral-80' />

        <input
          type='text'
          className='w-full rounded-lg border border-netral-20 bg-netral-20/75 px-3.5 py-2.5 pl-12 text-body-base font-normal text-netral-80 outline-none ring-2 ring-transparent transition-all duration-300 ease-out placeholder:text-netral-50 focus:border-primary-main focus:ring-primary-surface'
          placeholder='What are you looking for'
        />
      </div>

      <div className='flex items-center gap-5'>
        <button className='relative'>
          <div className='absolute -right-0 -top-0 h-3 w-3 rounded-full bg-error-main text-[8px] font-bold leading-[10px] text-white'>
            9
          </div>
          <BellSimpleIcon className='h-6 w-6 text-netral-50' />
        </button>
        <span className='h-10 w-px bg-netral-20'></span>

        <button className='flex items-center gap-7'>
          <section className='flex items-start gap-2'>
            <div className='relative h-10 w-10 overflow-hidden rounded-full'>
              <Image
                className='h-full w-full object-cover'
                src='/avatar-1.png'
                sizes='40'
                alt='Avatar People 1'
                fill
              />
            </div>

            <div className='space-y-1 text-left'>
              <h5 className='text-body-sm font-semibold text-netral-100'>
                Marvin McKinney
              </h5>
              <p className='text-body-xs text-netral-50'>Super Admin</p>
            </div>
          </section>

          <CaretDownIcon className='h-6 w-6 text-netral-50' />
        </button>
      </div>
    </header>
  )
}

export default Topbar
