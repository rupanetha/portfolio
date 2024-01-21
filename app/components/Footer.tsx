import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa6'
import { FaDribbble } from 'react-icons/fa6'
import { FaBehance } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'

export default function Footer() {
  return (
    <>
      <div className='mt-5 h-[1px] w-full bg-[#ECECEC]' />
      <div className='flex items-center justify-between pb-10 pt-[30px]'>
        <div className='flex items-center gap-4'>
          <FaLinkedinIn className='h-6 w-6 text-[#383838]' />
          <FaTwitter className='h-6 w-6 text-[#383838]' />
          <FaDribbble className='h-6 w-6 text-[#383838]' />
          <FaBehance className='h-7 w-7 text-[#383838]' />
          <FaInstagram className='h-6 w-6 text-[#383838]' />
        </div>
        <div>
          <a
            href='mailto:rupanethay@gmail.com'
            className='text-[#383838] hover:text-[#5F7CFF]'
          >
            rupanethay@gmail.com
          </a>
        </div>
      </div>
    </>
  )
}
