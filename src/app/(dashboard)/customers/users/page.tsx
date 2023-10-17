"use client"
import React from "react"

import { Modal, PageAction } from "@/components/moleculs"
import {
  Alerts,
  Button,
  Checkbox,
  Pagination,
  Title
} from "@/components/atomics"

import { FunnelIcon, SortAscendingIcon } from "@/assets/icons"

const usersData = [
  {
    name: "Samanta Legend",
    email: "samanta@mail.com",
    address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    createAt: "Orange",
    date: "May 6, 2012"
  },
  {
    name: "Annette Black",
    email: "annette1@mail.com",
    address: "3517 W. Gray St. Utica, Pennsylvania 57867",
    createAt: "Toledo",
    date: "April 28, 2016"
  },
  {
    name: "Dianne Russell",
    email: "rdianne@mail.com",
    address: "8502 Preston Rd. Inglewood, Maine 98380",
    createAt: "Naperville",
    date: "November 16, 2014"
  },
  {
    name: "Devon Lane",
    email: "delane@mail.com",
    address: "2464 Royal Ln. Mesa, New Jersey 45463",
    createAt: "Fairfield",
    date: "March 23, 2013"
  },
  {
    name: "Marvin McKinney",
    email: "marvin5@mail.com",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    createAt: "Austin",
    date: "November 16, 2014"
  },
  {
    name: "Jerome Bell",
    email: "belljer@mail.com",
    address: "8502 Preston Rd. Inglewood, Maine 98380",
    createAt: "Orange",
    date: "March 23, 2013"
  }
]

const DBCustomersUsers = () => {
  //----------------------------------------------------------------------------------//
  const [active, setActive] = React.useState(false)
  const [openModalDelete, setOpenModalDelete] = React.useState(false)
  const [openAlertsDelete, setOpenAlertsDelete] = React.useState(false)
  //----------------------------------------------------------------------------------//

  return (
    <div className='relative p-6 space-y-6'>
      <h1 className='font-semibold text-heading-sm'>Users</h1>

      <section className='relative p-6 bg-white rounded-lg-10'>
        <nav className='flex items-center justify-between mb-8'>
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

        <div className='mb-6 overflow-x-auto'>
          <table className='w-full table-auto'>
            <thead className='font-semibold uppercase bg-netral-15 text-body-sm'>
              <tr>
                <th className='w-px px-3 py-4 whitespace-nowrap first:pl-5 last:pr-5'>
                  <Checkbox active={active} setActive={setActive} />
                </th>

                <th className='px-3 py-4 text-left whitespace-nowrap text-netral-50 first:pl-5 last:pr-5'>
                  <span className='font-semibold text-body-sm'>Name</span>
                </th>

                <th className='px-3 py-4 text-left whitespace-nowrap text-netral-50 first:pl-5 last:pr-5'>
                  <span className='font-semibold text-body-sm'>
                    Email Adress
                  </span>
                </th>

                <th className='w-56 px-3 py-4 text-left whitespace-nowrap text-netral-50 first:pl-5 last:pr-5'>
                  <span className='font-semibold text-body-sm'>
                    Complete Adress
                  </span>
                </th>

                <th className='px-3 py-4 text-left whitespace-nowrap text-netral-50 first:pl-5 last:pr-5'>
                  <span className='font-semibold text-body-sm'>Created At</span>
                </th>

                <th className='px-3 py-4 text-left whitespace-nowrap text-netral-50 first:pl-5 last:pr-5'>
                  <span className='font-semibold text-body-sm'>
                    Last Activity
                  </span>
                </th>

                <th className='px-3 py-4 text-left whitespace-nowrap text-netral-50 first:pl-5 last:pr-5'>
                  <span className='font-semibold text-body-sm'>Action</span>
                </th>
              </tr>
            </thead>
            <tbody className='pt-4 text-sm divide-y divide-netral-20'>
              {usersData.map((item) => (
                <tr key={item.email}>
                  <td className='w-px px-3 py-5 whitespace-nowrap first:pl-5 last:pr-5'>
                    <Checkbox active={active} setActive={setActive} />
                  </td>
                  <td className='px-3 py-5 text-left whitespace-nowrap first:pl-5 last:pr-5'>
                    <span className='font-medium text-body-base text-netral-80'>
                      {item.name}
                    </span>
                  </td>

                  <td className='px-3 py-5 text-left whitespace-nowrap first:pl-5 last:pr-5'>
                    <span className='font-medium text-body-base text-netral-80'>
                      {item.email}
                    </span>
                  </td>

                  <td className='w-56 px-3 py-5 text-left whitespace-pre-wrap first:pl-5 last:pr-5'>
                    <span className='font-medium break-words whitespace-pre-wrap text-body-base text-netral-80'>
                      {item.address}
                    </span>
                  </td>

                  <td className='px-3 py-5 text-left whitespace-nowrap first:pl-5 last:pr-5'>
                    <span className='font-medium text-body-base text-netral-80'>
                      {item.createAt}
                    </span>
                  </td>

                  <td className='px-3 py-5 text-left whitespace-nowrap first:pl-5 last:pr-5'>
                    <span className='font-medium text-body-base text-netral-80'>
                      {item.date}
                    </span>
                  </td>

                  <td className='px-3 py-5 text-left whitespace-nowrap first:pl-5 last:pr-5'>
                    <Button
                      size='md'
                      variant='primary-nude'
                      href='/customers/users/detail'
                    >
                      Detail
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination />
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
        <main className='mt-4 mb-10'>
          <p className='text-body-base text-netral-80'>
            Are you sure want to delete this user? User which already deleted
            can not be recovered.
          </p>
        </main>

        <footer className='flex justify-end w-full gap-3'>
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
