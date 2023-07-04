'use client'

import React from 'react'
import Image from 'next/image'

import { Alerts, Button, Input, Title } from '@/components/atomics'
import { PencilSimpleIcon } from '@/assets/icons'
import { Modal } from '@/components/moleculs'

const DashboardSettings = () => {
  // -------------------------------------------------------------------------
  const [openModalPassword, setOpenModalPassword] = React.useState(false)
  // -------------------------------------------------------------------------
  const [changePasswordAlerts, setChangePasswordAlerts] = React.useState(false)

  const openChangePasswordAlerts = () => {
    setOpenModalPassword(false)

    setChangePasswordAlerts(true)

    setTimeout(() => {
      setChangePasswordAlerts(false)
    }, 3000)
  }
  // -------------------------------------------------------------------------

  return (
    <div className='relative space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>Settings</h1>

      <section className='relative w-full space-y-7 rounded-lg-10 bg-white p-6'>
        <Title variant='default' size='lg'>
          Manage Profile
        </Title>

        <form>
          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-lg font-semibold'>Avatar</h5>
              <p className='text-body-base text-netral-50'>
                Only *.png, *.jpg and *.jpeg image files are accepted
              </p>
            </div>

            <figure className='relative h-32 w-32 overflow-hidden rounded-lg'>
              <Image
                className='h-full w-full object-cover'
                src='/avatar-settings-1.png'
                alt='Avatar Settings 1'
                fill
              />

              <button
                type='button'
                className='absolute right-2 top-2 z-10 flex h-6 w-6 items-center justify-center rounded-lg bg-netral-20 text-netral-80 hover:bg-netral-30'
              >
                <PencilSimpleIcon className='h-5 w-5' />
              </button>
            </figure>
          </div>

          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-lg font-semibold'>Name</h5>
            </div>

            <Input
              type='text'
              id='name'
              placeholder='Please add your name'
              value='Marvin McKinney'
            />
          </div>

          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-lg font-semibold'>Role</h5>
            </div>

            <Input
              type='text'
              id='name'
              placeholder='Please add your role'
              value='Super Admin'
            />
          </div>

          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-lg font-semibold'>
                Phone Number
              </h5>
            </div>

            <Input
              type='text'
              variant='phone'
              id='name'
              placeholder='Please add your phone number'
              value='762394289312'
            />
          </div>

          <div className='flex w-full items-start gap-32 border-b border-netral-20 py-7 first:border-y'>
            <div className='w-full max-w-sm space-y-2'>
              <h5 className='space-y-2 text-body-lg font-semibold'>Address</h5>
            </div>

            <Input
              id='name'
              placeholder='Please add your address'
              value='8502 Preston Rd. Inglewood, Maine 98380'
            />
          </div>
        </form>

        <Modal
          title='Hapus Data'
          width='max-w-[640px]'
          open={openModalPassword}
          setOpen={setOpenModalPassword}
        >
          <section className='space-y-6'>
            <Input
              type='password'
              id='password'
              label='Current Password'
              placeholder='Current password'
              variant='default'
              value='Halo1234567890'
            />
            <Input
              type='password'
              id='password'
              label='New Password'
              placeholder='New password'
              variant='default'
              value='Halo1234567890'
            />
            <Input
              type='password'
              id='password'
              label='Confirm Password'
              placeholder='New password'
              variant='default'
              value='Halo1234567890'
            />
          </section>

          <section className='flex w-full justify-end gap-3'>
            <Button
              size='lg'
              variant='primary-nude'
              onClick={() => setOpenModalPassword(false)}
            >
              Discard
            </Button>
            <Button
              size='lg'
              variant='primary-bg'
              onClick={openChangePasswordAlerts}
            >
              Save
            </Button>
          </section>
        </Modal>

        <Alerts
          variant='success'
          open={changePasswordAlerts}
          setOpen={setChangePasswordAlerts}
          title='Password Updated'
          desc='Password update was successful. It is possible to update the password again after 30 days.'
        />
      </section>

      <section className='w-full space-y-7 rounded-lg-10 bg-white p-6'>
        <Title variant='default' size='lg'>
          Manage Account
        </Title>

        <form>
          <div className='flex w-full items-center justify-between border-b border-netral-20 py-7 first:border-y'>
            <div className='flex w-full max-w-5xl items-center gap-32 space-y-2'>
              <h5 className='w-full max-w-sm text-body-lg font-semibold'>
                Email
              </h5>

              <Input
                type='text'
                id='name'
                placeholder='Please add your name'
                value='samantalegend@mail.com'
              />
            </div>

            <Button variant='primary-outline' size='md'>
              Change Email
            </Button>
          </div>

          <div className='flex w-full items-center justify-between border-b border-netral-20 py-7 first:border-y'>
            <div className='flex w-full max-w-5xl items-center gap-32 space-y-2'>
              <h5 className='w-full max-w-sm text-body-lg font-semibold'>
                Password
              </h5>

              <Input
                type='password'
                id='name'
                placeholder='Please add your password'
                value='beittt123'
                disabled
              />
            </div>

            <Button
              variant='primary-outline'
              size='md'
              onClick={() => setOpenModalPassword(true)}
            >
              Change Password
            </Button>
          </div>

          <div className='flex w-full items-center justify-between border-b border-netral-20 py-7 first:border-y'>
            <div className='flex w-full max-w-5xl items-center gap-32 space-y-2'>
              <h5 className='w-full max-w-sm text-body-lg font-semibold'>
                Password
              </h5>
            </div>
            <Button variant='error-bg' size='md'>
              Log out
            </Button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default DashboardSettings
