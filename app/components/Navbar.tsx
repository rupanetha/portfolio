'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NAV_LINKS = [
  {
    name: 'Work',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Resume',
    path: '/resume'
  }
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <>
      <div className='flex h-[98px] w-full items-center justify-between py-[14px]'>
        <div className='text-3xl font-bold'>Rn</div>
        <div className='flex gap-10 pr-5'>
          {NAV_LINKS.map((navItem, idx) => (
            <Link
              key={idx + 1}
              className={clsx('text-base leading-[30px] hover:text-[#5F7CFF]', {
                'font-[600] text-[#5F7CFF]': pathname === navItem.path,
                'text-[#767676]': pathname !== navItem.path
              })}
              href={navItem.path}
            >
              {navItem.name}
            </Link>
          ))}
        </div>
      </div>
      <div className='h-[1px] w-full bg-[#ECECEC]' />
    </>
  )
}
