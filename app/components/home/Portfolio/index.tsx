import React from 'react'

import PortfolioCard from '../../PortfolioCard'

export default function Portfolio() {
  return (
    <>
      <div className='flex w-full flex-col gap-5 py-10'>
        <div className='flex w-full flex-col gap-4'>
          <h1 className='text-[32px] font-semibold leading-[1.313em] text-[#383838]'>
            Portfolio
          </h1>
          <p className='text-base text-[#767676] '>
            From client projects to concept work, here are a few of my favorite
            recent case studies.
          </p>
        </div>
        <div className='flex w-full flex-col gap-14 pb-14'>
          <PortfolioCard />
          <PortfolioCard image='/images/pf-item2.jpeg' reverse />
          <PortfolioCard />
          <PortfolioCard image='/images/pf-item2.jpeg' reverse />
        </div>
      </div>
      <div className='h-[1px] w-full bg-[#ECECEC]' />
    </>
  )
}
