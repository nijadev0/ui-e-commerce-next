'use client'

import React from 'react'
import Link from 'next/link'

import {
  AppWindowIcon,
  HouseSimpleIcon,
  PackageIcon,
  ReceiptIcon,
  StoreFrontIcon,
  TagIcon,
  UserCircleIcon,
  UsersIcon
} from '@/assets/icons'

import { SidebarMenu } from '@/components/moleculs'

const SidebarExpand: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => {
  return (
    <section className='relative flex w-full items-start gap-4'>
      <div className='absolute left-6 h-full w-px bg-netral-30' />
      <div className='flex w-full flex-col items-start justify-end gap-2 pl-9'>
        {children}
      </div>
    </section>
  )
}

const Sidebar: React.FC = () => {
  const [showUsersMenu, setShowUsersMenu] = React.useState(false)
  const [showProductsMenu, setShowProductsMenu] = React.useState(false)
  const [showTransactionsMenu, setShowTransactionsMenu] = React.useState(false)

  return (
    <aside className='SIDEBAR h-screen w-full max-w-[280px] overflow-hidden border border-netral-20 bg-white px-6 py-4 shadow-sm'>
      <Link href='/' className='mb-10'>
        <h5 className='text-heading-sm font-semibold italic'>Brand Here</h5>
      </Link>

      <nav className='mt-10 flex flex-col items-start gap-3'>
        <SidebarMenu
          icon={<HouseSimpleIcon />}
          name='Dashboard'
          variant='default'
          href='/'
        />

        <SidebarMenu
          active={showUsersMenu}
          onClick={() => setShowUsersMenu(!showUsersMenu)}
          icon={<UsersIcon />}
          name='Users'
          variant='sub-menu'
        />

        {showUsersMenu && (
          <SidebarExpand>
            <SidebarMenu
              name='Customers'
              variant='expand'
              href='/users/customers'
            />
            <SidebarMenu name='Buyers' variant='expand' href='/users/buyers' />
          </SidebarExpand>
        )}

        <SidebarMenu
          active={showProductsMenu}
          onClick={() => setShowProductsMenu(!showProductsMenu)}
          icon={<PackageIcon />}
          name='Products'
          variant='sub-menu'
        />

        {showProductsMenu && (
          <SidebarExpand>
            <SidebarMenu
              name='List Products'
              variant='expand'
              href='/products/list-products'
            />
            <SidebarMenu
              name='Categories'
              variant='expand'
              href='/products/categories'
            />
          </SidebarExpand>
        )}

        <SidebarMenu
          active={showTransactionsMenu}
          onClick={() => setShowTransactionsMenu(!showTransactionsMenu)}
          icon={<ReceiptIcon />}
          name='Transactions'
          variant='sub-menu'
        />

        {showTransactionsMenu && (
          <SidebarExpand>
            <SidebarMenu
              name='Manage Transactions'
              variant='expand'
              href='/transactions/manage-transactions'
            />
            <SidebarMenu
              name='Manage Refunds'
              variant='expand'
              href='/transactions/manage-refunds'
            />
          </SidebarExpand>
        )}

        <SidebarMenu
          icon={<TagIcon />}
          name='Flash Sale'
          variant='default'
          href='/flash-sale'
        />

        <SidebarMenu
          icon={<AppWindowIcon />}
          name='Banner'
          variant='default'
          href='/banner'
        />

        <SidebarMenu
          icon={<StoreFrontIcon />}
          name='Outlet'
          variant='default'
          href='/outlet'
        />

        <SidebarMenu
          icon={<UserCircleIcon />}
          name='User Role'
          variant='default'
          href='/user-role'
        />
      </nav>
    </aside>
  )
}

export default Sidebar
