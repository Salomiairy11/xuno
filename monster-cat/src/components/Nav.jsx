import React from 'react'
import logo from '../assets/logo.jpg'
import { RxHamburgerMenu } from 'react-icons/rx' // ← hamburger icon

export default function Navbar({ openMenu = () => {}, isMenuOpen = false }) {

  return (
    <>

      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 20px',
          backgroundColor: 'transparent',
          zIndex: 10000,
          pointerEvents: 'auto',
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            height: '60px',
            width: 'auto',
            zIndex: 10001,
            marginLeft: '20px',
          }}
        />

        {/* Hamburger Icon */}
        {!isMenuOpen && (
        <RxHamburgerMenu
          size={35}
          color="white"
          style={{
            cursor: 'pointer',
            zIndex: 2,
            marginRight: '6%',
            marginTop: 0,
          }}
          onClick={() => openMenu()}
        />
        )}
      </nav>
    </>
  )
}
