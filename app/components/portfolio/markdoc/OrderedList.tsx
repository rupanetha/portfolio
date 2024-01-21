import React from 'react'

export default function OrderedList({ children }: any) {
  return <ol className='list-decimal list-outside pl-[1.6em] mt-4 [&>li]:text-[#767676] [&>li]:text-base [&>li]:leading-[2em]'>{children}</ol>
}
