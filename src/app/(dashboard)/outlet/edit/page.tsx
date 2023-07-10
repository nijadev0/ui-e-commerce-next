'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

import { Modal, PageAction } from '@/components/moleculs'
import { Alerts, Button, Input, Title } from '@/components/atomics'
import UploadSimpleIcon from '@/assets/icons/UploadSimpleIcon'
import Image from 'next/image'
import { PencilSimpleIcon } from '@/assets/icons'

const DBOutletEdit = () => {
  const router = useRouter()

  const listMenu = [
    { name: 'Select Role', disabled: true },
    { name: 'Super Admin' },
    { name: 'Admin' },
    { name: 'User' },
    { name: 'Customer' }
  ]

  const [openSuccess, setOpenSuccess] = React.useState(false)
  const [openModalDropzone, setOpenModalDropzone] = React.useState(false)
  const [activeState, setActiveState] = React.useState(1)
  const [dropzone, setDropzone] = React.useState(true)

  const nextState = () => {
    if (activeState > 1) {
      setOpenModalDropzone(false)
      setActiveState(1)
      setDropzone(false)
    } else {
      setActiveState(activeState + 1)
    }
  }

  return (
    <div className='relative h-[calc(100vh_-_80px)] space-y-6 overflow-y-auto p-6'>
      <div className='space-y-6'>
        <h1 className='text-heading-sm font-semibold'>User Role</h1>

        <section className='relative h-full space-y-8 rounded-lg-10 bg-white p-6'>
          <Title size='lg' variant='default'>
            Add User
          </Title>

          <form className='grid grid-cols-2 gap-x-5 gap-y-8'>
            <Input
              id='name'
              placeholder='Enter name'
              label='Name'
              variant='default'
            />

            <Input
              id='email'
              placeholder='Enter email address'
              label='Email Adress'
              variant='default'
            />

            <Input
              id='phone'
              placeholder='0000-0000-0000'
              label='Phone Number'
              variant='phone'
            />

            <Input
              id='complete-address'
              placeholder='Enter complete adress'
              label='Complete Address'
              variant='default'
            />

            <div
              className={`Dropzone relative flex w-full flex-col items-center justify-center rounded-lg-10 border-2 border-netral-30 bg-netral-15 ${
                dropzone ? 'border-dashed py-14' : 'border-solid py-0'
              }`}
            >
              {dropzone ? (
                <div className='flex flex-col items-center'>
                  <UploadSimpleIcon className='h-8 w-8 stroke-2 text-netral-50' />

                  <Button
                    size='sm'
                    variant='primary-bg'
                    className='mb-2 mt-5'
                    onClick={() => setOpenModalDropzone(true)}
                  >
                    Add Image
                  </Button>

                  <p className='text-center text-body-sm text-netral-50'>
                    or drop image to upload
                  </p>
                </div>
              ) : (
                <>
                  <div className='relative z-0 aspect-video h-auto w-96'>
                    <Image
                      className='h-full w-full object-cover'
                      alt='Image'
                      src={'/outlet-1.jpg'}
                      fill
                    />
                  </div>

                  <div className='absolute right-3 top-3 z-10 h-fit w-fit'>
                    <Button size='sm' variant='primary-bg'>
                      Edit
                      <PencilSimpleIcon className='h-4 w-4 stroke-[4px] text-white ' />
                    </Button>
                  </div>
                </>
              )}
            </div>
          </form>
        </section>
      </div>

      <PageAction
        variant='absolute'
        actionLabel='Last saved'
        actionDesc='Nov 9, 2022-17.09'
        btnPrimaryLabel='Save'
        btnPrimaryVariant='primary-bg'
        btnPrimaryFun={() => setOpenSuccess(true)}
        btnSecondaryLabel='Discard'
        btnsecondaryVariant='primary-nude'
        btnSecondaryFun={() => router.back()}
      />

      <Alerts
        variant='success'
        open={openSuccess}
        setOpen={setOpenSuccess}
        title='Users has been updated'
        desc='User updated successfully.'
      />

      <Modal
        variant='default'
        title='Add Image'
        open={openModalDropzone}
        setOpen={setOpenModalDropzone}
        className='max-w-4xl'
      >
        {activeState === 1 && (
          <main className='my-10 flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-netral-30 bg-netral-15 py-20'>
            <svg
              className='h-36 w-36'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 135 135'
              fill='none'
            >
              <path
                d='M33.1318 71.0286L31.0055 76.3422L30.697 77.1124L31.1851 76.7404C30.9826 76.7195 30.7801 76.6939 30.583 76.6682C30.5506 76.6642 30.3973 76.6439 30.5155 76.6601L30.3609 76.6392L29.964 76.5825C29.6548 76.5375 29.3461 76.4889 29.0379 76.4367C27.3178 76.1549 25.6144 75.7788 23.9356 75.3101C22.0273 74.7701 20.1556 74.0951 18.4181 73.1326C16.8386 72.2551 15.116 71.4113 13.3063 71.1609C12.6779 71.0738 11.8605 71.0002 11.2813 71.3411L12.0238 71.9128C12.3384 71.1028 12.661 70.3009 12.9817 69.4963C13.7588 67.5469 14.5432 65.6005 15.3347 63.6569C16.3378 61.1945 17.3552 58.7382 18.3871 56.2879C19.3996 53.8944 20.4269 51.5069 21.5049 49.1424C22.2778 47.4468 23.052 45.7336 23.9882 44.1204C24.0634 43.9908 24.1405 43.8625 24.2197 43.7356C24.5653 43.1808 23.6899 42.6718 23.3422 43.2247C22.4236 44.7002 21.7 46.3074 20.9723 47.8822C19.8984 50.2035 18.8798 52.5518 17.8801 54.9022C16.8141 57.4082 15.7672 59.9224 14.7394 62.4446C13.8983 64.5011 13.0658 66.5612 12.2419 68.6249C11.9755 69.2918 11.71 69.9589 11.4454 70.6263C11.3191 70.9442 11.1679 71.2635 11.0647 71.5902C11.0593 71.6077 11.0512 71.6246 11.0444 71.6415C10.8784 72.0674 11.4339 72.4225 11.7869 72.2132C11.8969 72.1457 11.7059 72.2301 11.766 72.2186C11.849 72.2024 11.9307 72.1653 12.0144 72.1477C12.0745 72.1349 12.2513 72.1147 12.0934 72.1309C12.1777 72.1221 12.2621 72.1147 12.3465 72.1106C12.5533 72.1031 12.7603 72.1099 12.9661 72.1309C13.0688 72.1383 13.1709 72.1518 13.2719 72.1714C13.4319 72.1984 13.5905 72.2308 13.7485 72.2672C14.1086 72.3521 14.4641 72.4555 14.8136 72.577C15.8261 72.9247 16.79 73.3951 17.7262 73.9081C21.0337 75.7232 24.7206 76.7107 28.423 77.3506C29.3349 77.5086 30.2536 77.6537 31.1749 77.7482C31.4119 77.7725 31.5853 77.57 31.663 77.3763L33.7885 72.0613L34.097 71.2912C34.1996 71.0353 33.985 70.7377 33.7433 70.6681C33.4558 70.5858 33.2215 70.7687 33.1203 71.0218L33.1318 71.0286Z'
                fill='#1B1B1B'
              />
              <path
                d='M81.5351 26.4814C81.6162 26.4788 81.6973 26.4806 81.7781 26.4868C81.8996 26.4935 81.6722 26.4631 81.7957 26.4868C81.8483 26.4982 81.9017 26.5077 81.9543 26.5205C82.0448 26.5428 82.1332 26.5705 82.2243 26.6008C82.277 26.6191 82.3296 26.6393 82.3816 26.6596C82.4039 26.6683 82.4707 26.696 82.3681 26.6528C82.3985 26.6656 82.4295 26.6791 82.4592 26.6933C82.9527 26.9295 83.4267 27.2044 83.8767 27.5155C85.1322 28.3606 86.3067 29.3258 87.4913 30.2647C90.6787 32.7906 93.9342 35.2793 97.5893 37.0984C99.7952 38.1967 102.133 39.0512 104.569 39.4562L104.197 38.9682C104.208 39.0959 104.21 39.2243 104.202 39.3523C104.196 39.5095 104.181 39.6661 104.164 39.8248C104.152 39.928 104.164 39.8457 104.16 39.8545C104.152 39.9071 104.144 39.9598 104.135 40.0118C104.115 40.136 104.092 40.2595 104.068 40.3823C103.757 41.8484 103.116 43.2281 102.359 44.5133C101.037 46.7584 99.2728 48.6983 97.6872 50.7544C96.353 52.4851 95.0617 54.2482 93.8134 56.0437C93.2363 56.8746 92.6625 57.7096 92.1164 58.5614L92.809 58.3799C91.3019 57.4038 89.7944 56.428 88.2865 55.4524C87.4814 54.9329 86.7312 54.3329 86.0475 53.6616C85.5831 53.2039 84.8663 53.9194 85.3313 54.3778C86.2851 55.3174 87.3658 56.0653 88.4829 56.7902L91.4887 58.7369L92.2926 59.2574C92.5289 59.4106 92.8427 59.2979 92.9852 59.0758C94.5775 56.5898 96.3244 54.1928 98.1152 51.8465C100.692 48.4641 103.913 45.2241 104.966 40.9716C105.122 40.3445 105.282 39.627 105.207 38.9743C105.183 38.7718 105.068 38.5247 104.835 38.4862C100.535 37.7714 96.6308 35.6782 93.0803 33.226C91.4691 32.1136 89.9213 30.9148 88.3871 29.6998C87.1451 28.7163 85.9166 27.7065 84.6138 26.804C83.7505 26.2053 82.6435 25.4155 81.5351 25.4716C80.8865 25.5046 80.8831 26.5171 81.5351 26.4841V26.4814Z'
                fill='#1B1B1B'
              />
              <path
                d='M46.1287 36.8178C47.231 36.7199 48.3286 36.4695 49.3978 36.1968C52.2145 35.4786 54.9476 34.4175 57.5585 33.1451C59.6639 32.1137 61.6978 30.9422 63.6463 29.6385C64.1863 29.2801 63.699 28.3911 63.1549 28.7529C58.3199 31.9727 52.8342 34.6517 47.0697 35.6676C46.8125 35.7128 46.5547 35.754 46.2961 35.7878L46.178 35.8026C46.043 35.8208 46.2934 35.7911 46.2165 35.7986L46.149 35.8053C45.879 35.8296 45.638 36.0078 45.6319 36.3001C45.6265 36.5505 45.8527 36.8401 46.1267 36.8171L46.1287 36.8178Z'
                fill='#1B1B1B'
              />
              <path
                d='M108.547 91.2207C108.378 91.3422 92.1933 102.952 77.9576 104.211C63.6476 105.477 53.1318 106.668 46.375 112.281C46.4594 112.2 50.9799 106.19 54.6775 102.966C58.7835 99.3889 65.6125 94.6639 81.8125 95.8789C97.9025 97.0844 108.399 91.3031 108.547 91.2207Z'
                fill='#1B1B1B'
              />
              <path
                d='M26.1448 42.5037C28.2009 41.7153 30.2691 40.9573 32.3359 40.1986C33.4897 39.7751 34.644 39.353 35.7987 38.9323C36.8112 38.5624 37.8352 38.1094 38.8787 37.8259C40.0647 37.504 41.2655 37.909 42.0964 38.7878C42.695 39.4263 43.3342 40.0254 44.0101 40.5813C45.7651 42.0109 47.7901 43.1551 50.0061 43.6714C52.3632 44.2202 54.9707 44.0832 57.178 43.0457C58.8985 42.2357 60.2593 40.8236 61.1908 39.1827C62.0636 37.6444 62.5989 35.9245 62.9161 34.1877C63.0559 33.4243 63.1558 32.6527 63.2212 31.8799C63.2793 31.1914 63.1639 30.3274 63.6303 29.7637C63.9678 29.3587 64.4207 29.2663 64.9128 29.1805L66.2722 28.9443C67.372 28.7544 68.4723 28.5665 69.573 28.3807C71.9915 27.9757 74.4121 27.5707 76.8387 27.2122C77.3467 27.1366 77.8555 27.0633 78.3649 26.9922C78.6349 26.9544 78.7854 26.6081 78.7186 26.3692C78.6369 26.0776 78.3689 25.9777 78.0955 26.0155C73.5859 26.6405 69.0958 27.4269 64.6111 28.2085C64.0771 28.3017 63.5986 28.4482 63.172 28.8005C62.7116 29.1853 62.4075 29.7248 62.3167 30.3179C62.2155 30.9929 62.2364 31.6875 62.1649 32.3645C61.9961 33.9697 61.6411 35.6322 61.0369 37.1665C60.4024 38.7777 59.4169 40.3214 58.0109 41.3663C56.1837 42.7258 53.8111 43.1375 51.5788 42.9114C49.3061 42.6812 47.1772 41.6775 45.3513 40.339C44.6056 39.7865 43.9038 39.1771 43.252 38.5165C42.8896 38.1526 42.5561 37.7686 42.1363 37.4662C41.6404 37.1104 41.0708 36.8709 40.4697 36.7655C39.8356 36.6522 39.184 36.6831 38.5635 36.856C38.0647 36.9984 37.5787 37.2036 37.0913 37.3811C35.9956 37.7794 34.9 38.1787 33.8047 38.5792C31.5739 39.3946 29.343 40.2127 27.1222 41.0491C26.7082 41.2048 26.2947 41.3623 25.8816 41.5216C25.2795 41.7524 25.5441 42.7318 26.1516 42.4976L26.1448 42.5037Z'
                fill='#1B1B1B'
              />
              <path
                d='M85.9608 57.3791C87.7551 61.6753 89.7795 65.8717 92.025 69.9503C94.7649 74.9284 97.8408 79.7378 101.377 84.1874C103.463 86.8138 105.719 89.3086 108.191 91.5793L108.293 90.7841C106.161 91.8763 104.005 92.6741 101.65 93.366C95.8901 95.0623 89.8475 95.7332 83.8528 95.4909C81.9817 95.4153 80.1167 95.2398 78.2456 95.1669C76.6296 95.1041 75.0117 95.0859 73.395 95.1379C70.8651 95.2189 68.3217 95.4646 65.8539 96.0464C63.9101 96.4949 62.0337 97.197 60.273 98.1349C58.6976 98.9847 57.2484 100.045 55.8855 101.204C52.2824 104.275 49.226 107.962 46.2553 111.632C46.1763 111.729 46.1014 111.834 46.015 111.926L46.879 112.284C46.474 108.749 45.7396 105.235 44.9647 101.768C43.2171 93.9465 40.8648 86.2643 38.3396 78.6645C37.4904 76.1056 36.6116 73.5561 35.6774 71.0276C35.4533 70.4201 34.4745 70.6833 34.7013 71.2976C36.81 77.0054 38.6703 82.807 40.4287 88.6316C42.4389 95.2891 44.1777 102.041 45.3562 108.9C45.504 109.76 45.6424 110.622 45.7612 111.486C45.7792 111.615 45.797 111.743 45.8145 111.871C45.7889 111.684 45.8301 111.989 45.8382 112.056C45.8463 112.124 45.8577 112.208 45.8658 112.284C45.9124 112.689 46.4004 112.989 46.7298 112.642C47.0592 112.295 47.3522 111.876 47.66 111.5C48.4146 110.577 49.1796 109.664 49.955 108.759C51.7404 106.68 53.5804 104.641 55.6101 102.794C56.9001 101.622 58.2426 100.535 59.7276 99.6212C61.3306 98.6368 63.0595 97.8739 64.8671 97.3532C70.2745 95.7818 76.1214 95.9681 81.6746 96.3758C87.9784 96.8382 94.3531 96.3515 100.474 94.7444C102.363 94.2543 104.219 93.6456 106.031 92.9219C106.924 92.5621 107.835 92.1922 108.68 91.7258C108.72 91.7035 108.761 91.6812 108.801 91.6583C109.085 91.5131 109.136 91.0757 108.904 90.8631C104.584 86.8928 100.915 82.2521 97.6802 77.3699C94.8162 73.0499 92.2761 68.5118 89.9987 63.855C88.914 61.6363 87.8866 59.3885 86.9349 57.1097C86.8289 56.8553 86.5974 56.6804 86.3118 56.756C86.0729 56.8188 85.8528 57.1266 85.9581 57.3791H85.9608Z'
                fill='#1B1B1B'
              />
              <path
                d='M20.1113 85.6503C20.2051 85.6746 20.2969 85.707 20.388 85.7394C20.5014 85.7792 20.6128 85.8231 20.7255 85.8676L20.8288 85.9102C20.7465 85.8764 20.7458 85.8737 20.8369 85.9142C20.928 85.9547 21.0016 85.9871 21.084 86.0249C22.1221 86.5048 23.1015 87.1117 24.0337 87.7718C24.7539 88.2821 25.323 88.7317 26.0115 89.3243C26.8269 90.0236 27.6085 90.7621 28.3598 91.5295C30.3375 93.5505 32.1101 95.7659 33.7294 98.0811C35.9724 101.288 37.9347 104.687 39.7011 108.178C39.9603 108.69 40.2155 109.205 40.4666 109.721C40.7514 110.307 41.6249 109.794 41.3441 109.21C39.5526 105.53 37.5641 101.939 35.2752 98.5448C33.5917 96.0473 31.7469 93.643 29.6828 91.4452C28.2631 89.9162 26.7111 88.5158 25.0449 87.2602C24.0425 86.5143 22.9868 85.8278 21.8629 85.2784C21.4026 85.0529 20.9058 84.7971 20.4022 84.6796L20.3847 84.6749C19.7535 84.5102 19.4849 85.4849 20.1147 85.651L20.1113 85.6503Z'
                fill='#1B1B1B'
              />
              <path
                d='M20.3802 105.903C20.7852 105.809 21.1902 105.741 21.6006 105.676C22.0961 105.599 22.3431 105.566 22.8636 105.51C23.4445 105.448 24.027 105.403 24.6111 105.375C27.459 105.24 30.4344 105.485 33.0824 106.614C34.6855 107.298 36.155 108.335 37.2255 109.719C37.3936 109.937 37.6589 110.048 37.9181 109.901C38.1327 109.778 38.2664 109.424 38.0997 109.208C36.0477 106.548 32.9427 105.141 29.6831 104.618C27.0506 104.196 24.356 104.262 21.7181 104.639C21.1781 104.716 20.6381 104.8 20.1102 104.924C19.4757 105.072 19.7444 106.048 20.3802 105.9V105.903Z'
                fill='#1B1B1B'
              />
              <path
                d='M40.2158 59.0876C39.827 60.3876 39.6657 61.7815 39.5408 63.1261C39.2242 66.5774 39.4585 70.0786 40.1058 73.4759C40.5457 75.7501 41.1692 77.9849 41.9701 80.1584C42.6316 81.9701 43.3991 83.7622 44.4001 85.4159C45.6982 87.5645 47.5922 89.8082 50.2598 90.064C52.8869 90.3165 55.2764 88.3603 56.8627 86.4791C57.6254 85.5739 58.2457 84.5121 58.3429 83.3106C58.4067 82.419 58.1205 81.5377 57.5451 80.8536C56.4604 79.5333 54.4617 79.0399 52.8572 79.561C51.9512 79.8547 51.179 80.4606 50.6783 81.2708C50.0229 82.3271 49.8724 83.613 49.9297 84.8314C50.0769 87.9458 51.3709 90.9516 53.9831 92.7633C56.299 94.3698 59.3041 94.739 62.0028 94.0343C62.7069 93.8463 63.3916 93.5916 64.0474 93.2736C64.6346 92.9928 64.1216 92.1194 63.5364 92.3961C61.2157 93.5058 58.4739 93.7076 56.0695 92.7437C53.5774 91.7447 51.871 89.5233 51.2426 86.9502C50.926 85.6542 50.7634 84.1787 51.0955 82.8793C51.1966 82.4397 51.3798 82.0231 51.6355 81.6515C51.845 81.3635 52.0983 81.1101 52.3861 80.9002C52.5477 80.792 52.7182 80.6976 52.8957 80.618C52.918 80.6079 52.8525 80.6336 52.9389 80.6005C52.9801 80.585 53.0219 80.5695 53.0638 80.5546C53.1614 80.5209 53.2602 80.4914 53.3601 80.4662C53.4526 80.4425 53.5464 80.425 53.6402 80.4068C53.6773 80.3993 53.7712 80.3872 53.68 80.3987C53.7307 80.3919 53.782 80.3865 53.8333 80.3825C54.0232 80.3661 54.214 80.3632 54.4043 80.3737C54.4993 80.3791 54.594 80.3876 54.6885 80.3993C54.5879 80.3865 54.8275 80.4243 54.8782 80.4344C55.0632 80.4722 55.2454 80.5225 55.4236 80.585C55.4647 80.5991 55.5052 80.6147 55.5457 80.6302C55.6618 80.6741 55.5235 80.6174 55.6045 80.6538C55.6855 80.6903 55.7732 80.7321 55.8556 80.776C56.0185 80.8628 56.1751 80.9612 56.324 81.0703C56.3443 81.0851 56.2828 81.0345 56.3551 81.0946C56.3929 81.1257 56.4307 81.1574 56.4671 81.1898C56.5351 81.2501 56.6005 81.3131 56.6635 81.3788C56.7265 81.4445 56.7862 81.512 56.8424 81.5813C56.9032 81.6562 56.8087 81.532 56.864 81.611C56.8917 81.6508 56.92 81.6906 56.9464 81.7311C56.9954 81.8072 57.0404 81.8852 57.0814 81.9653C57.1009 82.0025 57.1192 82.0403 57.1374 82.0781C57.1772 82.1604 57.1603 82.13 57.161 82.1314C57.2264 82.3056 57.2768 82.4852 57.3115 82.668C57.3345 82.7841 57.3115 82.6403 57.3217 82.7301C57.3264 82.7747 57.3304 82.8199 57.3331 82.8651C57.3392 82.965 57.3406 83.0676 57.3365 83.1648C57.3361 83.3498 57.31 83.5338 57.2589 83.7116C57.1395 84.192 56.9369 84.6477 56.6602 85.0582C55.9615 86.1544 54.9281 87.1412 53.8704 87.8885C53.0158 88.4926 51.9939 88.9853 51.0077 89.0562C50.0377 89.1237 49.171 88.8659 48.3421 88.3421C47.3256 87.7001 46.5115 86.7551 45.8352 85.7771C44.8861 84.4007 44.1403 82.8827 43.5078 81.3383C42.6928 79.3482 42.0279 77.2999 41.5186 75.2106C40.6789 71.7681 40.2921 68.2061 40.45 64.661C40.5277 62.9148 40.6951 61.2698 41.1298 59.5803C41.1493 59.504 41.1689 59.4285 41.1912 59.3529C41.3782 58.7271 40.4014 58.4598 40.2151 59.0829L40.2158 59.0876Z'
                fill='#1B1B1B'
              />
              <path
                d='M101.225 40.5391L97.9463 45.4572L92.7137 53.3061L91.504 55.1205C91.1416 55.6639 92.0184 56.1715 92.3815 55.6315L95.6607 50.7134L100.89 42.8625L102.1 41.0481C102.462 40.5047 101.585 39.9971 101.222 40.5371L101.225 40.5391Z'
                fill='#1B1B1B'
              />
              <path
                d='M80.3144 27.4963C79.848 29.3188 79.6394 31.2297 79.5085 33.0988C79.2169 37.2595 79.5422 41.5066 80.6918 45.5249C81.4694 48.2431 82.6398 50.8513 84.2132 53.2023C84.5737 53.7423 85.4512 53.2347 85.0907 52.6913C82.4582 48.7635 81.0353 44.1647 80.5919 39.4796C80.2855 36.1911 80.399 32.877 80.9294 29.6171C81.032 28.9982 81.1413 28.3751 81.2972 27.7663C81.4592 27.1345 80.4832 26.8652 80.3212 27.4963H80.3144Z'
                fill='#1B1B1B'
              />
              <path
                d='M26.0909 44.6938C27.0615 46.2382 27.9242 47.8596 28.7456 49.4863C30.5006 52.9606 32.0228 56.5793 33.0454 60.3404C33.6468 62.553 34.0714 64.823 34.1254 67.1201C34.1396 67.7708 35.1527 67.7728 35.1379 67.1201C35.0447 62.9351 33.8257 58.8081 32.3029 54.9356C31.0694 51.8132 29.6177 48.7815 27.9586 45.8629C27.638 45.2973 27.314 44.7323 26.9677 44.1822C26.6214 43.6321 25.7453 44.1397 26.0902 44.6932L26.0909 44.6938Z'
                fill='#1B1B1B'
              />
              <path
                d='M38.6468 40.5438C39.6174 41.8607 40.8554 43.0136 42.1379 44.0173C44.8325 46.126 48.0273 47.5854 51.4677 47.8419C55.1215 48.1119 58.8502 47.0373 61.5408 44.5006C63.7109 42.4547 65.098 39.6744 65.856 36.8178C66.1833 35.5892 66.3948 34.3327 66.4878 33.0648C66.5553 32.1609 66.5607 31.2382 66.4021 30.3425C66.3779 30.2021 66.3455 30.0633 66.3049 29.9267C66.1166 29.3043 65.1392 29.5696 65.3289 30.1967C65.368 30.3286 65.3996 30.4627 65.4234 30.5983C65.4328 30.6516 65.4652 30.8778 65.4456 30.7279C65.4573 30.8179 65.4675 30.9097 65.476 31.0033C65.5129 31.4298 65.5253 31.858 65.5131 32.2858C65.4868 33.3942 65.3525 34.4974 65.1122 35.5798C64.5418 38.2528 63.4422 40.8961 61.6197 42.9636C60.6302 44.0962 59.4251 45.0205 58.0746 45.6825C56.46 46.4669 54.6409 46.8267 52.8528 46.8665C49.4697 46.9421 46.2378 45.7264 43.5061 43.7851C42.5236 43.0838 41.6054 42.2966 40.7622 41.4327C40.4769 41.142 40.2009 40.8428 39.934 40.535C39.844 40.4306 39.7551 40.3248 39.6674 40.2177L39.5749 40.103C39.5553 40.0787 39.4649 39.9619 39.5391 40.0578C39.6134 40.1536 39.5391 40.0578 39.5216 40.0341C39.3582 39.8127 39.0849 39.7068 38.829 39.8526C38.6103 39.9768 38.4855 40.3251 38.6475 40.5451L38.6468 40.5438Z'
                fill='#1B1B1B'
              />
              <path
                d='M14.9131 69.735L18.795 71.0303L24.9787 73.0938L26.3962 73.5663C27.0158 73.7729 27.2811 72.7955 26.6662 72.5903L22.7842 71.2949L16.6006 69.2315L15.1831 68.759C14.5634 68.5524 14.2981 69.5298 14.9131 69.735Z'
                fill='#1B1B1B'
              />
              <path
                d='M93.1362 116.374C107.027 116.374 118.288 105.113 118.288 91.2222C118.288 77.3312 107.027 66.0703 93.1362 66.0703C79.2452 66.0703 67.9844 77.3312 67.9844 91.2222C67.9844 105.113 79.2452 116.374 93.1362 116.374Z'
                fill='#5E59FF'
              />
              <path
                d='M103.903 97.3842C107.177 95.9714 108.953 92.3365 108.264 88.8792C107.606 85.5791 104.702 83.1477 101.391 82.8669C99.2502 82.6854 97.1233 83.4987 95.5681 84.9594L97.2603 85.4063C96.3504 82.9628 94.5941 80.8743 92.2586 79.6789C89.9096 78.4774 87.1421 78.1845 84.6014 78.9189C82.2099 79.6216 80.1454 81.1503 78.7755 83.2328C77.3337 85.4164 76.8362 88.086 77.2446 90.6578C77.7211 93.6575 79.6266 96.3217 82.2213 97.8661C82.4532 98.0016 82.7294 98.0395 82.9891 97.9714C83.2489 97.9033 83.4709 97.7348 83.6064 97.503C83.742 97.2711 83.7798 96.995 83.7117 96.7352C83.6436 96.4754 83.4751 96.2534 83.2433 96.1179C82.9929 95.9687 82.7478 95.8107 82.5116 95.64C82.459 95.6022 82.407 95.5639 82.3557 95.5252C82.4826 95.6204 82.3516 95.5252 82.3314 95.505C82.2065 95.403 82.0823 95.3025 81.9615 95.1924C81.7446 94.9994 81.5371 94.7969 81.3391 94.5849C81.2491 94.4904 81.1629 94.3944 81.0806 94.2967C81.0387 94.2477 80.9971 94.1982 80.9557 94.1482C80.9361 94.1239 80.7714 93.914 80.874 94.049C80.5213 93.5839 80.213 93.0867 79.9533 92.564C79.8953 92.4472 79.8413 92.3284 79.7866 92.2096C79.6557 91.9248 79.8238 92.3082 79.7549 92.1347C79.7306 92.0739 79.7063 92.0125 79.6833 91.9511C79.5725 91.6576 79.4765 91.3586 79.3958 91.0554C79.3229 90.7804 79.2626 90.5028 79.2149 90.2224C79.2007 90.1394 79.1872 90.0557 79.1757 89.9727C79.1818 90.0186 79.1946 90.1461 79.1757 89.9389C79.1589 89.7688 79.1433 89.6014 79.1339 89.4279C79.1181 89.1449 79.1154 88.8614 79.1258 88.5774C79.1307 88.4361 79.1388 88.2953 79.1501 88.1549C79.155 88.0928 79.1607 88.0307 79.167 87.9686C79.167 87.9483 79.2054 87.6426 79.1751 87.8687C79.2497 87.3249 79.3735 86.789 79.545 86.2676C79.5823 86.1533 79.6219 86.0408 79.6638 85.9301C79.6845 85.8738 79.7059 85.8178 79.7279 85.762C79.7279 85.7694 79.8379 85.4981 79.7792 85.6338C79.7299 85.7472 79.8062 85.575 79.8183 85.5494C79.8501 85.4819 79.8805 85.4144 79.9128 85.3469C79.9776 85.2119 80.0451 85.0798 80.1154 84.9507C80.2287 84.7423 80.3498 84.5387 80.4785 84.3398C80.5505 84.2282 80.625 84.1182 80.7019 84.0097C80.7444 83.9496 80.789 83.8902 80.8322 83.8308C80.9422 83.6783 80.7897 83.8801 80.8632 83.7903C81.1959 83.3775 81.5607 82.9916 81.954 82.6361C82.053 82.5461 82.1536 82.4599 82.2558 82.3776C82.3008 82.3402 82.3458 82.3033 82.3908 82.2669C82.2456 82.3816 82.3671 82.2851 82.3962 82.2669C82.6236 82.1022 82.8531 81.9422 83.0934 81.7944C83.3085 81.6625 83.5284 81.5394 83.7529 81.4251C83.8724 81.3644 83.9939 81.3077 84.1154 81.251C84.1411 81.2388 84.3132 81.1632 84.1998 81.2118C84.0864 81.2604 84.3415 81.1551 84.3699 81.1443C84.864 80.9536 85.3734 80.8052 85.8927 80.7009C86.0432 80.6705 86.1944 80.6455 86.3463 80.6212C86.3847 80.6151 86.5447 80.5989 86.353 80.6212L86.538 80.601C86.8192 80.5731 87.1011 80.5578 87.3837 80.5551C87.6803 80.5519 87.9766 80.5627 88.2727 80.5875C88.403 80.5983 88.5333 80.6118 88.6629 80.6286C88.4847 80.6057 88.6507 80.6286 88.6831 80.6334C88.7783 80.6502 88.8741 80.6651 88.9693 80.6833C89.5328 80.7896 90.0853 80.9477 90.6197 81.1558C90.6784 81.1788 90.7371 81.2017 90.7952 81.2233C90.6123 81.1464 90.8627 81.2557 90.8985 81.2726C91.0407 81.3383 91.1811 81.4076 91.3197 81.4805C91.5955 81.6254 91.8637 81.7829 92.1243 81.953C92.2539 82.0385 92.3814 82.1271 92.507 82.2189C92.4948 82.2102 92.7365 82.3951 92.6271 82.3087C92.5347 82.2358 92.725 82.3897 92.7426 82.4039C92.9811 82.6014 93.2094 82.8105 93.4277 83.031C93.6572 83.2625 93.8705 83.5068 94.077 83.7593C94.1783 83.8835 93.994 83.6466 94.0905 83.7748C94.1468 83.8491 94.2019 83.9242 94.2559 84.0003C94.3459 84.1272 94.4328 84.2561 94.5165 84.387C94.6843 84.6503 94.8387 84.9203 94.9795 85.197C95.047 85.3368 95.1145 85.4792 95.182 85.6216C95.2495 85.764 95.1294 85.4866 95.1908 85.6398C95.232 85.7424 95.2718 85.8423 95.3103 85.9483C95.5762 86.6618 96.4139 86.9473 97.0025 86.3952C97.1528 86.2505 97.3105 86.1138 97.475 85.9854C97.3582 86.0745 97.5357 85.9449 97.5634 85.926C97.635 85.8761 97.7072 85.8275 97.7801 85.7802C97.9416 85.6763 98.1077 85.5795 98.2782 85.49C98.3561 85.449 98.4344 85.4097 98.5131 85.3719C98.5766 85.3417 98.6407 85.3125 98.7055 85.2841C98.6263 85.3183 98.6436 85.3122 98.7575 85.2659C99.1092 85.1363 99.4703 85.0334 99.8375 84.9581C100.196 84.8931 100.56 84.865 100.924 84.8744C101.095 84.8766 101.267 84.8859 101.439 84.9021C101.49 84.9068 101.696 84.9304 101.491 84.9021C101.582 84.9142 101.673 84.9297 101.761 84.9466C102.103 85.0098 102.439 85.1001 102.766 85.2166C102.834 85.2416 102.906 85.2686 102.976 85.2949C103.246 85.3975 102.802 85.2038 103.063 85.3327C103.198 85.4002 103.333 85.461 103.46 85.5318C103.615 85.6164 103.767 85.7064 103.915 85.8018C103.964 85.8342 104.013 85.8671 104.062 85.9004C104.094 85.9227 104.384 86.1447 104.21 86.005C104.462 86.2066 104.699 86.4259 104.92 86.6611C105.021 86.7684 105.114 86.8805 105.21 86.9919C105.397 87.2099 105.102 86.8299 105.267 87.0654C105.318 87.1377 105.37 87.2085 105.419 87.2821C105.601 87.5517 105.762 87.8344 105.902 88.1279C105.913 88.1522 106.031 88.4222 105.944 88.2123C105.967 88.2676 105.989 88.323 106.012 88.379C106.086 88.5752 106.151 88.775 106.207 88.9784C106.247 89.1246 106.281 89.2722 106.311 89.4212C106.329 89.511 106.344 89.6014 106.359 89.6912C106.391 89.8937 106.363 89.7378 106.359 89.6966C106.399 90.0777 106.409 90.4614 106.388 90.8441C106.382 90.9433 106.374 91.0419 106.364 91.1411C106.344 91.3436 106.356 91.2086 106.364 91.1647C106.335 91.3573 106.298 91.5483 106.251 91.7378C106.213 91.8935 106.169 92.0478 106.12 92.2008C106.091 92.2908 106.06 92.3808 106.026 92.4708C106.011 92.5107 105.915 92.7408 105.985 92.5815C105.82 92.9562 105.62 93.3147 105.389 93.6521C105.336 93.7295 105.281 93.8058 105.225 93.8809C105.329 93.7459 105.177 93.9376 105.15 93.9693C105.029 94.1124 104.902 94.2504 104.77 94.3831C104.614 94.5384 104.45 94.6808 104.284 94.8232C104.135 94.9501 104.233 94.8644 104.268 94.8387C104.168 94.9143 104.065 94.9866 103.961 95.0554C103.619 95.2811 103.258 95.4757 102.881 95.6366C102.379 95.8533 102.265 96.591 102.518 97.0217C102.822 97.5408 103.399 97.6022 103.903 97.3848V97.3842Z'
                fill='white'
              />
              <path
                d='M92.3545 90.4391V106.613C92.3545 107.143 92.8202 107.65 93.367 107.626C93.9137 107.602 94.3795 107.181 94.3795 106.613V90.4391C94.3795 89.9092 93.9137 89.4023 93.367 89.4266C92.8202 89.4509 92.3545 89.8714 92.3545 90.4391Z'
                fill='white'
              />
              <path
                d='M99.7336 96.2189L94.7831 90.0892L94.0831 89.2225C93.7524 88.8134 92.9863 88.8458 92.6515 89.2225L87.2029 95.3515L86.4313 96.2189C86.0682 96.6272 86.0263 97.2483 86.4313 97.6506C86.8012 98.0205 87.4985 98.061 87.863 97.6506L93.3116 91.5216L94.0831 90.6542H92.6515L97.6019 96.7838L98.3019 97.6506C98.6455 98.0765 99.3758 98.0083 99.7336 97.6506C100.154 97.23 100.078 96.6455 99.7336 96.2189Z'
                fill='white'
              />
              <path
                d='M69.1476 70.4653C66.3801 70.4653 64.542 73.3152 64.542 77.6143C64.542 73.3152 62.7067 70.4653 59.9365 70.4653C62.704 70.4653 64.542 67.6155 64.542 63.3164C64.5427 67.6155 66.3781 70.4653 69.1476 70.4653Z'
                fill='#5E59FF'
              />
              <path
                d='M116.977 57.1237C112.7 57.1237 109.864 61.5247 109.864 68.1653C109.864 61.5247 107.029 57.1237 102.751 57.1237C107.028 57.1237 109.864 52.7227 109.864 46.082C109.865 52.722 112.7 57.1237 116.977 57.1237Z'
                fill='#5E59FF'
              />
            </svg>

            <h5 className='mb-1 mt-6 text-body-lg font-semibold'>
              Click to upload, or drag and drop
            </h5>

            <p className='text-body-sm text-netral-50'>
              {'SVG, PNG, JPEG (MAX 800X400px)'}
            </p>
          </main>
        )}

        {activeState === 2 && (
          <main className='my-10 flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-netral-30 bg-netral-15'>
            <div className='relative aspect-video h-96'>
              <Image
                className='h-full w-full object-cover'
                alt='Image'
                src={'/outlet-1.jpg'}
                fill
              />
            </div>
          </main>
        )}

        <footer className='flex flex-row justify-end gap-3'>
          <Button size='md' variant='default-nude'>
            Discard
          </Button>

          <Button size='md' variant='primary-bg' onClick={nextState}>
            Save
          </Button>
        </footer>
      </Modal>
    </div>
  )
}

export default DBOutletEdit
