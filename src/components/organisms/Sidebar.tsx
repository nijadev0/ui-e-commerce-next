"use client"

import React from "react"
import Link from "next/link"

import {
  AppWindowIcon,
  HouseSimpleIcon,
  LockSimpleIcon,
  PackageIcon,
  ReceiptIcon,
  StoreFrontIcon,
  TagIcon,
  UserCircleIcon,
  UsersIcon
} from "@/assets/icons"

import { SidebarMenu } from "@/components/moleculs"

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
  const [showAuthMenu, setShowAuthMenu] = React.useState(false)

  return (
    <aside
      id='sidebar'
      className='Sidebar h-screen w-64 overflow-y-auto overflow-x-hidden border border-netral-20 bg-white px-6 py-4 shadow-sm 2xl:w-72'
    >
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
          name='Customer'
          variant='sub-menu'
        />

        {showUsersMenu && (
          <SidebarExpand>
            <SidebarMenu
              name='Users'
              variant='expand'
              href='/customers/users'
            />

            <SidebarMenu
              name='Buyers'
              variant='expand'
              href='/customers/buyers'
            />
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
              name='Manage Transaction'
              variant='expand'
              href='/transactions/manage-transaction'
            />
            <SidebarMenu
              name='Manage Refund'
              variant='expand'
              href='/transactions/manage-refund'
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

        <SidebarMenu
          active={showAuthMenu}
          onClick={() => setShowAuthMenu(!showAuthMenu)}
          icon={<LockSimpleIcon />}
          name='Authentication'
          variant='sub-menu'
        />

        {showAuthMenu && (
          <SidebarExpand>
            <SidebarMenu name='Login' variant='expand' href='/auth/login' />
            <SidebarMenu
              name='Register'
              variant='expand'
              href='/auth/register'
            />

            <SidebarMenu
              name='Forgot Password'
              variant='expand'
              href='/auth/forgot-password'
            />
            <SidebarMenu
              name='Verify Email'
              variant='expand'
              href='/auth/verify-email'
            />
            <SidebarMenu
              name='New Password'
              variant='expand'
              href='/auth/new-password'
            />
            <SidebarMenu
              name='Reset Success'
              variant='expand'
              href='/auth/success-reset'
            />
          </SidebarExpand>
        )}
      </nav>
    </aside>
  )
}

export default Sidebar
