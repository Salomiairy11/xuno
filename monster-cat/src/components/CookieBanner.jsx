import { useState } from 'react'
import '../styles/cookieBanner.css'

export default function CookieBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="banner">
      <p className="text">
        This page places and reads third party cookies on your browser. Click
        here to read more.
      </p>

      <div className="options">
        <button className="accept" onClick={() => setVisible(false)}>
          ACCEPT
        </button>
        <button className="reject" onClick={() => setVisible(false)}>
          REJECT
        </button>
      </div>
    </div>
  )
}
