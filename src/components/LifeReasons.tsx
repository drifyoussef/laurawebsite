import type { CSSProperties } from 'react'
import { useReveal } from '../hooks/useReveal'

// 👉 Liste librement modifiable — remplace par des raisons qui parlent vraiment d'elle.
const LIFE_REASONS = [
  { emoji: '☕', text: 'Le café du matin, encore chaud dans tes mains.' },
  { emoji: '🎶', text: 'La musique qui te donne envie de danser seule dans ta chambre.' },
  { emoji: '🌈', text: 'Le premier rayon de soleil après la pluie.' },
  { emoji: '🤗', text: 'Les câlins qui durent un peu trop longtemps.' },
  { emoji: '🍫', text: 'Le goût du chocolat qui fond doucement.' },
  { emoji: '😂', text: 'Les fous rires qui font mal au ventre.' },
  { emoji: '🧣', text: 'Une couverture chaude un jour d’hiver.' },
  { emoji: '🌊', text: 'Le bruit des vagues sur la plage.' },
  { emoji: '📖', text: 'Un bon livre qu’on ne veut plus lâcher.' },
  { emoji: '💌', text: 'Les messages qui font sourire en pleine journée.' },
  { emoji: '🍲', text: 'L’odeur d’un plat qu’on aime, en train de cuire.' },
  { emoji: '🎵', text: 'Les chansons qu’on connaît par cœur.' },
  { emoji: '🌌', text: 'Un ciel étoilé, loin de la ville.' },
  { emoji: '💞', text: 'Le premier café avec quelqu’un qu’on aime.' },
  { emoji: '🎯', text: 'Les projets qu’on n’a pas encore réalisés.' },
  { emoji: '✈️', text: 'Les voyages qu’on n’a pas encore faits.' },
  { emoji: '😄', text: 'Ton prochain fou rire, qui arrivera bientôt.' },
  { emoji: '🏆', text: 'Les petites victoires du quotidien.' },
  { emoji: '🛁', text: 'La chaleur d’un bain chaud après une longue journée.' },
  { emoji: '🫂', text: 'Les vrais amis qui restent, quoi qu’il arrive.' },
  { emoji: '🐾', text: 'Les câlins d’un animal qui t’aime sans condition.' },
  { emoji: '🌅', text: 'Le silence apaisant d’un dimanche matin.' },
  { emoji: '🎁', text: 'Les surprises qu’on ne voit jamais venir.' },
  { emoji: '🍽️', text: 'Un plat préféré qu’on partage à deux.' },
  { emoji: '🍂', text: 'Les saisons qui changent, encore et encore.' },
  { emoji: '☀️', text: 'La sensation du soleil sur la peau.' },
  { emoji: '😊', text: 'Un souvenir qui fait sourire tout seul.' },
  { emoji: '🌱', text: 'La personne que tu deviens, jour après jour.' },
  { emoji: '❤️', text: 'Les gens qui t’aiment, plus que tu ne le crois.' },
  { emoji: '🎉', text: 'Une bonne nouvelle qu’on n’attendait pas.' },
  { emoji: '🏡', text: 'Les fêtes en famille qui réchauffent le cœur.' },
  { emoji: '😴', text: 'Le plaisir simple de bien dormir.' },
  { emoji: '💭', text: 'Les rêves qu’on n’a pas encore réalisés.' },
  { emoji: '🎸', text: 'La musique live, ressentie dans tout le corps.' },
  { emoji: '👯', text: 'Un fou rire partagé avec une amie proche.' },
  { emoji: '🗣️', text: 'Les histoires qu’on aime raconter encore et encore.' },
  { emoji: '🍑', text: 'Le goût d’un fruit bien mûr en été.' },
  { emoji: '📱', text: 'Un texto « je pense à toi » sans raison.' },
  { emoji: '💪', text: 'La fierté d’avoir surmonté une journée difficile.' },
  { emoji: '🛏️', text: 'Les câlins du matin, encore ensommeillée.' },
  { emoji: '🎧', text: 'Une chanson qui donne des frissons.' },
  { emoji: '🗺️', text: 'Le plaisir de découvrir un nouvel endroit.' },
  { emoji: '🎂', text: 'Les fêtes d’anniversaire encore à venir.' },
  { emoji: '🍳', text: 'Un bon repas préparé avec amour.' },
  { emoji: '🫶', text: 'Les mains qu’on aime tenir.' },
  { emoji: '💖', text: 'La douceur d’un « je t’aime » sincère.' },
  { emoji: '👨‍👩‍👧', text: 'Les rires qu’on partage avec sa famille.' },
  { emoji: '🚶‍♀️', text: 'Une balade sans but précis.' },
  { emoji: '🩹', text: 'Le plaisir de se sentir mieux après un moment difficile.' },
  { emoji: '🔁', text: 'Les petites habitudes qui rassurent.' },
  { emoji: '🎬', text: 'Un nouveau film qu’on a hâte de voir.' },
  { emoji: '👂', text: 'Les gens qui t’écoutent vraiment.' },
  { emoji: '🦁', text: 'La force que tu as déjà montrée jusqu’ici.' },
  { emoji: '💫', text: 'Un câlin qui arrive juste au bon moment.' },
  { emoji: '🌇', text: 'Les couchers de soleil qu’on n’oublie pas.' },
  { emoji: '🛌', text: 'Le plaisir simple d’avoir chaud sous une couette.' },
  { emoji: '🌍', text: 'Les personnes que tu n’as pas encore rencontrées.' },
  { emoji: '📞', text: 'Un fou rire au téléphone tard le soir.' },
  { emoji: '🍰', text: 'La joie simple d’un bon dessert.' },
  { emoji: '🎈', text: 'Les moments où tout devient plus léger.' },
  { emoji: '✨', text: 'Le plaisir de réussir quelque chose de nouveau.' },
  { emoji: '📲', text: 'Les amis qui répondent toujours présents.' },
  { emoji: '🧸', text: 'Un souvenir d’enfance qui rassure encore.' },
  { emoji: '🚿', text: 'La sensation apaisante d’une douche chaude.' },
  { emoji: '🤍', text: 'Les câlins qui disent tout sans un mot.' },
  { emoji: '🥹', text: 'Un « je suis fière de toi » sincère.' },
  { emoji: '🎀', text: 'Les petites attentions qu’on te fait sans prévenir.' },
  { emoji: '🤪', text: 'Le plaisir de rire de tes propres bêtises.' },
  { emoji: '✅', text: 'La satisfaction de rayer une tâche de sa liste.' },
  { emoji: '🎼', text: 'La musique qui te fait fermer les yeux.' },
  { emoji: '🍵', text: 'Un bon thé, un bon livre, rien d’autre.' },
  { emoji: '🙌', text: 'Les gens qui croient en toi plus que tu ne crois en toi-même.' },
  { emoji: '🛋️', text: 'Un dimanche sans rien faire, juste se reposer.' },
  { emoji: '🤭', text: 'Les histoires drôles qu’on se raconte en boucle.' },
  { emoji: '🐱', text: 'Le ronron d’un chat posé sur les jambes.' },
  { emoji: '🐻', text: 'Les câlins qui arrivent sans qu’on les demande.' },
  { emoji: '🌸', text: 'Un nouveau printemps, toujours plein de promesses.' },
  { emoji: '🦋', text: 'Les petites choses qui te ressemblent tellement.' },
  { emoji: '🧩', text: 'Le plaisir de résoudre un petit casse-tête du quotidien.' },
  { emoji: '💛', text: 'Les gens qui t’aiment telle que tu es, sans rien changer.' },
  { emoji: '😆', text: 'Un fou rire qui efface une mauvaise journée.' },
  { emoji: '🧺', text: 'L’odeur du linge propre tout juste sorti du sèche-linge.' },
  { emoji: '🍦', text: 'Une glace qui fond un peu trop vite en été.' },
  { emoji: '🕊️', text: 'Les moments de calme après la tempête.' },
  { emoji: '💕', text: 'Un « tu me manques » sincère.' },
  { emoji: '🔥', text: 'Les petites forces que tu trouves chaque jour.' },
  { emoji: '🌧️', text: 'Le bruit de la pluie sur la fenêtre, bien au chaud à l’intérieur.' },
  { emoji: '🔑', text: 'Les amis qui te connaissent par cœur.' },
  { emoji: '🏠', text: 'Le plaisir de se sentir chez soi quelque part.' },
  { emoji: '🎢', text: 'Le frisson avant de monter dans des montagnes russes.' },
  { emoji: '🥂', text: 'Refaire le monde autour d’un verre, entre amis.' },
  { emoji: '🌼', text: 'Les petites joies qu’on oublie de remarquer.' },
  { emoji: '💓', text: 'Le plaisir simple d’être aimée, tout simplement.' },
  { emoji: '🌤️', text: 'Les jours meilleurs qui arrivent, même quand on n’y croit pas.' },
  { emoji: '🤝', text: 'Les gens prêts à t’aider, si tu le leur demandes.' },
  { emoji: '🛤️', text: 'Le chemin que tu as déjà parcouru, plus long que tu ne le penses.' },
  { emoji: '🎊', text: 'Les belles surprises que la vie te réserve encore.' },
  { emoji: '💗', text: 'Toutes les personnes qui seraient dévastées de te perdre.' },
  { emoji: '💘', text: 'Moi, qui t’aime plus que les mots ne peuvent le dire.' },
  { emoji: '🌟', text: 'Toi. Simplement toi, et tout ce que tu es encore appelée à vivre.' },
]

const PARTICLE_OFFSETS = [8, 28, 50, 72, 90]

function LifeReasons() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="raisons-de-vivre" className="life-reasons">
      <div className="container">
        <p className="section-kicker">pour les jours où c’est plus dur</p>
        <h2 className="section-title">100 raisons que tu as de vivre</h2>
        <p className="life-reasons__intro">
          Il y en a beaucoup plus que ça. En voici cent, pour les jours où tu
          as besoin qu’on te les rappelle.
        </p>

        <div ref={ref} className={`life-grid ${visible ? 'life-grid--visible' : ''}`}>
          {LIFE_REASONS.map((reason, index) => (
            <div
              key={reason.text}
              className="life-chip"
              style={{ '--reveal-delay': `${Math.min(index, 40) * 25}ms` } as CSSProperties}
            >
              <span className="life-chip__emoji" aria-hidden="true">
                {reason.emoji}
              </span>
              <p>{reason.text}</p>

              <span className="life-chip__particles" aria-hidden="true">
                {PARTICLE_OFFSETS.map((left, i) => (
                  <span
                    key={i}
                    className="life-chip__particle"
                    style={{
                      left: `${left}%`,
                      animationDelay: `${i * 0.35}s`,
                      fontSize: `${12 + (i % 3) * 4}px`,
                    }}
                  >
                    {reason.emoji}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LifeReasons
