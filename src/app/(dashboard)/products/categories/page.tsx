"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Tab } from "@headlessui/react"

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

const listCategoriesData = [
  {
    categoryImage: "/categories/categories-1.png"
  },
  {
    categoryImage: "/categories/categories-2.png"
  },
  {
    categoryImage: "/categories/categories-3.png"
  },
  {
    categoryImage: "/categories/categories-4.png"
  },
  {
    categoryImage: "/categories/categories-5.png"
  }
]

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
    <div className='relative min-h-screen p-6 space-y-6'>
      <h1 className='font-semibold text-heading-sm'>Banner</h1>

      <section className='relative p-6 space-y-6 bg-white rounded-lg-10'>
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
                    <SquaresFourIcon className='w-6 h-6' />
                  </Tab>

                  <Tab
                    className={
                      "rounded-lg-10 border p-2 outline-0 transition-all duration-300 ease-out hover:bg-netral-20 ui-selected:border-primary-border ui-selected:bg-primary-surface ui-selected:text-primary-main ui-not-selected:border-netral-30 ui-not-selected:text-netral-100"
                    }
                  >
                    <ListIcon className='w-6 h-6' />
                  </Tab>
                </div>
              </Tab.List>
            </div>
          </nav>

          <Tab.Panels>
            {/* Card Version */}
            <Tab.Panel>
              <div className='grid grid-cols-4 gap-5'>
                {listCategoriesData.map((item) => (
                  <figure
                    key={item.categoryImage}
                    className='relative w-full space-y-3'
                  >
                    <div className='absolute z-20 left-3 top-6'>
                      <Checkbox active={active} setActive={setActive} />
                    </div>

                    <div className='relative flex items-center justify-center w-full h-40 overflow-hidden rounded-lg-10 bg-netral-15'>
                      <Link
                        href={"/products/categories/detail"}
                        className='absolute z-10 flex items-center justify-center w-full h-full transition-all duration-500 ease-out opacity-0 bg-black/25 hover:opacity-100'
                      >
                        <button className='flex items-center gap-2 p-2 px-4 font-semibold text-white transition-all duration-300 ease-out border-2 border-white rounded-lg hover:bg-white/25'>
                          Detail
                          <ArrowRightIcon className='w-5 h-5 text-white stroke-2' />
                        </button>
                      </Link>

                      <div className='relative h-32 aspect-square 2xl:h-40'>
                        <Image
                          src={item.categoryImage}
                          alt='Categories 1'
                          sizes='responsive'
                          fill
                        />
                      </div>
                    </div>

                    <figcaption className='space-y-1.5'>
                      <h5 className='font-semibold text-body-xl'>Outer</h5>
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
                  <thead className='font-semibold uppercase bg-netral-15 text-body-sm'>
                    <tr>
                      <th className='w-px px-3 py-4 whitespace-nowrap first:pl-5 last:pr-5'>
                        <Checkbox active={active} setActive={setActive} />
                      </th>

                      <th className='px-3 py-4 text-left whitespace-nowrap text-netral-50 first:pl-5 last:pr-5'>
                        <span className='font-semibold text-body-sm'>
                          Category
                        </span>
                      </th>

                      <th className='px-3 py-4 pr-20 text-left whitespace-nowrap text-netral-50 first:pl-5 last:pr-5'>
                        <span className='font-semibold text-body-sm'>
                          Description
                        </span>
                      </th>

                      <th className='px-3 py-4 text-left whitespace-nowrap text-netral-50 first:pl-5 last:pr-5'>
                        <span className='font-semibold text-body-sm'>
                          Status
                        </span>
                      </th>

                      <th className='px-3 py-4 text-left whitespace-nowrap text-netral-50 first:pl-5 last:pr-5'>
                        <span className='font-semibold text-body-sm'>
                          Action
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className='pt-4 text-sm divide-y divide-netral-20'>
                    {listCategoriesData.map((item) => (
                      <tr key={item.categoryImage}>
                        <td className='w-px px-3 py-5 whitespace-nowrap first:pl-5 last:pr-5'>
                          <Checkbox active={active} setActive={setActive} />
                        </td>

                        <td className='px-3 py-5 text-left whitespace-nowrap first:pl-5 last:pr-5'>
                          <div className='flex items-center gap-3'>
                            <div className='relative w-20 h-20 overflow-hidden rounded-lg-10'>
                              <Image
                                src={item.categoryImage}
                                className='object-cover w-full h-full'
                                alt='Products'
                                fill
                              />
                            </div>

                            <span className='w-48 font-medium break-words whitespace-pre-wrap text-body-base text-netral-80'>
                              {"T-Men's UA Storm Armour Down 2.0 Jacket"}
                            </span>
                          </div>
                        </td>

                        <td className='px-3 py-5 pr-20 text-left whitespace-nowrap first:pl-5 last:pr-5'>
                          <div className='w-72'>
                            <span className='font-medium break-words whitespace-pre-wrap w-72 text-body-base text-netral-80'>
                              Discover easy and casual t-shirt for women and men
                              with variety of colors, pattern and comfy
                              materials.
                            </span>
                          </div>
                        </td>

                        <td className='px-3 py-5 text-left whitespace-nowrap first:pl-5 last:pr-5'>
                          <span className='font-medium text-body-base text-netral-80'>
                            <Badge variant='success'>Active</Badge>
                          </span>
                        </td>

                        <td className='px-3 py-5 text-left whitespace-nowrap first:pl-5 last:pr-5'>
                          <Link
                            href={"/products/list-products/detail"}
                            className='font-medium text-body-base text-primary-main'
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
        <main className='mt-4 mb-10'>
          <p className='text-body-base text-netral-80'>
            Are you sure want to delete this category? Category which already
            deleted can not be recovered.
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
        <main className='mt-4 mb-10'>
          <p className='text-body-base text-netral-80'>
            Are you sure want to draft this category?{" "}
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
        title='Category has been drafted'
        desc="Don't worry, you can access drafted categories. "
      />
    </div>
  )
}

export default DBCategories
