import React from 'react'

import Education from '../components/about/Education'
import Experience from '../components/about/Experience'
import Header from '../components/about/Header'
import Skills from '../components/about/Skills'
import LayoutContainer from '../components/LayoutContainer'

export default function page() {
  return (
    <LayoutContainer>
      <main className='flex min-h-screen flex-col'>
        <Header />
        <Skills />
        <Experience />
        <Education />
      </main>
    </LayoutContainer>
  )
}
