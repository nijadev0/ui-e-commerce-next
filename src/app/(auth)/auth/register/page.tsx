"use client"

import React from "react"
import Link from "next/link"
import { Switch } from "@headlessui/react"
import { useRouter } from "next/navigation"

import { Button, Input } from "@/components/atomics"
import { Layout } from "@/components/templates"
import { CheckIcon } from "@/assets/icons"

const AuthRegister = () => {
  // ---------------------------------------------------
  const router = useRouter()

  const [isRemember, setIsRemember] = React.useState(false)
  // ---------------------------------------------------

  return (
    <Layout
      src='/auth-photo-1.png'
      alt='Baby Photo Cute'
      desc='Fashion is like eating, you shouldnt stick to the same menu'
    >
      <header className='mb-8 space-y-3 text-left'>
        <h5 className='text-heading-md font-semibold'>Hi There!</h5>
        <p className='text-body-lg'>Welcome back to e-commerce dashboard</p>
      </header>

      <form className='space-y-6'>
        <Input
          id='name'
          placeholder='Enter your full name'
          label='Full Name'
          variant='default'
        />

        <Input
          id='email'
          placeholder='Enter your email'
          label='Email'
          variant='default'
        />

        <Input
          id='password'
          type='password'
          placeholder='Enter your password'
          label='Password'
          variant='default'
        />

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-1.5'>
            <Switch
              checked={isRemember}
              onChange={setIsRemember}
              className={`Checkbox ${
                isRemember
                  ? "border-primary-border bg-primary-main text-white ring-primary-surface"
                  : "border-netral-60 bg-white ring-netral-15"
              } relative inline-flex h-5 w-5 items-center rounded-md border ring-2`}
            >
              {isRemember && <CheckIcon className='h-5 w-5' />}
            </Switch>

            <span className='text-body-base text-netral-80'>
              I Accept Terms & Aggrement
            </span>
          </div>

          <Link
            href={"/auth/forgot-password"}
            className='text-body-base font-semibold underline'
          >
            Login Now
          </Link>
        </div>

        <Button
          size='lg'
          variant='primary-bg'
          className='w-full'
          onClick={() => router.push("/")}
        >
          Register
        </Button>

        <div className='flex w-full items-center gap-2'>
          <span className='h-px w-full bg-netral-30'></span>
          <span className='whitespace-nowrap text-body-base font-semibold text-netral-50'>
            Or Register With
          </span>
          <span className='h-px w-full bg-netral-30'></span>
        </div>

        <Button size='md' variant='default-outline' className='w-full'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24'
            viewBox='0 0 24 24'
            width='24'
          >
            <path
              d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
              fill='#4285F4'
            />
            <path
              d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
              fill='#34A853'
            />
            <path
              d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
              fill='#FBBC05'
            />
            <path
              d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
              fill='#EA4335'
            />
            <path d='M1 1h22v22H1z' fill='none' />
          </svg>
          Google
        </Button>
      </form>
    </Layout>
  )
}

export default AuthRegister
