'use client'

import React from 'react'
import ReactApexCharts from 'react-apexcharts'
import { Button, Selectbox, Title } from '@/components/atomics'

import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  DownloadSimpleIcon
} from '@/assets/icons'

const Home = () => {
  // ---------------------------------------------------------------
  const splineAreaData = {
    series: [
      {
        name: 'Quarter 1',
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: 'Quarter 2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }
    ],
    chartOptions: {
      colors: ['#5E59FF', 'rgba(94, 89, 255, 0.25)'],

      chart: {
        toolbar: { show: false },
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z'
        ]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        }
      }
    }
  }
  // ---------------------------------------------------------------
  const radialBarData = {
    dummy: [
      {
        color: 'bg-[#5E59FF]',
        label: 'Product Sold',
        number: 86
      },
      {
        color: 'bg-[#FFAB00]',
        label: 'Product Return',
        number: 48
      }
    ],
    series: [86, 48],
    chartOptions: {
      chart: {
        toolbar: { show: false },
        height: 350,
        type: 'radialBar'
      },
      colors: ['#5E59FF', '#FFAB00'],
      plotOptions: {
        radialBar: {
          stroke: {
            colors: ['#5E59FF', '#FFAB00']
          },
          dataLabels: {
            name: {
              fontSize: '22px'
            },
            value: {
              fontSize: '16px'
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function () {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 100
              }
            }
          },
          track: {
            // background: ['#5E59FF', '#FFAB00'],
          }
        }
      },
      labels: ['Product Sold', 'Product Return'],
      stroke: {
        lineCap: 'round',
        colors: ['#5E59FF', '#FFAB00']
      }
    }
  }
  // ---------------------------------------------------------------
  const barData = {
    series: [
      {
        name: 'Total Outlet',
        data: [44, 55, 41, 64, 22, 43, 21]
      },
      {
        name: 'Percentage of Sales',
        data: [53, 32, 33, 52, 13, 44, 32]
      }
    ],
    chartOptions: {
      colors: ['#5E59FF', '#E5E7EB'],

      stroke: {
        colors: ['transparent'],
        width: 5
      },
      chart: {
        type: 'bar',
        height: 400,
        toolbar: { show: false }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top'
          },
          barHeight: 24,
          borderRadius: 3,
          fill: ['#5E59FF', '#E5E7EB'],
          colors: {
            ranges: [
              {
                from: 0,
                to: 0,
                color: ['#5E59FF', '#E5E7EB']
              }
            ]
          }
        }
      },
      labels: ['Clothing', 'Food Products'],
      dataLabels: {
        enabled: false,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff']
        }
      },
      tooltip: {
        shared: true,
        intersect: false
      },
      xaxis: {
        categories: ['New York', 'Los Angeles', 'Chicago', 'Phoenix']
      }
    }
  }
  // ---------------------------------------------------------------

  return (
    <div className='relative space-y-5 p-6'>
      {/* Summary */}
      <section className='grid grid-cols-3 gap-5'>
        <figure className='relative w-full overflow-hidden rounded-lg-10 bg-white'>
          <img
            className='absolute right-0 top-0 -z-0 h-full w-fit'
            src='/pattern-home-1.png'
            alt='Pattern Home 1'
          />

          <figcaption className='relative z-10 px-8 py-6'>
            <span className='text-body-base font-medium uppercase text-netral-60'>
              Total Sales
            </span>
            <h3 className='mb-1 mt-3.5 text-heading-md font-bold'>643,823</h3>
            <p className='inline-flex items-center text-body-sm'>
              <ArrowUpRightIcon className='h-4 w-4 text-success-main' />
              <span className='ml-0.5 mr-1 text-success-main'>0.4%</span>
              <span className='text-netral-60'>vs last month</span>
            </p>
          </figcaption>
        </figure>

        <figure className='relative w-full overflow-hidden rounded-lg-10 bg-white'>
          <img
            className='absolute -right-10 top-0 -z-0 h-full w-fit'
            src='/pattern-home-2.png'
            alt='Pattern Home 2'
          />

          <figcaption className='relative z-10 px-8 py-6'>
            <span className='text-body-base font-medium uppercase text-netral-60'>
              Total Users
            </span>

            <h3 className='mb-1 mt-3.5 text-heading-md font-bold'>142,937</h3>

            <p className='inline-flex items-center text-body-sm'>
              <ArrowDownRightIcon className='h-4 w-4 text-red-500' />
              <span className='ml-0.5 mr-1 text-red-500'>12%</span>
              <span className='text-netral-60'>vs last month</span>
            </p>
          </figcaption>
        </figure>

        <figure className='relative w-full overflow-hidden rounded-lg-10 bg-white'>
          <img
            className='absolute right-0 top-0 -z-0 h-full w-fit'
            src='/pattern-home-3.png'
            alt='Pattern Home 3'
          />

          <figcaption className='relative z-10 px-8 py-6'>
            <span className='text-body-base font-medium uppercase text-netral-60'>
              Total Buyers
            </span>
            <h3 className='mb-1 mt-3.5 text-heading-md font-bold'>120,981</h3>
            <p className='inline-flex items-center text-body-sm'>
              <ArrowUpRightIcon className='h-4 w-4 text-success-main' />
              <span className='ml-0.5 mr-1 text-success-main'>0.4%</span>
              <span className='text-netral-60'>vs last month</span>
            </p>
          </figcaption>
        </figure>
      </section>

      <div className='grid grid-cols-12 gap-5'>
        <div className='col-span-7 space-y-5'>
          {/* Sales */}
          <section className='min-h-[576px] space-y-6 rounded-lg-10 bg-white px-8 py-6'>
            <nav className='flex items-center justify-between'>
              <Title size='lg' variant='default'>
                Sales
              </Title>

              <Button size='md' variant='primary-outline'>
                <DownloadSimpleIcon className='h-5 w-5' />
                Download
              </Button>
            </nav>

            <div className='!font-jakarta'>
              <ReactApexCharts
                width='100%'
                type='area'
                options={splineAreaData.chartOptions}
                series={splineAreaData.series}
              />
            </div>
          </section>

          {/* Outlet */}
          <section className='min-h-[600px] space-y-6 rounded-lg-10 bg-white px-8 py-6'>
            <nav className='flex items-center justify-between'>
              <Title size='lg' variant='default'>
                Outlet
              </Title>

              <div className='flex flex-row gap-2'>
                <div className='w-40'>
                  <Selectbox
                    className='!border-transparent'
                    datas={[{ name: 'This Week' }, { name: 'This Month' }]}
                  />
                </div>
                <Button size='md' variant='primary-outline'>
                  <DownloadSimpleIcon className='h-5 w-5' />
                  Download
                </Button>
              </div>
            </nav>

            <div className='!font-jakarta'>
              <ReactApexCharts
                type='bar'
                options={barData.chartOptions}
                series={barData.series}
              />
            </div>
          </section>
        </div>

        <div className='col-span-5 space-y-5'>
          {/* Outlet */}
          <section className='min-h-[350px] space-y-6 rounded-lg-10 bg-white px-8 py-6'>
            <nav className='flex items-center justify-between'>
              <Title size='lg' variant='default'>
                Product
              </Title>

              <div className='w-40'>
                <Selectbox
                  className='!border-transparent'
                  datas={[{ name: 'This Month' }, { name: 'This Year' }]}
                />
              </div>
            </nav>

            <div className='flex flex-row items-center gap-8'>
              <div className='!font-jakarta'>
                <ReactApexCharts
                  type='radialBar'
                  height={350}
                  options={radialBarData.chartOptions}
                  series={radialBarData.series}
                />
              </div>

              <div className='flex flex-col items-start gap-4'>
                {radialBarData.dummy.map((item) => (
                  <div className='flex flex-col-reverse items-center gap-1 2xl:flex-col 2xl:items-start'>
                    <div className='flex items-center gap-2'>
                      <div
                        className={`h-2 w-2 ${item.color} flex-shrink-0 rounded-full`}
                      />

                      <h5 className='text-body-base font-medium text-netral-60'>
                        {item.label}
                      </h5>
                    </div>

                    <div className='text-body-xl font-bold'>{item.number}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Top Product */}
          <section className='relative space-y-6 rounded-lg-10 bg-white px-8 py-6'>
            <nav className='flex items-center justify-between'>
              <Title size='lg' variant='default'>
                Top Product
              </Title>

              <div className='w-40'>
                <Selectbox
                  className='!border-transparent'
                  datas={[{ name: 'Year' }, { name: 'Decade' }]}
                />
              </div>
            </nav>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home
