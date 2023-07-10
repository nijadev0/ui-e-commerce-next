'use client'
import React from 'react'
import Image from 'next/image'
import { Switch } from '@headlessui/react'

import {
  Alerts,
  Badge,
  Button,
  Input,
  Pagination,
  Title
} from '@/components/atomics'

import {
  CheckIcon,
  LightningIcon,
  MagnifyingGlassIcon,
  TrashIcon
} from '@/assets/icons'
import { Modal, PageAction } from '@/components/moleculs'

const DBFlashSale = () => {
  const [active, setActive] = React.useState(false)
  const [openModalFlashSale, setOpenModalFlashSale] = React.useState(false)
  const [activeState, setActiveState] = React.useState(1)
  const [openSuccess, setOpenSuccess] = React.useState(false)

  const openSuccessAlerts = () => {
    setOpenSuccess(true)

    setTimeout(() => {
      setOpenSuccess(false)
    }, 3000)
  }

  const resetModal = () => {
    if (activeState === 4) {
      openSuccessAlerts()
    }
  }

  React.useEffect(() => {
    resetModal()
    setActiveState(1)
  }, [])

  return (
    <div className='relative space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>Products List</h1>

      <section className='relative space-y-6 rounded-lg-10 bg-white p-6'>
        {/* Navigation */}
        <nav className='space-y-6'>
          <div className='flex items-center justify-between'>
            <Title size='lg' variant='default'>
              Products List
            </Title>

            <div className='relative w-96'>
              <MagnifyingGlassIcon className='absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-netral-50' />
              <input
                className='w-full rounded-lg border border-transparent bg-netral-20 px-3.5 py-2.5 pl-11  outline-0 ring-2 ring-transparent transition-all duration-300 ease-out focus-within:ring-primary-surface focus:border-primary-main'
                placeholder='Search'
              />
            </div>
          </div>
        </nav>

        {/* Table */}
        <div className='mb-6 overflow-x-auto'>
          <table className='w-full table-auto'>
            <thead className='bg-netral-15 text-body-sm font-semibold uppercase'>
              <tr>
                <th className='w-px whitespace-nowrap px-3 py-4 first:pl-5 last:pr-5'>
                  <div className='h-6 w-6'>
                    <Switch
                      checked={active}
                      onChange={setActive}
                      className={`Checkbox ${
                        active
                          ? 'border-primary-border bg-primary-main text-white ring-primary-surface'
                          : 'border-netral-60 bg-netral-20 ring-netral-15'
                      } relative inline-flex h-5 w-5 items-center rounded-md border ring-2`}
                    >
                      {active && <CheckIcon className='h-5 w-5' />}
                    </Switch>
                    <span className='sr-only'>Select All</span>
                  </div>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Product</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Category</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Status</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Stock</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Price</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Action</span>
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-netral-20 pt-4 text-sm'>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <tr key={item}>
                  <td className='w-px whitespace-nowrap px-3 py-5 first:pl-5 last:pr-5'>
                    <div className='h-6 w-6'>
                      <Switch
                        checked={active}
                        onChange={setActive}
                        className={`Checkbox ${
                          active
                            ? 'border-primary-border bg-primary-main text-white ring-primary-surface'
                            : 'border-netral-60 bg-white ring-netral-15'
                        } relative inline-flex h-5 w-5 items-center rounded-md border ring-2`}
                      >
                        {active && <CheckIcon className='h-5 w-5' />}
                      </Switch>
                    </div>
                  </td>
                  <td className='whitespace-pre-wrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <section className='flex items-center gap-3'>
                      <div className='relative h-20 w-20 overflow-hidden rounded-lg-10'>
                        <Image
                          className='h-full w-full object-cover'
                          src={'/products-1.png'}
                          alt='Products 1'
                          fill
                        />
                      </div>

                      <span className='w-48 whitespace-pre-wrap text-body-base font-medium text-netral-80'>
                        T-Men's UA Storm Armour Down 2.0 Jacket
                      </span>
                    </section>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      Outer
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <Badge variant='success'>Success</Badge>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      401
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      $178
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-primary-main'>
                      Detail
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <Pagination />

        {/* Page Action */}
        {active && (
          <PageAction
            actionLabel='2 Product Selected'
            btnPrimaryLabel={
              <>
                <LightningIcon className='h-4 w-4 stroke-[4px] text-white' />
                Add flash sale
              </>
            }
            btnPrimaryVariant='primary-bg'
            btnPrimaryFun={() => setOpenModalFlashSale(true)}
          />
        )}
      </section>

      <Modal
        variant='default'
        className='max-w-6xl'
        title='Add Flash Sale'
        open={openModalFlashSale}
        setOpen={setOpenModalFlashSale}
      >
        <main className='my-10 flex flex-col items-center justify-center gap-10'>
          <nav className='relative w-fit'>
            <div className='absolute left-1/2 top-5 -z-10 h-0.5 w-10/12 -translate-x-1/2 bg-netral-40'></div>
            <section className='flex items-center justify-center gap-20'>
              <div className='relative z-10 flex flex-col items-center gap-2'>
                <span className='flex h-10 w-10 items-center justify-center rounded-full border border-primary-border bg-primary-main text-body-xl font-semibold text-white'>
                  {activeState === 1 ? (
                    '1'
                  ) : (
                    <CheckIcon className='h-6 w-6 text-white' />
                  )}
                </span>

                <h5 className='text-body-sm font-semibold text-netral-100'>
                  Set Date & Time
                </h5>
              </div>

              <div className='flex flex-col items-center gap-2'>
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                    activeState > 2
                      ? 'border-primary-border bg-primary-main'
                      : 'border-netral-50 bg-netral-50'
                  } text-body-xl font-semibold text-white`}
                >
                  {activeState > 0 && activeState <= 2 && '2'}

                  {activeState > 2 && (
                    <CheckIcon className='h-6 w-6 text-white' />
                  )}
                </span>

                <h5 className='text-body-sm font-semibold text-netral-50'>
                  Select Merchant
                </h5>
              </div>

              <div className='flex flex-col items-center gap-2'>
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                    activeState < 3
                      ? 'border-netral-50 bg-netral-50'
                      : 'border-primary-border bg-primary-main'
                  } text-body-xl font-semibold text-white`}
                >
                  3
                </span>
                <h5 className='text-body-sm font-semibold text-netral-50'>
                  Confirmation
                </h5>
              </div>
            </section>
          </nav>

          <header className='space-y-2 text-center'>
            <h3 className='text-heading-sm font-semibold'>
              {activeState === 1 && 'Set Date & Time'}
              {activeState === 2 && 'Set Discount'}
              {activeState === 3 && 'Set Confirmation'}
            </h3>
            <p className='text-body-base text-netral-50'>
              {activeState === 1 &&
                'Set the date and time for the upcoming flash sale'}
              {activeState === 2 &&
                'Set a discount for each product in the flash sale'}
              {activeState === 3 &&
                'Double check each product for the upcoming flash sale'}
            </p>
          </header>

          {activeState === 1 && (
            <div className='grid w-full grid-cols-2 gap-6'>
              <Input
                id='start-date'
                variant='default'
                label='Start Date'
                placeholder='DD/MM/YYYY'
              />

              <Input
                id='end-date'
                variant='default'
                label='End Date'
                placeholder='DD/MM/YYYY'
              />

              <Input
                id='start-time'
                variant='default'
                label='Start Time'
                placeholder='00.00'
              />

              <Input
                id='end-time'
                variant='default'
                label='End Time'
                placeholder='00.00'
              />
            </div>
          )}

          {activeState === 2 && (
            <div className='w-full overflow-x-auto'>
              <table className='w-full table-auto'>
                <thead className='bg-netral-15 text-body-sm font-semibold uppercase'>
                  <tr>
                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>
                        Product
                      </span>
                    </th>

                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>
                        Category
                      </span>
                    </th>

                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>Price</span>
                    </th>

                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>Quota</span>
                    </th>

                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>
                        Discount by Percent
                      </span>
                    </th>

                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-netral-20 pt-4 text-sm'>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <tr key={item}>
                      <td className='whitespace-pre-wrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='w-24 whitespace-pre-wrap text-body-base font-medium text-netral-80'>
                          One Set - Casual Hoodie with Buttons for Tooddler
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-netral-80'>
                          Hodie
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-netral-80'>
                          $309C
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <Input
                          id='start-date'
                          variant='default'
                          placeholder='Quota'
                          value='65'
                        />
                      </td>

                      <td className='whitespace-nowrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <Input
                          id='start-date'
                          variant='default'
                          placeholder='Discount'
                          value='30'
                        />
                      </td>

                      <td className='whitespace-nowrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <Button size='sm' variant='default-bg'>
                          <TrashIcon className='h-4 w-4 stroke-[4px] text-error-main' />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeState === 3 && (
            <div className='w-full overflow-x-auto'>
              <table className='w-full table-auto'>
                <thead className='bg-netral-15 text-body-sm font-semibold uppercase'>
                  <tr>
                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>No</span>
                    </th>

                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>
                        Product
                      </span>
                    </th>

                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>
                        Category
                      </span>
                    </th>

                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>Price</span>
                    </th>

                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>Quota</span>
                    </th>

                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>
                        Discount
                      </span>
                    </th>

                    <th className='whitespace-nowrap px-8 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>
                        Discount Percent
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-netral-20 pt-4 text-sm'>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <tr key={item}>
                      <td className='whitespace-nowrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-primary-main'>
                          {item}
                        </span>
                      </td>

                      <td className='whitespace-pre-wrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='w-24 whitespace-pre-wrap text-body-base font-medium text-netral-80'>
                          One Set - Casual Hoodie with Buttons for Tooddler
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-netral-80'>
                          Jacket
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-netral-80'>
                          22
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-netral-80'>
                          $129
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-netral-80'>
                          $30
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-8 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-netral-80'>
                          $232
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>

        <footer className='flex justify-end gap-3'>
          <Button
            size='md'
            variant='primary-nude'
            onClick={() => {
              if (activeState === 1) {
                setOpenModalFlashSale(false)
              } else {
                setActiveState(activeState - 1)
              }
            }}
          >
            {activeState === 1 ? 'Cancel' : 'Previous'}
          </Button>

          <Button
            size='md'
            variant='primary-bg'
            onClick={() => {
              if (activeState < 3) {
                if (openModalFlashSale === false) {
                  setActiveState(1)
                } else {
                  setActiveState(activeState + 1)
                }
              } else {
                setActiveState(1)
                setOpenModalFlashSale(false)
                openSuccessAlerts()
              }
            }}
          >
            {activeState === 3 ? 'Submit' : 'Next'}
          </Button>
        </footer>
      </Modal>

      <Alerts
        variant='success'
        open={openSuccess}
        setOpen={setOpenSuccess}
        title='Message Success'
        desc='Your message sent successfuly'
      />
    </div>
  )
}

export default DBFlashSale
