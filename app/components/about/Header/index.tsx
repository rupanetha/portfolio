import Image from 'next/image'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

export default function Header() {
  return (
    <>
      <div className='grid w-full grid-cols-[1fr_0.5fr] grid-rows-[auto] gap-x-[60px] py-10'>
        <div className='flex flex-col justify-center'>
          <h1 className='mb-[10px] mt-5 text-[42px] font-semibold leading-[1.238em] text-[#383838]'>
            Hello, I'm Tania 👋
          </h1>
          <p className='mb-[20px] text-base leading-[30px] text-[#767676]'>
            I'm a Tokyo-based UX/UI designer with over 5 years of industry
            experience. Lately, I've been lucky to be able to combine two of my
            passions — travel and UX design — by joining the UX Team at Rakuten
            Travel.
          </p>
          <div className='mt-[6px] flex cursor-pointer items-center'>
            <span className='mr-[2px] text-base font-semibold leading-[18px] text-[#5F7CFF]'>
              Contact me
            </span>
            <FiArrowUpRight className='h-5 w-5 text-[#5F7CFF]' />
          </div>
        </div>
        <div className='max-h-[334px] w-full overflow-hidden rounded-[27px]'>
          <Image
            src='/images/about.png'
            width={0}
            height={0}
            sizes='100vw'
            className='h-full w-full object-cover'
            alt='about-header'
          />
        </div>
      </div>
      <div className='h-[1px] w-full bg-[#ECECEC]' />
    </>
  )
}
