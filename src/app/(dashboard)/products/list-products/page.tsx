"use client"

import React from "react"
import Image from "next/image"
import { Switch } from "@headlessui/react"

import { Modal, PageAction } from "@/components/moleculs"
import { Alerts, Badge, Button, Checkbox, Title } from "@/components/atomics"

import {
  CheckIcon,
  FunnelIcon,
  PlusIcon,
  SortAscendingIcon
} from "@/assets/icons"

/**
 * ============================
 * Dummy Data - List Products
 * ============================
 */
const listProductsData = [
  {
    productName: "T-Men's UA Storm Armour Down 2.0 Jacket",
    productImage: "/list-products/ListProducts-1.png",
    category: "outer",
    status: "active",
    stock: 401,
    price: "$178"
  },
  {
    productName: "Windproof Handbell Oversized Long Coat",
    productImage: "/list-products/ListProducts-2.png",
    category: "outer",
    status: "scheduled",
    stock: 738,
    price: "$178"
  },
  {
    productName: "Women's Stripe Sweater",
    productImage: "/list-products/ListProducts-3.png",
    category: "sweater",
    status: "active",
    stock: 432,
    price: "$178"
  },
  {
    productName: "Women's Turtleneck Sweater",
    productImage: "/list-products/ListProducts-4.png",
    category: "sweater",
    status: "draft",
    stock: 0,
    price: "$178"
  },
  {
    productName: "One Set - Casual Hoodie with Buttons",
    productImage: "/list-products/ListProducts-5.png",
    category: "kids",
    status: "active",
    stock: 334,
    price: "$178"
  }
]

const DBProductsListProducts = () => {
  //----------------------------------------------------------------------------------------//
  const [active, setActive] = React.useState(false)
  const [openModalDraft, setOpenModalDraft] = React.useState(false)
  const [openModalDelete, setOpenModalDelete] = React.useState(false)
  const [openAlertsDraft, setOpenAlertsDraft] = React.useState(false)
  const [openAlertsDelete, setOpenAlertsDelete] = React.useState(false)
  //----------------------------------------------------------------------------------------//

  return (
    <div className='relative p-6 space-y-6'>
      <h1 className='font-semibold text-heading-sm'>Products</h1>

      <section className='relative p-6 bg-white rounded-lg-10'>
        <nav className='flex items-center justify-between mb-8'>
          <Title size='lg' variant='default'>
            Products List
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

            <Button
              size='md'
              variant='primary-bg'
              href='/products/list-products/add'
            >
              <PlusIcon className='h-4 w-4 stroke-white stroke-[4px]' />
              Add Product
            </Button>
          </div>
        </nav>

        {/* Table */}
        <div className='mb-6 overflow-x-auto'>
          <table className='w-full table-auto'>
            <thead className='font-semibold uppercase bg-netral-15 text-body-sm'>
              <tr>
                <th className='w-px px-3 py-4 whitespace-nowrap first:pl-5 last:pr-5'>
                  <Checkbox active={active} setActive={setActive} />
                </th>

                <th className='px-3 py-4 text-left whitespace-nowrap text-netral-50 first:pl-5 last:pr-5'>
                  <span className='font-semibold text-body-sm'>Product</span>
                </th>

                <th className='px-3 py-4 text-left whitespace-nowrap text-netral-50 first:pl-5 last:pr-5'>
                  <span className='font-semibold text-body-sm'>Category</span>
                </th>

                <th className='w-56 px-3 py-4 text-left whitespace-nowrap text-netral-50 first:pl-5 last:pr-5'>
                  <span className='font-semibold text-body-sm'>Status</span>
                </th>

                <th className='px-3 py-4 text-left whitespace-nowrap text-netral-50 first:pl-5 last:pr-5'>
                  <span className='font-semibold text-body-sm'>Stock</span>
                </th>

                <th className='px-3 py-4 text-left whitespace-nowrap text-netral-50 first:pl-5 last:pr-5'>
                  <span className='font-semibold text-body-sm'>Price</span>
                </th>

                <th className='px-3 py-4 text-left whitespace-nowrap text-netral-50 first:pl-5 last:pr-5'>
                  <span className='font-semibold text-body-sm'>Action</span>
                </th>
              </tr>
            </thead>
            <tbody className='pt-4 text-sm divide-y divide-netral-20'>
              {listProductsData.map((item) => (
                <tr key={item.productName}>
                  <td className='w-px px-3 py-5 whitespace-nowrap first:pl-5 last:pr-5'>
                    <Checkbox active={active} setActive={setActive} />
                  </td>

                  <td className='px-3 py-5 text-left whitespace-nowrap first:pl-5 last:pr-5'>
                    <div className='flex items-center gap-3'>
                      <div className='relative w-20 h-20 overflow-hidden rounded-lg-10'>
                        <Image
                          src={item.productImage}
                          className='object-cover w-full h-full'
                          alt='Products'
                          fill
                        />
                      </div>

                      <span className='w-48 font-medium break-words whitespace-pre-wrap text-body-base text-netral-80'>
                        {item.productName}
                      </span>
                    </div>
                  </td>

                  <td className='px-3 py-5 text-left whitespace-nowrap first:pl-5 last:pr-5'>
                    <span className='font-medium capitalize text-body-base text-netral-80'>
                      {item.category}
                    </span>
                  </td>

                  <td className='w-56 px-3 py-5 text-left capitalize whitespace-pre-wrap first:pl-5 last:pr-5'>
                    {item.status === "active" ? (
                      <Badge variant='success'>{item.status}</Badge>
                    ) : item.status === "scheduled" ? (
                      <Badge variant='info'>{item.status}</Badge>
                    ) : item.status === "draft" ? (
                      <Badge variant='warning'>{item.status}</Badge>
                    ) : null}
                  </td>

                  <td className='px-3 py-5 text-left whitespace-nowrap first:pl-5 last:pr-5'>
                    <span className='font-medium text-body-base text-netral-80'>
                      {item.stock}
                    </span>
                  </td>

                  <td className='px-3 py-5 text-left whitespace-nowrap first:pl-5 last:pr-5'>
                    <span className='font-medium capitalize text-body-base text-netral-80'>
                      {item.price}
                    </span>
                  </td>

                  <td className='px-3 py-5 text-left whitespace-nowrap first:pl-5 last:pr-5'>
                    <Button
                      size='md'
                      variant='primary-nude'
                      href={"/products/list-products/detail"}
                    >
                      Detail
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Page Action */}
      {active && (
        <PageAction
          variant='sticky'
          actionLabel='2 Product Selected'
          btnPrimaryLabel='Delete'
          btnPrimaryVariant='error-bg'
          btnPrimaryFun={() => setOpenModalDelete(true)}
          btnSecondaryLabel='Draft'
          btnsecondaryVariant='warning-outline'
          btnSecondaryFun={() => setOpenModalDraft(true)}
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
        title='Product has been deleted'
        desc='Product which already deleted can not be recovered.'
      />

      <Modal
        variant='warning'
        open={openModalDraft}
        title='Draft Product'
        className='max-w-lg'
        setOpen={setOpenModalDraft}
      >
        <main className='mt-4 mb-10'>
          <p className='text-body-base text-netral-80'>
            Are you sure want to draft this product?
          </p>
        </main>

        <footer className='flex justify-end w-full gap-3'>
          <Button
            size='md'
            variant='default-nude'
            onClick={() => setOpenModalDraft(false)}
          >
            Cancel
          </Button>
          <Button
            size='md'
            variant='warning-bg'
            onClick={() => {
              setOpenModalDraft(false)
              setOpenAlertsDraft(true)
            }}
          >
            Draft
          </Button>
        </footer>
      </Modal>

      <Alerts
        variant='warning'
        open={openAlertsDraft}
        setOpen={setOpenAlertsDraft}
        title='Product drafted'
        desc='Product which already drafted can be recovered.'
      />
    </div>
  )
}

export default DBProductsListProducts
