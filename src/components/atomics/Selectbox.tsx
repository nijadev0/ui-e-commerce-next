'use client'

import React, { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, CaretDownIcon } from '@/assets/icons'

// ------------------------------------------------
/**
 * Data Example
 * First as the label
const datas = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' }
]
 */
interface Selectbox {
  datas: any
  label?: string
}

const Selectbox: React.FC<Selectbox> = ({ datas, label }) => {
  const [selected, setSelected] = useState(datas[0])

  console.log(selected.disabled)

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className='relative mt-1 w-full space-y-1.5'>
        <h5 className='textnetral-100 text-body-base font-semibold'>{label}</h5>
        <Listbox.Button className='relative w-full cursor-pointer rounded-lg border border-netral-30 bg-white px-4 py-3 ring-2 ring-transparent placeholder:text-netral-50 focus:border-primary-main focus:outline-none focus:ring-primary-surface/50'>
          <span
            className={`block truncate text-left text-body-base ${
              selected.disabled ? 'text-netral-50' : 'text-netral-80'
            }`}
          >
            {selected.name}
          </span>

          <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4'>
            <CaretDownIcon
              className='h-5 w-5 text-netral-50'
              aria-hidden='true'
            />
          </span>
        </Listbox.Button>

        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='absolute z-[999] mt-1 max-h-60 w-full overflow-auto rounded-md border border-netral-30 bg-white py-1 text-body-base shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none'>
            {datas.map((data: any, dataIdx: any) => (
              <Listbox.Option
                key={dataIdx}
                disabled={data.disabled}
                className={({ active }) =>
                  `relative select-none px-4 py-2 ${
                    active && !data.disabled
                      ? 'bg-primary-surface/50'
                      : `text-netral-60`
                  } ${data.disabled ? 'cursor-default' : 'cursor-pointer'}`
                }
                value={data}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected && !data.disabled
                          ? 'font-medium'
                          : 'font-normal'
                      } `}
                    >
                      {data.name}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
export default Selectbox
