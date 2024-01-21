import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa6'
import { FaDribbble } from 'react-icons/fa6'
import { FaBehance } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'

export default function SocialSeperator() {
  return (
    <div className='flex w-full items-center justify-between gap-12'>
      <div className='h-[1px] w-full bg-[#ECECEC]' />
      <div className='flex items-center gap-4'>
        <FaLinkedinIn className='h-5 w-5 text-[#383838]' />
        <FaTwitter className='h-5 w-5 text-[#383838]' />
        <FaDribbble className='h-5 w-5 text-[#383838]' />
        <FaBehance className='h-6 w-6 text-[#383838]' />
        <FaInstagram className='h-5 w-5 text-[#383838]' />
      </div>
      <div className='h-[1px] w-full bg-[#ECECEC]' />
    </div>
  )
}
