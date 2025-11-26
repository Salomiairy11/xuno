import { useState } from 'react'
import Carosel from './components/Carosel'
import Contact from './components/Contact'
import Nav from './components/Nav'
import SideMenu from './components/SideMenu'
import CookieBanner from './components/CookieBanner'

function App() {
  const [sideOpen, setSideOpen] = useState(false)
  return (
    <>
      <Nav openMenu={() => setSideOpen((v) => !v)} isMenuOpen={sideOpen} />
      <SideMenu isOpen={sideOpen} closeMenu={() => setSideOpen(false)} />
      <Carosel />
      <Contact />
      <CookieBanner />
    </>
  )
}

export default App
