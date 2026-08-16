function Footer() {
  const year = new Date().getFullYear()

  return (
    <section id="pour-toi" className="closing">
      <div className="container closing__content">
        <p className="section-kicker">un dernier mot</p>
        <h2 className="section-title">Pour toi, Laura</h2>
        <p className="closing__text">
          Merci d’être toi, tout simplement. Merci pour tout ce qu'on a accompli ensemble, merci de m'avoir toujours soutenu 
          et merci tout l’amour que tu donnes sans jamais compter. J’ai
          hâte de vivre encore plein de belles histoires à tes côtés.
        </p>
        <p className="closing__signature">Avec tout mon amour, <br />Je t'aime pour toujours 💗</p>
      </div>

      <footer className="footer">
        <p>
          Fait avec 💗 pour Laura · {year}
        </p>
      </footer>
    </section>
  )
}

export default Footer
