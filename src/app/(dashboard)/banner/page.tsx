'use client'

import React from 'react'
import Image from 'next/image'

import { Modal } from '@/components/moleculs'
import { Alerts, Button, Pagination, Title } from '@/components/atomics'

import {
  FolderSimplePlusIcon,
  MagnifyingGlassIcon,
  PencilSimpleIcon,
  RepeatIcon,
  SelectionPlusIcon,
  TrashIcon
} from '@/assets/icons'

import { DropzoneIll } from '@/assets/illustration'

const DBBanner = () => {
  const [activeState, setActiveState] = React.useState(1)
  const [openAlertsSuccess, setOpenAlertsSuccess] = React.useState(false)
  const [openModalConfirmation, setOpenModalConfirmation] =
    React.useState(false)
  const [openModalDropzoneBanner, setOpenModalDropzoneBanner] =
    React.useState(false)

  const nextState = () => {
    if (activeState > 1) {
      setOpenModalDropzoneBanner(false)

      setTimeout(() => {
        setOpenModalConfirmation(true)
      }, 500)

      setActiveState(1)
    } else {
      setActiveState(activeState + 1)
    }
  }

  return (
    <div className='relative p-6'>
      <h1 className='text-heading-sm font-semibold'>Banner</h1>

      <section className='relative space-y-6 rounded-lg-10 bg-white p-6'>
        {/* Navigation */}
        <nav className='space-y-6'>
          <div className='flex items-center justify-between'>
            <Title size='lg' variant='default'>
              Banner
            </Title>

            <Button
              size='md'
              variant='primary-bg'
              onClick={() => setOpenModalDropzoneBanner(true)}
            >
              <FolderSimplePlusIcon className='h-5 w-5 fill-white stroke-white stroke-[4px]' />
              Add Banner
            </Button>
          </div>

          <div className='relative w-96'>
            <MagnifyingGlassIcon className='absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-netral-50' />
            <input
              className='w-full rounded-lg border border-transparent bg-netral-20 px-3.5 py-2.5 pl-11  outline-0 ring-2 ring-transparent transition-all duration-300 ease-out focus-within:ring-primary-surface focus:border-primary-main'
              placeholder='Search'
            />
          </div>
        </nav>

        {/* Table */}
        <div className='mb-6 overflow-x-auto'>
          <table className='w-full table-auto'>
            <thead className='bg-netral-15 text-body-sm font-semibold uppercase'>
              <tr>
                <th className='w-px whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>No</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Image</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Type</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Created At</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Action</span>
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-netral-20 pt-4 text-sm'>
              {[1, 2, 3].map((item) => (
                <tr key={item}>
                  <td className='w-px whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      {item}
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <div className='relative aspect-video w-40 overflow-hidden rounded-lg-10'>
                      <Image
                        src={`/banner-${item}.png`}
                        className='h-full w-full object-cover'
                        alt={`Banner Image ${item}`}
                        fill
                      />
                    </div>
                  </td>

                  <td className='whitespace-pre-wrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='w-[200px] whitespace-pre-wrap break-words text-body-base font-medium text-netral-80'>
                      Banner Best Seller Collection
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      24-11-2022
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <div className='flex flex-row gap-3'>
                      <Button size='md' variant='default-bg'>
                        <PencilSimpleIcon className='h-5 w-5' />
                      </Button>

                      <Button size='md' variant='default-bg'>
                        <TrashIcon className='h-5 w-5 text-error-main' />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <Pagination />
      </section>

      <Modal
        variant='default'
        title='Add Banner'
        open={openModalDropzoneBanner}
        setOpen={setOpenModalDropzoneBanner}
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
          <main className='relative my-10 flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-netral-30 bg-netral-15'>
            <div className='relative aspect-video h-96 before:absolute before:z-10 before:h-full before:w-full before:bg-black/20'>
              <Button
                size='md'
                variant='default-bg'
                className='absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2'
              >
                <RepeatIcon className='h-5 w-5' />
                Replace
              </Button>
              <Image
                className='h-full w-full object-cover'
                src={'/banner-dropzone-1.png'}
                alt='Banner Dropzone 1'
                fill
              />
            </div>

            <div className='absolute bottom-4 right-4 z-30'>
              <Button size='md' variant='default-bg'>
                <SelectionPlusIcon className='h-5 w-5' />
                Crop
              </Button>
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

      <Modal
        variant='primary'
        open={openModalConfirmation}
        title='Add Banner'
        className='max-w-lg'
        setOpen={setOpenModalConfirmation}
      >
        <main className='mb-10 mt-4'>
          <p className='text-body-base text-netral-80'>
            Are you sure to add this banner?
          </p>
        </main>

        <footer className='flex w-full justify-end gap-3'>
          <Button
            size='md'
            variant='default-nude'
            onClick={() => setOpenModalConfirmation(false)}
          >
            Cancel
          </Button>

          <Button
            size='md'
            variant='primary-bg'
            onClick={() => {
              setOpenModalConfirmation(false)
              setOpenAlertsSuccess(true)
            }}
          >
            Yes
          </Button>
        </footer>
      </Modal>

      <Alerts
        variant='success'
        open={openAlertsSuccess}
        setOpen={setOpenAlertsSuccess}
        title='Banner added successfully'
        desc='Banner successfully added, you can edit or replace the banner in the action column.'
      />
    </div>
  )
}

export default DBBanner
