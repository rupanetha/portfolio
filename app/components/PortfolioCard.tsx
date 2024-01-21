import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

import Button from './Button'

type Props = {
  reverse?: boolean
  image?: string
}

export default function PortfolioCard({ reverse = false, image }: Props) {
  return (
    <div
      className={clsx(
        'flex w-full overflow-hidden rounded-[27px] bg-white shadow-[3px_3px_10px_1px_rgba(0,0,0,0.06)]',
        { 'flex-row-reverse': reverse }
      )}
    >
      <div className='flex w-1/2 flex-col'>
        <Image
          src={image || '/images/pf-item1.png'}
          width={446.5}
          height={446.5}
          alt='portfolio'
          className='w-full'
        />
      </div>
      <div className='flex w-1/2 flex-col justify-center'>
        <div className='flex w-full flex-col justify-between px-16 py-5'>
          <div className='flex flex-col'>
            <p className='mt-[10px] text-sm font-medium tracking-[1px] text-[#38383880]'>
              UX + Interaction Design
            </p>
            <h1 className='mb-4 text-[32px] font-semibold leading-[42px] text-[#383838]'>
              Trip Planning Feature
            </h1>
            <p className='text-base leading-[30px] text-[#767676]'>
              A travel app feature to help travelers plan their dream trip to
              Japan.
            </p>
          </div>
          <div className='mb-5 mt-16 w-full'>
            <Button className='bg-[#4a9acb]'>See project</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
