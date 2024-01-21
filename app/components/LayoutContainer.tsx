import React from 'react'

import Footer from './Footer'
import Navbar from './Navbar'

export default function LayoutContainer({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='mx-auto my-0 w-full max-w-[900px]'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
