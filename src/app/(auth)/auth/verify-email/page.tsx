'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/atomics'
import { Layout } from '@/components/templates'

const AuthVerifyEmail = () => {
  return (
    <Layout
      src='/auth-photo-1.png'
      alt='Baby Photo Cute'
      desc='Fashion is like eating, you shouldnt stick to the same menu'
    >
      <header className='mb-40 space-y-3'>
        <h1 className='text-heading-md font-semibold'>Forgot password?</h1>
        <p className='text-body-lg text-netral-60'>
          No worries, we’ll send you reset instruction.
        </p>
      </header>

      <form className='space-y-8 text-center'>
        <Button size='lg' variant='primary-bg' href='/auth/new-password'>
          Verify Password
        </Button>

        <p className='text-body-base text-netral-80'>
          Didn’t receive the email?{' '}
          <button className='font-semibold text-netral-100 underline'>
            Click to resend
          </button>
        </p>
      </form>
    </Layout>
  )
}

export default AuthVerifyEmail
