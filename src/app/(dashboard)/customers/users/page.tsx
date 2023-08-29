"use client"
import React from "react"
import Link from "next/link"
import { Switch } from "@headlessui/react"

import { Modal, PageAction } from "@/components/moleculs"
import { Alerts, Button, Pagination, Title } from "@/components/atomics"

import { CheckIcon, FunnelIcon, SortAscendingIcon } from "@/assets/icons"
import { EmptyState } from "@/components/templates"
import { NoUsersIll } from "@/assets/illustration"

const DBCustomersUsers = () => {
  //----------------------------------------------------------------------------------//
  const [active, setActive] = React.useState(false)
  const [emptyState, setEmptyState] = React.useState(true)
  const [openModalDelete, setOpenModalDelete] = React.useState(false)
  const [openAlertsDelete, setOpenAlertsDelete] = React.useState(false)
  //----------------------------------------------------------------------------------//

  return (
    <div className='relative space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>Users</h1>

      <section className='relative rounded-lg-10 bg-white p-6'>
        <nav className='mb-8 flex items-center justify-between'>
          <Title size='lg' variant='default'>
            Users
          </Title>

          <div className='flex flex-row gap-3'>
            <Button size='md' variant='default-bg'>
              Sort
              <SortAscendingIcon className='h-4 w-4 stroke-netral-100 stroke-[4px]' />
            </Button>

            <Button size='md' variant='default-bg'>
              Filter
              <FunnelIcon className='h-4 w-4 stroke-netral-100 stroke-[4px]' />
            </Button>
          </div>
        </nav>

        {/* Table */}
        {emptyState ? (
          <EmptyState
            ill={<NoUsersIll />}
            toggler={setEmptyState}
            title='No users list'
            description='The users you are looking for is not available.'
          />
        ) : (
          <>
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
                              ? "border-primary-border bg-primary-main text-white ring-primary-surface"
                              : "border-netral-60 bg-netral-20 ring-netral-15"
                          } relative inline-flex h-5 w-5 items-center rounded-md border ring-2`}
                        >
                          {active && <CheckIcon className='h-5 w-5' />}
                        </Switch>
                        <span className='sr-only'>Select All</span>
                      </div>
                    </th>

                    <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>Name</span>
                    </th>

                    <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>
                        Email Adress
                      </span>
                    </th>

                    <th className='w-56 whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>
                        Complete Adress
                      </span>
                    </th>

                    <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>
                        Created At
                      </span>
                    </th>

                    <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                      <span className='text-body-sm font-semibold'>
                        Last Activity
                      </span>
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
                                ? "border-primary-border bg-primary-main text-white ring-primary-surface"
                                : "border-netral-60 bg-white ring-netral-15"
                            } relative inline-flex h-5 w-5 items-center rounded-md border ring-2`}
                          >
                            {active && <CheckIcon className='h-5 w-5' />}
                          </Switch>
                        </div>
                      </td>
                      <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-netral-80'>
                          Samanta Legend
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-netral-80'>
                          samanta@mail.com
                        </span>
                      </td>

                      <td className='w-56 whitespace-pre-wrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                        <span className=' whitespace-pre-wrap break-words text-body-base font-medium text-netral-80'>
                          2972 Westheimer Rd. Santa Ana, Illinois 85486
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-netral-80'>
                          Sep 19, 2010
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                        <span className='text-body-base font-medium text-netral-80'>
                          May 6, 2012
                        </span>
                      </td>

                      <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                        <Link
                          href={"/customers/users/detail"}
                          className='text-body-base font-medium text-primary-main'
                        >
                          Detail
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Pagination />
          </>
        )}
      </section>

      {/* Page Action */}
      {active && (
        <PageAction
          variant='sticky'
          actionLabel='2 Product Selected'
          btnPrimaryLabel='Delete'
          btnPrimaryVariant='error-bg'
          btnPrimaryFun={() => setOpenModalDelete(true)}
        />
      )}

      <Modal
        variant='error'
        open={openModalDelete}
        title='Delete User'
        className='max-w-lg'
        setOpen={setOpenModalDelete}
      >
        <main className='mb-10 mt-4'>
          <p className='text-body-base text-netral-80'>
            Are you sure want to delete this user? User which already deleted
            can not be recovered.
          </p>
        </main>

        <footer className='flex w-full justify-end gap-3'>
          <Button
            size='md'
            variant='default-nude'
            onClick={() => setOpenModalDelete(false)}
          >
            Cancel
          </Button>
          <Button
            size='md'
            variant='error-bg'
            onClick={() => {
              setOpenModalDelete(false)
              setOpenAlertsDelete(true)
            }}
          >
            Submit
          </Button>
        </footer>
      </Modal>

      <Alerts
        variant='error'
        open={openAlertsDelete}
        setOpen={setOpenAlertsDelete}
        title='Users has been deleted'
        desc='User which already deleted can not be recovered.'
      />
    </div>
  )
}

export default DBCustomersUsers
