import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { ArrowLeftIcon } from '@/assets/icons'
import { usePathname, useRouter } from 'next/navigation'

interface Layout {
  alt: string
  desc: string
  src: string
  children: React.ReactNode
}

const Layout: React.FC<Layout> = ({ src, alt, desc, children }) => {
  const router = useRouter()
  const currentPath = usePathname()

  return (
    <div className='Layout-Auth relative grid min-h-screen w-full grid-cols-12'>
      <section className='Auth-Banner relative col-span-7'>
        <div className='absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-black/20'>
          <h5 className='max-w-lg text-heading-md font-semibold text-white'>
            {desc ??
              'Fashion is like eating, you shouldnt stick to the same menu'}
          </h5>
        </div>

        <Image
          className='h-full w-full object-cover'
          src={src ?? '/auth-photo-1.png'}
          alt={alt ?? 'Auth Layout 1'}
          fill
        />
      </section>

      <section className='Auth-Main relative col-span-5 py-14'>
        <div className='container w-full max-w-2xl px-12'>
          {currentPath === '/auth/login' ? (
            <Link
              className={`mb-16 flex items-center gap-2`}
              href={'/auth/login'}
            >
              <h5 className='text-body-xl font-semibold italic'>Logo</h5>
            </Link>
          ) : (
            <div className='mb-24 flex items-center gap-2'>
              <button type='button' onClick={() => router.back()}>
                <ArrowLeftIcon className='h-6 w-6 text-netral-100' />
              </button>

              <Link href={'/auth/login'}>
                <h5 className='text-body-xl font-semibold italic'>Logo</h5>
              </Link>
            </div>
          )}

          {children}
        </div>
      </section>
    </div>
  )
}

export default Layout
