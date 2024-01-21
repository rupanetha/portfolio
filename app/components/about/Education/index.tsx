import React from 'react'

import Button from '../../Button'
import EduItem from './EduItem'

export default function Education() {
  return (
    <>
      <div className='flex w-full flex-col gap-[10px] py-10'>
        <div className='flex w-full flex-col items-center gap-[10px]'>
          <h3 className='text-lg font-medium leading-6 text-[#5F7CFF]'>
            Education
          </h3>
          <h2 className='text-xl font-semibold text-[#383838]'>
            Learning is experience
          </h2>
          <p className='text-base leading-[30px] text-[#767676]'>
            "Learn continually - there's always one more thing to learn".
          </p>
        </div>
        <div className='my-[30px] grid w-full grid-cols-3 grid-rows-[auto] gap-x-4 gap-y-[30px]'>
          <EduItem />
          <EduItem />
          <EduItem />
          <EduItem />
          <EduItem />
          <EduItem />
        </div>
        <div className='flex w-full justify-center py-4 mt-5'>
          <Button>Download resume</Button>
        </div>
      </div>
    </>
  )
}
