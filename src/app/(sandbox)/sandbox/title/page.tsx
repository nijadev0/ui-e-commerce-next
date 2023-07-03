import React from 'react'

import { Title } from '@/components/atomics'
import { Header } from '@/components/templates'

const page = () => {
  const titles = ['default', 'success', 'info', 'warning', 'error']

  return (
    <Header title='Title'>
      <section className='flex flex-row items-start gap-24'>
        <div className='space-y-8'>
          <h1 className='text-body-xl font-bold'>Small</h1>
          {titles.map((title, index) => (
            <Title key={index} size='sm' variant={`${title}`}>
              Dashboard
            </Title>
          ))}
        </div>

        <div className='space-y-8'>
          <h1 className='text-body-xl font-bold'>Large</h1>
          {titles.map((title, index) => (
            <Title key={index} size='lg' variant={`${title}`}>
              Dashboard
            </Title>
          ))}
        </div>
      </section>
    </Header>
  )
}

export default page
