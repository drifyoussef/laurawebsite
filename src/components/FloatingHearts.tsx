const HEARTS = Array.from({ length: 12 }, (_, i) => i)

function FloatingHearts() {
  return (
    <div className="floating-hearts" aria-hidden="true">
      {HEARTS.map((i) => (
        <span
          key={i}
          className="floating-heart"
          style={{
            left: `${(i * 8.3) % 100}%`,
            animationDuration: `${10 + (i % 5) * 3}s`,
            animationDelay: `${-(i * 1.7)}s`,
            fontSize: `${14 + (i % 4) * 8}px`,
          }}
        >
          💗
        </span>
      ))}
    </div>
  )
}

export default FloatingHearts
