"use client"

import React from "react"
import { Switch } from "@headlessui/react"

import { Modal, PageAction } from "@/components/moleculs"
import {
  Alerts,
  Button,
  Checkbox,
  Pagination,
  Title
} from "@/components/atomics"

import { CheckIcon, MagnifyingGlassIcon, UserPlusIcon } from "@/assets/icons"

const DBUserRole = () => {
  const [active, setActive] = React.useState(false)
  const [openModalDelete, setOpenModalDelete] = React.useState(false)
  const [openAlertsDelete, setOpenAlertsDelete] = React.useState(false)

  return (
    <div className='relative space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>User Role</h1>

      <section className='relative space-y-6 rounded-lg-10 bg-white p-6'>
        {/* Navigation */}
        <nav className='space-y-6'>
          <Title size='lg' variant='default'>
            List User Role
          </Title>

          <div className='flex items-center justify-between'>
            <div className='relative w-96'>
              <MagnifyingGlassIcon className='absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-netral-50' />
              <input
                className='w-full rounded-lg border border-transparent bg-netral-20 px-3.5 py-2.5 pl-11  outline-0 ring-2 ring-transparent transition-all duration-300 ease-out focus-within:ring-primary-surface focus:border-primary-main'
                placeholder='Search'
              />
            </div>

            <Button size='md' variant='primary-bg' href='/user-role/add'>
              <UserPlusIcon className='h-5 w-5 fill-white stroke-white stroke-[4px]' />
              Add User Role
            </Button>
          </div>
        </nav>

        {/* Table */}
        <div className='mb-6 overflow-x-auto'>
          <table className='w-full table-auto'>
            <thead className='bg-netral-15 text-body-sm font-semibold uppercase'>
              <tr>
                <th className='w-px whitespace-nowrap px-3 py-4 first:pl-5 last:pr-5'>
                  <Checkbox active={active} setActive={setActive} />
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>User Name</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>
                    Email Address
                  </span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>User Role</span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>
                    Phone Number
                  </span>
                </th>

                <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                  <span className='text-body-sm font-semibold'>Date Ad</span>
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-netral-20 pt-4 text-sm'>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <tr key={item}>
                  <td className='w-px whitespace-nowrap px-3 py-5 first:pl-5 last:pr-5'>
                    <Checkbox active={active} setActive={setActive} />
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

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      Super Admin
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      (603) 555-0123
                    </span>
                  </td>

                  <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                    <span className='text-body-base font-medium text-netral-80'>
                      May 6, 2012
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
            actionLabel='Last saved'
            actionDesc='Nov 9, 2022-17.09'
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
              Are you sure want to delete this user role? User which already
              deleted can not be recovered.
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
      </section>
    </div>
  )
}

export default DBUserRole
