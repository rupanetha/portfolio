import React from 'react'

import DateFormatter from './DateFormatter'

type Props = {
  title: string
  desc: string | undefined
  publishedAt: string
}

export default function PostHeader({ title, desc, publishedAt }: Props) {
  return (
    <div className='w-full py-5 text-center'>
      <div className='flex w-full flex-col items-center gap-[10px] pt-5'>
        <h1 className='text-[42px] font-semibold leading-[1.238em] text-[#383838]'>
          {title}
        </h1>
        {desc && (
          <p className='text-base leading-[30px] text-[#767676]'>{desc}</p>
        )}
        <div className='mt-[10px] h-[1px] w-[25vw] bg-[#ECECEC]' />
      </div>
      <div className='flex w-full justify-center py-4'>
        <span className='text-base leading-[30px] text-[#767676]'>
          <DateFormatter dateString={publishedAt} />
        </span>
      </div>
    </div>
  )
}
