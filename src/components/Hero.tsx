import FloatingHearts from './FloatingHearts'

function Hero() {

  const helloHour = new Date().getHours() < 19 ? 'Bonjour' : 'Bonsoir'


  return (
    <section id="accueil" className="hero">
      <FloatingHearts />
      <div className="container hero__content">
        <p className="hero__kicker">pour la plus belle</p>
        <h1 className="hero__title">{helloHour} ma Laura 💗</h1>
        <p className="hero__subtitle">
          Ce petit site n’a qu’un seul but : te rappeler à quel point je t'aime, tous les jours, sans exception.
        </p>
        <a href="#raisons" className="hero__cta">
          Pourquoi je t'aime ? <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}

export default Hero
