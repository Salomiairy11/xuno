import { useState, useEffect } from 'react'
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
      <div
        className={`menuOpener ${isOpen ? 'open' : ''}`}
        onClick={() => closeMenu()}
      />
      <div className={`menu ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        <div className="menuHeader">
          <img src={logo} alt="Logo" className="menuLogo" />
          <button
            type="button"
            className="closeMenu"
            onClick={() => closeMenu()}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <div className="menuScrollbar">
          {menuItems.map((item) => (
            <div key={item.title} className="menuSection">
              <div
                className="menuSectionTitle"
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
                <div className="menuSubItems">
                  {item.subItems.map((sub) => (
                    <div key={sub}>{sub}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="menuFooter">
          <div className="menuSocials">
            <FaInstagram />
            <FaTiktok />
            <FaXTwitter />
            <FaTwitch />
            <FaFacebook />
            <FaDiscord />
            <FaHeadphones />
          </div>

          <div className="menuButtons">
            <button className="signIn">SIGN IN</button>
            <button className="signUp">OR SIGN UP</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideMenu
