import '../styles/carosel.css'
import afterDark from '../assets/AfterDark.png'
import beforeYouGo from '../assets/beforeYouGo.png'
import walkingAway from '../assets/walkingAway.png'
import { useState } from 'react'

const albums = [
  {
    id: 0,
    title: 'WALKING AWAY',
    artist: 'DOKHO X RA5IM X...',
    image: walkingAway,
    date: 'Releases November 25, 2025',
    category: 'Silk',
    color: 'rgb(246, 142, 47)',
  },
  {
    id: 1,
    title: 'AFTER DARK',
    artist: 'RAMESES B & VEELA',
    image: afterDark,
    date: 'Released November 24, 2025',
    category: 'Uncaged',
    color: 'rgb(154, 143, 246)',
  },
  {
    id: 2,
    title: 'BEFORE I GO',
    artist: 'TRIVECTA FEAT. VANRU',
    image: beforeYouGo,
    date: 'Released November 20, 2025',
    category: 'Instinct',
    color: 'rgb(80, 165, 132)',
  },
]

export default function Carosel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  const transitionDurationMs = 300

  const handleNext = () => {
    if (isSliding) return
    setIsSliding(true)
    setCurrentIndex((index) => (index === albums.length - 1 ? 0 : index + 1))
    setTimeout(() => setIsSliding(false), transitionDurationMs)
  }

  const handlePrev = () => {
    if (isSliding) return
    setIsSliding(true)
    setCurrentIndex((index) => (index === 0 ? albums.length - 1 : index - 1))
    setTimeout(() => setIsSliding(false), transitionDurationMs)
  }

  return (
    <div className="album-list">
      <div
        className="track"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {albums.map((album) => (
          <section
            key={album.id}
            className="album-section"
            style={{ backgroundImage: `url(${album.image})` }}
          >
            <div className="album-container">
              <img
                src={album.image}
                className="album-foreground"
                alt={album.title}
              />

              <div className="album-meta">
                <span className="category" style={{ color: album.color }}>
                  {album.category}
                </span>
                <span className="date">-{album.date}</span>
              </div>

              <div className="album-info">
                <h2 className="album-title">{album.title}</h2>
                <h3 className="album-artist">{album.artist}</h3>

                <div className="buttons">
                  <button
                    className="view-btn"
                    style={{ '--btn-color': album.color }}
                  >
                    VIEW RELEASE
                  </button>
                  <button className="listen-btn">LISTEN ON PLAYER</button>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <button
        className="nav-btn prev-btn"
        onClick={handlePrev}
      >
        {'<'}
      </button>

      <button
        className="nav-btn next-btn"
        onClick={handleNext}
      >
        {'>'}
      </button>
    </div>
  )
}
