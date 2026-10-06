import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import AboutPanel from '../components/exhibition/AboutPanel.jsx'
import ProjectsPanel from '../components/exhibition/ProjectsPanel.jsx'
import SkillsPanel from '../components/exhibition/SkillsPanel.jsx'
import profile from '../data/profile.js'
import projects from '../data/projects.js'
import TextReveal from '../components/motion/TextReveal.jsx'
import '../styles/exhibition.css'

const tabs = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills & Tools' },
  { id: 'works', label: 'Selected Works' },
]

function Exhibition() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const tabRefs = useRef([])
  const shouldReduceMotion = useReducedMotion()

  const activateTab = (index) => {
    setActiveTab(tabs[index].id)
    tabRefs.current[index]?.focus()
  }

  const handleTabKeyDown = (event, index) => {
    let nextIndex = null

    if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = tabs.length - 1

    if (nextIndex !== null) {
      event.preventDefault()
      activateTab(nextIndex)
    }
  }

  const renderActivePanel = () => {
    if (activeTab === 'about') return <AboutPanel profile={profile} />
    if (activeTab === 'skills') return <SkillsPanel profile={profile} />
    return <ProjectsPanel projects={projects} />
  }

  return (
    <main className="exhibition-page" id="main-content" tabIndex="-1">
      <header className="exhibition-hero container">
        <div>
          <p className="section-kicker">A closer look</p>
          <TextReveal as="h1">
            The <em>Exhibition</em>
          </TextReveal>
        </div>
        <div className="exhibition-hero__intro">
          <p>
            Ruang untuk mengenal profil, proses, perangkat kerja, dan karya pilihan dari
            perspektif yang lebih dekat.
          </p>
          <Link className="motion-link" to="/">← Kembali ke Home</Link>
        </div>
      </header>

      <section className="exhibition-content container" aria-label="Konten Exhibition">
        <div className="exhibition-tabs" role="tablist" aria-label="Bagian Exhibition">
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.id

            return (
              <button
                id={`exhibition-tab-${tab.id}`}
                key={tab.id}
                ref={(element) => {
                  tabRefs.current[index] = element
                }}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`exhibition-panel-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {tab.label}
              </button>
            )
          })}
        </div>

        <motion.div
          key={activeTab}
          className="exhibition-tabpanel"
          id={`exhibition-panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`exhibition-tab-${activeTab}`}
          tabIndex="0"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderActivePanel()}
        </motion.div>
      </section>
    </main>
  )
}

export default Exhibition