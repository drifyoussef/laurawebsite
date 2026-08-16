import type { MouseEvent } from 'react'
import { useReveal } from '../hooks/useReveal'

// 👉 Modifie librement cette liste avec vos propres souvenirs et raisons !
const SCATTERED_HEARTS = [
  { top: '8%', left: '10%', size: 14, rotate: -18, opacity: 1 },
  { top: '15%', left: '78%', size: 20, rotate: 12, opacity: 1 },
  { top: '42%', left: '88%', size: 12, rotate: -8, opacity: 1 },
  { top: '68%', left: '6%', size: 16, rotate: 22, opacity: 1 },
  { top: '80%', left: '70%', size: 22, rotate: -14, opacity: 1 },
  { top: '85%', left: '30%', size: 11, rotate: 10, opacity: 1 },
  { top: '30%', left: '38%', size: 10, rotate: -20, opacity: 1 },
]

const REASONS = [
  { text: 'Parce que ton sourire illumine ma vie.' },
  { text: 'Parce que tes bras sont l’endroit où je me sens le mieux.' },
  { text: 'Parce que tu me fais rire même dans mes pires journées.' },
  { text: 'Parce que ta voix est si douce et réconfortante.' },
  { text: 'Pour ta patience et ta gentillesse avec tout le monde.' },
  { text: 'Parce que tu es toujours là, dans les bons comme les mauvais jours.' },
  { text: 'Pour tous ces petits moments simples qui deviennent inoubliables avec toi.' },
  { text: 'Parce que tu es exactement toi, et que c’est pour ça que je t’aime.' },
]

function ReasonCard({ text, index }: { text: string; index: number }) {
  const { ref, visible } = useReveal<HTMLLIElement>()

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height

    card.style.setProperty('--rx', `${(0.5 - py) * 32}deg`)
    card.style.setProperty('--ry', `${(px - 0.5) * 32}deg`)
    card.style.setProperty('--mx', `${px * 100}%`)
    card.style.setProperty('--my', `${py * 100}%`)
  }

  function handleMouseLeave(event: MouseEvent<HTMLDivElement>) {
    const card = event.currentTarget
    card.style.setProperty('--rx', '0deg')
    card.style.setProperty('--ry', '0deg')
  }

  return (
    <li
      ref={ref}
      className={`reason-card ${visible ? 'reason-card--visible' : ''}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div
        className="reason-card__tilt"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <span className="reason-card__hearts" aria-hidden="true">
          {SCATTERED_HEARTS.map((heart, i) => (
            <span
              key={i}
              className="reason-card__heart"
              style={{
                top: heart.top,
                left: heart.left,
                fontSize: `${heart.size}px`,
                opacity: heart.opacity,
                transform: `rotate(${heart.rotate}deg)`,
              }}
            >
              ♡
            </span>
          ))}
        </span>
        <p>{text}</p>
      </div>
    </li>
  )
}

function Reasons() {
  return (
    <section id="raisons" className="reasons">
      <div className="container">
        <p className="section-kicker">quelques raisons parmi tant d’autres</p>
        <h2 className="section-title">Pourquoi je t’aime</h2>

        <ul className="reasons__grid">
          {REASONS.map((reason, index) => (
            <ReasonCard key={reason.text} index={index} {...reason} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Reasons
