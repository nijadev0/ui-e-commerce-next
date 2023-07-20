'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Modal, PageAction } from '@/components/moleculs'
import { Alerts, Button, Input, Title } from '@/components/atomics'

import { DropzoneIll } from '@/assets/illustration'
import { PencilSimpleIcon, UploadSimpleIcon } from '@/assets/icons'

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
  const [openModalDropzone, setOpenModalDropzone] = React.useState(false)
  const [activeState, setActiveState] = React.useState(1)
  const [dropzone, setDropzone] = React.useState(true)

  const nextState = () => {
    if (activeState > 1) {
      setOpenModalDropzone(false)
      setActiveState(1)
      setDropzone(false)
    } else {
      setActiveState(activeState + 1)
    }
  }

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

            <div
              className={`Dropzone relative flex w-full flex-col items-center justify-center rounded-lg-10 border-2 border-netral-30 bg-netral-15 ${
                dropzone ? 'border-dashed py-14' : 'border-solid py-0'
              }`}
            >
              {dropzone ? (
                <div className='flex flex-col items-center'>
                  <UploadSimpleIcon className='h-8 w-8 stroke-2 text-netral-50' />

                  <Button
                    size='sm'
                    variant='primary-bg'
                    className='mb-2 mt-5'
                    onClick={() => setOpenModalDropzone(true)}
                  >
                    Add Image
                  </Button>

                  <p className='text-center text-body-sm text-netral-50'>
                    or drop image to upload
                  </p>
                </div>
              ) : (
                <>
                  <div className='relative z-0 aspect-video h-auto w-96'>
                    <Image
                      className='h-full w-full object-cover'
                      alt='Image'
                      src={'/outlet-1.jpg'}
                      fill
                    />
                  </div>

                  <div className='absolute right-3 top-3 z-10 h-fit w-fit'>
                    <Button size='sm' variant='primary-bg'>
                      Edit
                      <PencilSimpleIcon className='h-4 w-4 stroke-[4px] text-white ' />
                    </Button>
                  </div>
                </>
              )}
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

      <Modal
        variant='default'
        title='Add Image'
        open={openModalDropzone}
        setOpen={setOpenModalDropzone}
        className='max-w-4xl'
      >
        {activeState === 1 && (
          <main className='my-10 flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-netral-30 bg-netral-15 py-20'>
            <DropzoneIll className='h-32 w-32' />

            <h5 className='mb-1 mt-6 text-body-lg font-semibold'>
              Click to upload, or drag and drop
            </h5>

            <p className='text-body-sm text-netral-50'>
              {'SVG, PNG, JPEG (MAX 800X400px)'}
            </p>
          </main>
        )}

        {activeState === 2 && (
          <main className='my-10 flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-netral-30 bg-netral-15'>
            <div className='relative aspect-video h-96'>
              <Image
                className='h-full w-full object-cover'
                alt='Image'
                src={'/outlet-1.jpg'}
                fill
              />
            </div>
          </main>
        )}

        <footer className='flex flex-row justify-end gap-3'>
          <Button size='md' variant='default-nude'>
            Discard
          </Button>

          <Button size='md' variant='primary-bg' onClick={nextState}>
            Save
          </Button>
        </footer>
      </Modal>
    </div>
  )
}

export default DBOutletEdit
