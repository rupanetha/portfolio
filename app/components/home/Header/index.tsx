import Image from 'next/image'
import React from 'react'

import Button from '../../Button'

export default function Header() {
  return (
    <div className='flex h-full w-full items-center justify-between gap-8 py-10'>
      <div className='flex flex-col'>
        <h1 className='mb-4 text-[32px] font-semibold leading-[42px] text-[#383838]'>
          Hello, I'm Tania
        </h1>
        <p className='mb-2 text-base leading-[30px] text-[#767676]'>
          A UX/UI Designer that loves to solve problems and design simple
          solutions that are delightful to use.
        </p>
        <div className='h-full w-full py-5'>
          <Button>View resume</Button>
        </div>
      </div>
      <div className='flex min-h-[383px] min-w-[438px]'>
        <Image
          className='h-full w-full'
          src={'/images/hero.png'}
          alt='hero'
          width={438}
          height={383}
        />
      </div>
    </div>
  )
}
