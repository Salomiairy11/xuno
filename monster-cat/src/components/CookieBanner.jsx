import { useState } from 'react'
import '../styles/cookieBanner.css'

export default function CookieBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="cookie-banner">
      <p className="cookie-text">
        This page places and reads third party cookies on your browser. Click
        here to read more.
      </p>

      <div className="cookie-actions">
        <button className="btn accept" onClick={() => setVisible(false)}>
          ACCEPT
        </button>
        <button className="btn reject" onClick={() => setVisible(false)}>
          REJECT
        </button>
      </div>
    </div>
  )
}
