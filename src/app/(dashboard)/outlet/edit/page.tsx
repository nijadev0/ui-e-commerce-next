'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

import { PageAction } from '@/components/moleculs'
import { Alerts, Button, Input, Title } from '@/components/atomics'
import UploadSimpleIcon from '@/assets/icons/UploadSimpleIcon'

const DBOutletEdit = () => {
  const router = useRouter()

  const listMenu = [
    { name: 'Select Role', disabled: true },
    { name: 'Super Admin' },
    { name: 'Admin' },
    { name: 'User' },
    { name: 'Customer' }
  ]

  const [openSuccess, setOpenSuccess] = React.useState(false)

  return (
    <div className='relative h-[calc(100vh_-_80px)] space-y-6 overflow-y-auto p-6'>
      <div className='space-y-6'>
        <h1 className='text-heading-sm font-semibold'>User Role</h1>

        <section className='relative h-full space-y-8 rounded-lg-10 bg-white p-6'>
          <Title size='lg' variant='default'>
            Add User
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

            <div className='Dropzone flex w-full border-spacing-10 flex-col items-center justify-center rounded-xl border-2 border-dashed border-netral-30 bg-netral-15 py-14'>
              <UploadSimpleIcon className='h-8 w-8 stroke-2 text-netral-50' />

              <Button size='sm' variant='primary-bg' className='mb-2 mt-5'>
                Add Image
              </Button>

              <p className='text-center text-body-sm text-netral-50'>
                or drop image to upload
              </p>
            </div>
          </form>
        </section>
      </div>

      <PageAction
        variant='absolute'
        actionLabel='Last saved'
        actionDesc='Nov 9, 2022-17.09'
        btnPrimaryLabel='Save'
        btnPrimaryVariant='primary-bg'
        btnPrimaryFun={() => setOpenSuccess(true)}
        btnSecondaryLabel='Discard'
        btnsecondaryVariant='primary-nude'
        btnSecondaryFun={() => router.back()}
      />

      <Alerts
        variant='success'
        open={openSuccess}
        setOpen={setOpenSuccess}
        title='Users has been updated'
        desc='User updated successfully.'
      />
    </div>
  )
}

export default DBOutletEdit
