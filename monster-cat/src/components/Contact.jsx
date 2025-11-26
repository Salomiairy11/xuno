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


function Contact() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        position: 'fixed',
        left: '90%',
        top: '50%',
        transform: 'translateY(-50%)',
        padding: '12px',
      }}
    >
      <FaInstagram size={28} color="#fff" />
      <FaTiktok size={28} color="#fff" />
      <FaXTwitter size={28} color="#fff" />
      <FaTwitch size={28} color="#fff" />
      <FaFacebook size={28} color="#fff" />
      <FaDiscord size={28} color="#fff" />
      <FaHeadphones size={28} color="#fff" />
    </div>
  )
}

export default Contact
