'use client'
import React from 'react'

import Button from '../../Button'

export default function Contact() {
  async function handleSubmit(evt: any) {
    evt.preventDefault()
  }
  return (
    <>
      <div className='flex w-full flex-col py-10'>
        <div className='mb-5 flex flex-col gap-4'>
          <h1 className='text-[32px] font-semibold leading-[1.313em] text-[#383838]'>
            Let's work together!
          </h1>
          <p className='text-base leading-[30px] text-[#767676]'>
            Get in touch with me through social media or by email.
          </p>
        </div>
        <div className='flex w-full flex-col'>
          <form onSubmit={handleSubmit}>
            <div className='flex w-full flex-col gap-[30px]'>
              <div className='flex w-full items-center gap-4'>
                <div className='flex w-full flex-col gap-[6px]'>
                  <label className='text-sm font-medium tracking-[1px] text-[#76767699]'>
                    Name
                  </label>
                  <input
                    className='h-[38px] w-full rounded-[4px] border-[1px] border-[#ccc] bg-white px-3 py-2 text-sm leading-[1.428] text-[#333]'
                    type='text'
                    required
                    name='name'
                    placeholder='Name'
                  />
                </div>
                <div className='flex w-full flex-col gap-[6px]'>
                  <label className='text-sm font-medium tracking-[1px] text-[#76767699]'>
                    Email
                  </label>
                  <input
                    className='h-[38px] w-full rounded-[4px] border-[1px] border-[#ccc] bg-white px-3 py-2 text-sm leading-[1.428] text-[#333]'
                    type='email'
                    required
                    name='email'
                    placeholder='Email'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-[6px]'>
                <label className='text-sm font-medium tracking-[1px] text-[#76767699]'>
                  Message
                </label>
                <textarea
                  className='w-full rounded-[4px] border-[1px] border-[#ccc] bg-white px-3 py-2 text-sm leading-[1.428] text-[#333]'
                  rows={2}
                  placeholder='Type your message...'
                  required
                  name='email'
                />
              </div>
              <div className='flex w-full justify-end'>
                <Button>Contact me</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
