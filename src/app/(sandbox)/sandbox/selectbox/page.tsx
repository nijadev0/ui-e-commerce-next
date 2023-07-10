import React from 'react'

import { Header } from '@/components/templates'
import { Selectbox } from '@/components/atomics'

const SandboxSelectbox = () => {
  const listMenu = [
    { name: 'Pilih Menu', disabled: true },
    { name: 'Nasi Goreng' },
    { name: 'Ayam Bakar' },
    { name: 'Tahu Tempe' },
    { name: 'Kerang Asin' },
    { name: 'Kopi Hitam' }
  ]

  return (
    <Header title='Selectbox'>
      <div className='relative w-96'>
        <Selectbox datas={listMenu} />
      </div>
    </Header>
  )
}

export default SandboxSelectbox
