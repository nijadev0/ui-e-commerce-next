"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Tab } from "@headlessui/react"

import { EmptyState } from "@/components/templates"
import { Modal, PageAction } from "@/components/moleculs"
import { Alerts, Badge, Button, Checkbox, Title } from "@/components/atomics"

import {
  ArrowRightIcon,
  FunnelIcon,
  ListIcon,
  PlusIcon,
  SortAscendingIcon,
  SquaresFourIcon
} from "@/assets/icons"
import { NoCategoryIll } from "@/assets/illustration"

const DBCategories = () => {
  // ------------------------------------------------------------------------------ //
  const [isEmpty, setIsEmpty] = React.useState(true)
  // ------------------------------------------------------------------------------ //
  const [active, setActive] = React.useState(false)
  // ------------------------------------------------------------------------------ //
  const [openModalDelete, setOpenModalDelete] = React.useState(false)
  const [openModalDraft, setOpenModalDraft] = React.useState(false)
  // ------------------------------------------------------------------------------ //
  const [openAlertsDelete, setOpenAlertsDelete] = React.useState(false)
  const [openAlertsDraft, setOpenAlertsDraft] = React.useState(false)
  // ------------------------------------------------------------------------------ //
  return (
    <div className='relative min-h-screen space-y-6 p-6'>
      <h1 className='text-heading-sm font-semibold'>Banner</h1>

      <section className='relative space-y-6 rounded-lg-10 bg-white p-6'>
        <Tab.Group>
          {/* Navigation */}
          <nav className='space-y-6'>
            <div className='flex items-center justify-between'>
              <Title size='lg' variant='default'>
                Categories List
              </Title>

              <Tab.List>
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
                    href='/products/categories/add'
                  >
                    <PlusIcon className='h-4 w-4 fill-white stroke-white stroke-[4px]' />
                    Add Category
                  </Button>

                  <Tab
                    className={
                      "rounded-lg-10 border p-2 outline-0 transition-all duration-300 ease-out hover:bg-netral-20 ui-selected:border-primary-border ui-selected:bg-primary-surface ui-selected:text-primary-main ui-not-selected:border-netral-30 ui-not-selected:text-netral-100"
                    }
                  >
                    <SquaresFourIcon className='h-6 w-6' />
                  </Tab>

                  <Tab
                    className={
                      "rounded-lg-10 border p-2 outline-0 transition-all duration-300 ease-out hover:bg-netral-20 ui-selected:border-primary-border ui-selected:bg-primary-surface ui-selected:text-primary-main ui-not-selected:border-netral-30 ui-not-selected:text-netral-100"
                    }
                  >
                    <ListIcon className='h-6 w-6' />
                  </Tab>
                </div>
              </Tab.List>
            </div>
          </nav>

          <Tab.Panels>
            {/* Card Version */}
            <Tab.Panel>
              <div className='grid grid-cols-4 gap-5'>
                {[1, 2, 3, 4, 5].map((item) => (
                  <figure key={item} className='relative w-full space-y-3'>
                    <div className='absolute left-3 top-6 z-20'>
                      <Checkbox active={active} setActive={setActive} />
                    </div>

                    <div className='relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg-10 bg-netral-15'>
                      <Link
                        href={"/products/categories/detail"}
                        className='absolute z-10 flex h-full w-full items-center justify-center bg-black/25 opacity-0 transition-all duration-500 ease-out hover:opacity-100'
                      >
                        <button className='flex items-center gap-2 rounded-lg border-2 border-white p-2 px-4 font-semibold text-white transition-all duration-300 ease-out hover:bg-white/25'>
                          Detail
                          <ArrowRightIcon className='h-5 w-5 stroke-2 text-white' />
                        </button>
                      </Link>

                      <div className='relative aspect-square h-32 2xl:h-40'>
                        <Image
                          src={"/categories-1.png"}
                          alt='Categories 1'
                          sizes='responsive'
                          fill
                        />
                      </div>
                    </div>

                    <figcaption className='space-y-1.5'>
                      <h5 className='text-body-xl font-semibold'>Outer</h5>
                      <p className='line-clamp-2 text-body-sm text-netral-50'>
                        Discovery a variety of outers to keep yourself warm with
                        stylish and comfortable ways.
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Tab.Panel>

            {/* Table Version */}
            <Tab.Panel>
              {/* Table */}
              <div className='mb-6 overflow-x-auto'>
                <table className='w-full table-auto'>
                  <thead className='bg-netral-15 text-body-sm font-semibold uppercase'>
                    <tr>
                      <th className='w-px whitespace-nowrap px-3 py-4 first:pl-5 last:pr-5'>
                        <Checkbox active={active} setActive={setActive} />
                      </th>

                      <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                        <span className='text-body-sm font-semibold'>
                          Category
                        </span>
                      </th>

                      <th className='whitespace-nowrap px-3 py-4 pr-20 text-left text-netral-50 first:pl-5 last:pr-5'>
                        <span className='text-body-sm font-semibold'>
                          Description
                        </span>
                      </th>

                      <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                        <span className='text-body-sm font-semibold'>
                          Status
                        </span>
                      </th>

                      <th className='whitespace-nowrap px-3 py-4 text-left text-netral-50 first:pl-5 last:pr-5'>
                        <span className='text-body-sm font-semibold'>
                          Action
                        </span>
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
                          <div className='flex items-center gap-3'>
                            <div className='relative h-20 w-20 overflow-hidden rounded-lg-10'>
                              <Image
                                src={"/products-1.png"}
                                className='h-full w-full object-cover'
                                alt='Products'
                                fill
                              />
                            </div>

                            <span className='w-48 whitespace-pre-wrap break-words text-body-base font-medium text-netral-80'>
                              {"T-Men's UA Storm Armour Down 2.0 Jacket"}
                            </span>
                          </div>
                        </td>

                        <td className='whitespace-nowrap px-3 py-5 pr-20 text-left first:pl-5 last:pr-5'>
                          <div className='w-72'>
                            <span className='w-72 whitespace-pre-wrap break-words text-body-base font-medium text-netral-80'>
                              Discover easy and casual t-shirt for women and men
                              with variety of colors, pattern and comfy
                              materials.
                            </span>
                          </div>
                        </td>

                        <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                          <span className='text-body-base font-medium text-netral-80'>
                            <Badge variant='success'>Active</Badge>
                          </span>
                        </td>

                        <td className='whitespace-nowrap px-3 py-5 text-left first:pl-5 last:pr-5'>
                          <Link
                            href={"/products/list-products/detail"}
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
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
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
        title='Delete Category'
        className='max-w-lg'
        setOpen={setOpenModalDelete}
      >
        <main className='mb-10 mt-4'>
          <p className='text-body-base text-netral-80'>
            Are you sure want to delete this category? Category which already
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
        title='Category has been deleted'
        desc='Category which already deleted can not be recovered.'
      />

      <Modal
        variant='warning'
        open={openModalDraft}
        title='Draft Category'
        className='max-w-lg'
        setOpen={setOpenModalDraft}
      >
        <main className='mb-10 mt-4'>
          <p className='text-body-base text-netral-80'>
            Are you sure want to draft this category?{" "}
          </p>
        </main>

        <footer className='flex w-full justify-end gap-3'>
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
        title='Category has been drafted'
        desc="Don't worry, you can access drafted categories. "
      />
    </div>
  )
}

export default DBCategories
