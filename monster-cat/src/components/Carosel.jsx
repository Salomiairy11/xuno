import '../styles/carosel.css'
import afterDark from '../assets/AfterDark.png'
import beforeYouGo from '../assets/beforeYouGo.png'
import walkingAway from '../assets/walkingAway.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
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

function SampleNextArrow(props) {
  const { className, style, onClick, currentSlide, slideCount } = props
  const isLast = currentSlide === slideCount - 1
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '72px',
        height: '72px',
        borderRadius: '50%',
        background: 'rgba(0,0,0,0.35)',
        opacity: isLast ? 0.5 : 1,
        pointerEvents: 'auto',
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick, currentSlide } = props
  const isFirst = currentSlide === 0
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '72px',
        height: '72px',
        borderRadius: '50%',
        background: 'rgba(0,0,0,0.35)',
        opacity: isFirst ? 0.5 : 1,
        pointerEvents: 'auto',
      }}
      onClick={onClick}
    />
  )
}
export default function Carosel() {

  const [active, setActive] = useState(0)

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: 'ease-out',
    arrows: true,
    beforeChange: (oldIndex, newIndex) => setActive(newIndex),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <div className="album-list">
      <Slider {...settings}>
        {albums.map((album, idx) => (
          <section
            key={album.id}
            className={`album-section ${idx === active ? 'active-slide' : ''}`}
            style={{
              height: '100vh'
            }}
          >
            <div
              className="album-bg"
              style={{ backgroundImage: `url(${album.image})` }}
            />
            <div className="album-header">
              {albums.map((alb, i) => (
                <div
                  key={alb.id}
                  className={`album-header-item ${
                    i === active ? 'active' : ''
                  }`}
                >
                  <div className="header-progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: i === active ? '100%' : '0%',
                        transition:
                          i === active
                            ? `width ${settings.autoplaySpeed}ms linear`
                            : 'none',
                      }}
                    />
                  </div>
                  <span className="header-title">{alb.title}</span>
                  <span className="header-artist">{alb.artist}</span>
                </div>
              ))}
            </div>

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
      </Slider>
    </div>
  )
}
