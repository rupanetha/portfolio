import Contact from './components/home/Contact'
import Header from './components/home/Header'
import Portfolio from './components/home/Portfolio'
import SocialSeperator from './components/home/SocialSeperator'
import LayoutContainer from './components/LayoutContainer'

export default function Home() {
  return (
    <LayoutContainer>
      <main className='flex min-h-screen flex-col'>
        <Header />
        <SocialSeperator />
        <Portfolio />
        <Contact />
      </main>
    </LayoutContainer>
  )
}
