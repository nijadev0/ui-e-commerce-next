'use client'

import React from 'react'

import { Button } from '@/components/atomics'
import { ChecksIcon } from '@/assets/icons'

interface PageAction {
  actionLabel: string
  actionDesc: string
  btnPrimaryFun: any
  btnPrimaryLabel: string
  btnPrimaryVariant:
    | 'primary-bg'
    | 'primary-outline'
    | 'primary-nude'
    | 'warning-bg'
    | 'warning-outline'
    | 'warning-nude'
    | 'error-bg'
    | 'error-outline'
    | 'error-nude'
    | 'default-bg'
    | 'default-outline'
    | 'default-nude'
    | 'disabled-bg'
    | 'disabled-outline'
    | 'disabled-nude'

  btnSecondaryFun: any
  btnSecondaryLabel: string
  btnsecondaryVariant:
    | 'primary-bg'
    | 'primary-outline'
    | 'primary-nude'
    | 'warning-bg'
    | 'warning-outline'
    | 'warning-nude'
    | 'error-bg'
    | 'error-outline'
    | 'error-nude'
    | 'default-bg'
    | 'default-outline'
    | 'default-nude'
    | 'disabled-bg'
    | 'disabled-outline'
    | 'disabled-nude'

  sandbox: boolean
}

const PageAction: React.FC<PageAction> = ({
  actionLabel,
  actionDesc,
  btnPrimaryFun,
  btnPrimaryLabel,
  btnPrimaryVariant,
  btnSecondaryFun,
  btnSecondaryLabel,
  btnsecondaryVariant,
  sandbox
}) => {
  return (
    <section
      className={`${
        sandbox ? 'relative ' : 'sticky bottom-6 left-0 z-50'
      } flex w-full items-center justify-between rounded-lg-10 border border-netral-30/75 bg-white px-6 py-4 shadow-2`}
    >
      <div className='flex items-center gap-2'>
        <ChecksIcon className='h-5 w-5 fill-netral-60' />

        <h5 className='text-body-sm font-semibold text-netral-60'>
          {actionLabel ?? 'Last saved'}
        </h5>

        <p className='text-body-sm font-semibold text-netral-80'>
          {actionDesc ?? 'Nov 9, 2022-17.09'}
        </p>
      </div>

      <div className='flex items-center gap-3'>
        <Button
          size='md'
          variant={btnsecondaryVariant}
          onClick={btnSecondaryFun}
        >
          {btnSecondaryLabel}
        </Button>
        <Button size='md' variant={btnPrimaryVariant} onClick={btnPrimaryFun}>
          {btnPrimaryLabel}
        </Button>
      </div>
    </section>
  )
}

export default PageAction
