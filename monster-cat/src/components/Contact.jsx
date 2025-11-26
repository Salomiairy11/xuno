import React from 'react'
import {
  FaInstagram,
  FaTiktok,
  FaTwitch,
  FaFacebook,
  FaDiscord,
  FaHeadphones,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Contact() {
  const icons = [
    FaInstagram,
    FaTiktok,
    FaXTwitter,
    FaTwitch,
    FaFacebook,
    FaDiscord,
    FaHeadphones,
  ]

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        position: 'fixed',
        left: '85%',
        top: '50%',
        transform: 'translateY(-50%)',
        padding: '12px',
        color: '#fff',
      }}
    >
      {icons.map((Icon, index) => (
        <Icon key={index} size={23} />
      ))}
    </div>
  )
}
