"use client"

import React from "react"

import { EmptyState } from "@/components/templates"
import { Button, Pagination, Title } from "@/components/atomics"

import { StoreFrontIcon } from "@/assets/icons"
import { NoOutletsIll } from "@/assets/illustration"

const DBOutlets = () => {
  // ------------------------------------------------------------------------------//
  const [emptyState, setEmptyState] = React.useState(true)
  // ------------------------------------------------------------------------------//
  return (
    <div className='relative space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>Outlets</h1>

      <section className='relative space-y-6 rounded-lg-10 bg-white p-6'>
        <nav className='flex items-center justify-between'>
          <Title size='lg' variant='default'>
            Outlet List
          </Title>

          <Button size='md' variant='primary-bg'>
            <StoreFrontIcon className='h-5 w-5 text-white' />
            Add Outlet
          </Button>
        </nav>

        {emptyState ? (
          <EmptyState
            ill={<NoOutletsIll />}
            toggler={setEmptyState}
            title='No outlet list'
            description='The outlet you are looking for is not available.'
          />
        ) : (
          <>
            {/* Table */}
            <div className='mb-6 overflow-x-auto'>
              <table className='w-full table-auto'>
                <thead className='bg-netral-15 text-body-sm font-semibold uppercase'>
                  <tr>
                    <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:rounded-l-lg first:pl-5 last:rounded-r-lg last:pr-5'>
                      <span className='text-body-sm font-semibold'>
                        Outlet Name
                      </span>
                    </th>

                    <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:rounded-l-lg first:pl-5 last:rounded-r-lg last:pr-5'>
                      <span className='text-body-sm font-semibold'>
                        Outlet Adress
                      </span>
                    </th>

                    <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:rounded-l-lg first:pl-5 last:rounded-r-lg last:pr-5'>
                      <span className='text-body-sm font-semibold'>
                        Outlet Phone Number
                      </span>
                    </th>

                    <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:rounded-l-lg first:pl-5 last:rounded-r-lg last:pr-5'>
                      <span className='text-body-sm font-semibold'>
                        Manager Branch
                      </span>
                    </th>

                    <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:rounded-l-lg first:pl-5 last:rounded-r-lg last:pr-5'>
                      <span className='text-body-sm font-semibold'>
                        Total Transaction
                      </span>
                    </th>

                    <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:rounded-l-lg first:pl-5 last:rounded-r-lg last:pr-5'>
                      <span className='text-body-sm font-semibold'>Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-netral-20 pt-4 text-sm'>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                    <tr key={item}>
                      <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-netral-80'>
                          Brand Here Delaware
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-netral-80'>
                          6391 Elgin St. Celina, Delaware 10299
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-netral-80'>
                          (480) 555-0103
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-netral-80'>
                          Arlene McCoy
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-netral-80'>
                          $5392
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                        <Button
                          size='md'
                          variant='primary-nude'
                          href='/outlet/detail'
                        >
                          Detail
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <Pagination />
          </>
        )}
      </section>
    </div>
  )
}

export default DBOutlets
