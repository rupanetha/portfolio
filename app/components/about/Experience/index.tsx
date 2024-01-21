import React from 'react'

import ExperienceItem from './ExperienceItem'

export default function Experience() {
  return (
    <>
      <div className='flex w-full flex-col gap-[10px] py-10'>
        <div className='flex w-full flex-col items-center gap-[10px]'>
          <h3 className='text-lg font-medium leading-6 text-[#5F7CFF]'>
            Experience
          </h3>
          <h2 className='text-xl font-semibold text-[#383838]'>
            Over four years of experience in UX design
          </h2>
          <p className='text-base leading-[30px] text-[#767676]'>
            An environmental scientist turned designer.
          </p>
        </div>
        <div>
          <ExperienceItem />
          <ExperienceItem />
          <ExperienceItem />
        </div>
      </div>
      <div className='h-[1px] w-full bg-[#ECECEC]' />
    </>
  )
}
