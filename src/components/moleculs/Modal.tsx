'use client'

import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { XIcon } from '@/assets/icons'
import { Title } from '../atomics'

interface Modal {
  children: React.ReactNode
  open: any
  setOpen: any
  title: string
  width: string
}

const Modal: React.FC<Modal> = ({ children, open, setOpen, title, width }) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.DialogTrigger></Dialog.DialogTrigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 z-[998] bg-black/25 data-[state=open]:animate-overlayShow' />
        <Dialog.Content
          className={`fixed left-1/2 top-1/4 z-[999] max-h-[85vh] w-full overflow-y-auto ${width} -translate-x-1/2 -translate-y-1/4 rounded-lg-10 bg-white p-6 shadow-lg focus:outline-none data-[state=open]:animate-contentShow`}
        >
          <Dialog.Title className='mb-10 flex items-center justify-between'>
            <Title size='sm' variant='default'>
              {title}
            </Title>
            <Dialog.Close asChild>
              <button aria-label='Close'>
                <XIcon className='h-6 w-6 text-netral-50' />
              </button>
            </Dialog.Close>
          </Dialog.Title>

          <main className='space-y-10'>{children}</main>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal
