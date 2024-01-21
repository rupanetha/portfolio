import React from 'react'

export default function Skills() {
  return (
    <>
      <div className='flex w-full flex-col gap-5 py-10'>
        <div className='flex w-full flex-col items-center gap-[10px]'>
          <h3 className='text-lg font-medium leading-6 text-[#5F7CFF]'>
            Skills
          </h3>
          <h2 className='text-xl font-semibold text-[#383838]'>
            A few things I do well
          </h2>
          <p className='text-base leading-[30px] text-[#767676]'>
            This list is a work in progress - it evolves as I continue to learn.
          </p>
        </div>
        <div className='grid grid-cols-3 gap-x-4 pb-[30px] pt-[10px]'>
          <div className='flex flex-col'>
            <h3 className='py-2 text-lg italic text-[#383838]'>
              Technical Skills
            </h3>
            <div className='flex flex-col text-base leading-[30px] text-[#767676]'>
              <p>Figma & Sketch</p>
              <p>Webflow</p>
              <p>InVision</p>
              <p>Zeplin</p>
              <p>Adobe CC (Ps, Il, Ae, Id)</p>
              <p>HTML, CSS, Javascript</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <h3 className='py-2 text-lg italic text-[#383838]'>
              Design Skills
            </h3>
            <div className='flex flex-col text-base leading-[30px] text-[#767676]'>
              <p>Figma & Sketch</p>
              <p>Webflow</p>
              <p>InVision</p>
              <p>Zeplin</p>
              <p>Adobe CC (Ps, Il, Ae, Id)</p>
              <p>HTML, CSS, Javascript</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <h3 className='py-2 text-lg italic text-[#383838]'>Soft Skills</h3>
            <div className='flex flex-col text-base leading-[30px] text-[#767676]'>
              <p>Figma & Sketch</p>
              <p>Webflow</p>
              <p>InVision</p>
              <p>Zeplin</p>
              <p>Adobe CC (Ps, Il, Ae, Id)</p>
              <p>HTML, CSS, Javascript</p>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[1px] w-full bg-[#ECECEC]' />
    </>
  )
}
