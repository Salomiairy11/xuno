import React, { useState, useEffect } from 'react'
import '../styles/sidemenu.css'
import {
  FaInstagram,
  FaTiktok,
  FaTwitch,
  FaFacebook,
  FaDiscord,
  FaHeadphones,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import logo from '../assets/logo-extended.png'

const menuItems = [
  {
    title: 'MUSIC',
    subItems: ['OUR MUSIC', 'INSTINCT', 'UNCAGED', 'SILK'],
  },
  {
    title: 'ARTISTS',
    subItems: [],
  },
  {
    title: 'ABOUT',
    subItems: [
      'ABOUT MONSTERCAT',
      'DIVERSITY & INCLUSION',
      'CODE OF ETHICS',
      'ENVIRONMENTAL',
      'CONTACT US',
      'CAREERS',
    ],
  },
  {
    title: 'NEWS',
    subItems: [],
  },
  {
    title: 'EVENTS',
    subItems: ['MONSTERCAT EVENTS EXPERIENCE', 'UPCOMING EVENTS'],
  },
  {
    title: 'PROGRAMMING',
    subItems: [
      'MONSTERCATTV',
      'CALL OF THE WILD',
      'SILK SHOWCASE',
      'UPCOMING SHOWS',
    ],
  },
  { title: 'GOLD', subItems: [] },
  { title: 'PARTNERS', subItems: [] },
  { title: 'PRESS', subItems: [] },
  { title: 'PLAYER', subItems: [] },
  { title: 'SHOP', subItems: [] },
  { title: 'LOST CIVILIZATION', subItems: [] },
]

function SideMenu({ isOpen = false, closeMenu = () => {} }) {
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title)
  }
  useEffect(() => {
    const onKeydown = (e) => {
      if (e.key === 'Escape') closeMenu()
    }
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  }, [closeMenu])

  return (
    <>
      {/* Overlay to dim page and close menu on click */}
      <div
        className={`side-menu-overlay ${isOpen ? 'open' : ''}`}
        onClick={() => closeMenu()}
      />
      <div
        className={`side-menu ${isOpen ? 'open' : ''}`}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '24px',
            fontSize: '28px',
            fontWeight: 'bold',
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              objectFit: 'contain',
              marginRight: '12px',
            }}
          />
          <button
            type="button"
            className="side-menu-close"
            onClick={() => closeMenu()}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        {/* Scrollable menu */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '0 24px',
          }}
          // Custom scrollbar
          className="side-menu-scroll"
        >
          {menuItems.map((item) => (
            <div key={item.title} style={{ marginBottom: '24px' }}>
              {' '}
              {/* increased from 16px */}
              <div
                style={{
                  fontSize: '20px',
                  cursor: item.subItems.length ? 'pointer' : 'default',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
                onClick={() =>
                  item.subItems.length && toggleDropdown(item.title)
                }
              >
                {item.title}
                {item.subItems.length ? (
                  <span>{openDropdown === item.title ? '^' : '>'}</span>
                ) : null}
              </div>
              {openDropdown === item.title && item.subItems.length > 0 && (
                <div
                  style={{
                    marginLeft: '16px',
                    marginTop: '12px', // increased from 8px
                    fontSize: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px', // increased from 12px
                  }}
                >
                  {item.subItems.map((sub) => (
                    <div key={sub}>{sub}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Social & buttons at bottom */}
        <div style={{ padding: '24px' }}>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginBottom: '24px',
              fontSize: '24px',
              cursor: 'pointer',
            }}
          >
            <FaInstagram />
            <FaTiktok />
            <FaXTwitter />
            <FaTwitch />
            <FaFacebook />
            <FaDiscord />
            <FaHeadphones />
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button
              style={{
                background: 'black',
                color: 'white',
                border: '2px solid white',
                padding: '14px 24px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              SIGN IN
            </button>
            <button
              style={{
                background: 'black',
                color: 'white',
                border: 'none',
                padding: '14px 24px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              OR SIGN UP
            </button>
          </div>
        </div>

        {/* Inline CSS for scrollbar */}
        <style>
          {`
          .side-menu-scroll::-webkit-scrollbar {
            width: 8px;
            padding:8px;
          }
          .side-menu-scroll::-webkit-scrollbar-track {
            background: black;
          }
          .side-menu-scroll::-webkit-scrollbar-thumb {
            background-color: #555;
          }
          .side-menu-scroll::-webkit-scrollbar-thumb:hover {
            background-color: #888;
          }
        `}
        </style>
      </div>
    </>
  )
}

export default SideMenu
