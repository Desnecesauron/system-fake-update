import { Link } from 'react-router-dom'
import { SCREENS } from '../screens/registry'
import './Home.css'

export function Home() {
  return (
    <div className="home">
      <header className="home__header">
        <h1 className="home__title">System Fake Update</h1>
        <p className="home__lead">
          Telas de atualização de sistema em tela cheia — prank inofensivo.
          Escolha um sistema, abra em tela cheia e pressione <kbd>Esc</kbd> para
          sair a qualquer momento.
        </p>
      </header>

      <main className="home__grid">
        {SCREENS.map((s) => (
          <Link
            key={s.id}
            to={`/s/${s.id}`}
            className="card"
            style={{ '--card-accent': s.accent } as React.CSSProperties}
          >
            <span className="card__dot" />
            <span className="card__title">{s.title}</span>
            <span className="card__subtitle">{s.subtitle}</span>
          </Link>
        ))}
      </main>

      <footer className="home__footer">
        <p>
          Feito para fins educativos e de diversão. Nenhum dado é coletado e
          nenhuma alteração é feita no dispositivo.
        </p>
      </footer>
    </div>
  )
}
