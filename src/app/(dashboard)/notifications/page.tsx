import React from 'react'

import { Button, Title } from '@/components/atomics'
import { BagIcon } from '@/assets/icons'

const DashboardNotifications = () => {
  return (
    <div className='relative space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>Notification</h1>

      <section className='relative w-full space-y-7 rounded-lg-10 bg-white p-6'>
        <Title variant='default' size='lg'>
          Notifications List
        </Title>

        <section className='space-y-6'>
          <div className='flex items-center justify-between'>
            <h5 className='text-body-sm font-semibold'>Desember 15, 2022</h5>
            <button className='text-body-sm font-semibold uppercase'>
              Unread
            </button>
          </div>

          <figure className='relative flex items-start gap-5'>
            <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-netral-30'>
              <BagIcon className='h-6 w-6 text-netral-80' />
            </div>

            <section className='w-full space-y-6'>
              <div className='w-9/12 space-y-3'>
                <h3 className='text-body-xl font-medium'>New Order</h3>
                <p className='text-body-sm text-netral-60'>
                  There is a new order for {"Women's"} Clothing Azure products
                  in the Outer category with transaction number 20129380132.
                  Please check the details in the column below.
                </p>
              </div>

              <section className='flex w-full items-start justify-between gap-6 overflow-x-auto rounded-lg-10 border border-netral-20 px-3 py-5'>
                <div className='space-y-1.5'>
                  <h5 className='text-body-sm font-semibold uppercase text-netral-60'>
                    Transaction Number
                  </h5>

                  <p className='text-body-base font-semibold text-netral-80'>
                    20129380132
                  </p>
                </div>

                <div className='space-y-1.5'>
                  <h5 className='text-body-sm font-semibold uppercase text-netral-60'>
                    Name
                  </h5>

                  <p className='text-body-base font-semibold text-netral-80'>
                    Jane Cooper
                  </p>
                </div>

                <div className='space-y-1.5'>
                  <h5 className='text-body-sm font-semibold uppercase text-netral-60'>
                    Product
                  </h5>

                  <p className='text-body-base font-semibold text-netral-80'>
                    {"Women's Clothing Azure"}
                  </p>
                </div>

                <div className='space-y-1.5'>
                  <h5 className='text-body-sm font-semibold uppercase text-netral-60'>
                    Amount
                  </h5>

                  <p className='text-body-base font-semibold text-netral-80'>
                    22
                  </p>
                </div>

                <div className='space-y-1.5'>
                  <h5 className='text-body-sm font-semibold uppercase text-netral-60'>
                    Price
                  </h5>

                  <p className='text-body-base font-semibold text-netral-80'>
                    $300
                  </p>
                </div>

                <div className='space-y-1.5'>
                  <Button variant='primary-nude' size='lg'>
                    View
                  </Button>
                </div>
              </section>
            </section>

            <span className='absolute right-0 top-0'>16.44</span>
          </figure>
        </section>
      </section>
    </div>
  )
}

export default DashboardNotifications
