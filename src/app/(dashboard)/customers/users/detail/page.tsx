'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

import { PageAction } from '@/components/moleculs'
import { Input, Title } from '@/components/atomics'

const DBCustomersUsersDetail = () => {
  const router = useRouter()

  return (
    <div className='relative h-[calc(100vh_-_80px)] p-6'>
      <div className='space-y-6'>
        <h1 className='text-heading-sm font-semibold'>Users</h1>

        <section className='relative space-y-6 rounded-lg-10 bg-white p-6'>
          <Title size='lg' variant='default'>
            Users
          </Title>

          <form className='grid grid-cols-2 gap-x-5 gap-y-8'>
            <Input
              id='name'
              placeholder='Enter name'
              label='Name'
              variant='default'
            />

            <Input
              id='email'
              placeholder='Enter email address'
              label='Email Adress'
              variant='default'
            />

            <Input
              id='phone'
              placeholder='0000-0000-0000'
              label='Phone Number'
              variant='phone'
            />

            <Input
              id='complete-address'
              placeholder='Enter complete adress'
              label='Complete Address'
              variant='default'
            />
          </form>
        </section>
      </div>

      <PageAction
        variant='absolute'
        actionLabel='Last saved'
        actionDesc='Nov 9, 2022-17.09'
        btnPrimaryLabel='Save'
        btnPrimaryVariant='primary-bg'
        btnPrimaryFun={() => console.log('ok')}
        btnSecondaryLabel='Discard'
        btnsecondaryVariant='primary-nude'
        btnSecondaryFun={() => router.back()}
      />
    </div>
  )
}

export default DBCustomersUsersDetail
