'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import { Header } from '@/components/templates'
import { PageAction } from '@/components/moleculs'

const PageActionPage = () => {
  const router = useRouter()

  const previousPage = () => {
    router.back()
  }

  const pageActions = [
    {
      id: 0,
      actionLabel: 'Last Saved',
      actionDesc: 'Nov 9, 2022',
      primaryFun: previousPage,
      primaryLabel: 'Save',
      primaryVariant: 'primary-bg',
      secondaryFun: previousPage,
      secondaryLabel: 'Back',
      secondaryVariant: 'primary-nude'
    },
    {
      id: 1,
      actionLabel: 'Last Saved',
      actionDesc: 'Nov 9, 2022',
      primaryFun: previousPage,
      primaryLabel: 'Save',
      primaryVariant: 'primary-bg',
      secondaryFun: previousPage,
      secondaryLabel: 'Draft',
      secondaryVariant: 'warning-nude'
    },
    {
      id: 2,
      actionLabel: 'Last Saved',
      actionDesc: 'Nov 9, 2022',
      primaryFun: previousPage,
      primaryLabel: 'Approve',
      primaryVariant: 'primary-bg',
      secondaryFun: previousPage,
      secondaryLabel: 'Reject',
      secondaryVariant: 'error-outline'
    }
  ]
  return (
    <Header title='Page Action'>
      <div className='space-y-8'>
        {pageActions.map((item) => (
          <PageAction
            sandbox
            key={item.id}
            actionLabel={item.actionLabel}
            actionDesc={item.actionDesc}
            btnPrimaryLabel={item.primaryLabel}
            btnPrimaryFun={item.primaryFun}
            btnPrimaryVariant={item.primaryVariant}
            btnSecondaryLabel={item.secondaryLabel}
            btnSecondaryFun={item.secondaryFun}
            btnsecondaryVariant={item.secondaryVariant}
          />
        ))}
      </div>
    </Header>
  )
}

export default PageActionPage
