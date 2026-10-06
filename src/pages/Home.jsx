import ExhibitionCTA from '../components/ExhibitionCTA.jsx'
import Hero from '../components/Hero.jsx'
import Journey from '../components/Journey.jsx'
import experiences from '../data/experience.js'
import profile from '../data/profile.js'
import '../styles/home.css'

function Home() {
  return (
    <main className="home-page" id="main-content" tabIndex="-1">
      <Hero profile={profile} />
      <ExhibitionCTA />
      <Journey experiences={experiences} />
    </main>
  )
}

export default Home