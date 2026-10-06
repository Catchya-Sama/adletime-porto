import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import TextReveal from '../motion/TextReveal.jsx'

function ProjectMedia({ project }) {
  if (project.thumbnail) {
    return <img src={project.thumbnail} alt={project.alt} />
  }

  return (
    <div className="project-detail__media-placeholder" role="img" aria-label={project.alt}>
      <span>Media placeholder</span>
      <small>Thumbnail atau video belum tersedia</small>
    </div>
  )
}

function ProjectDetail({ project, detailRef, shouldReduceMotion }) {
  if (!project) {
    return (
      <motion.div
        className="project-detail project-detail--empty"
        ref={detailRef}
        tabIndex="-1"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        }
      >
        <p className="section-kicker">Project detail</p>
        <h3>Pilih sebuah karya dari daftar.</h3>
        <p>
          Detail media, peran, konteks, tools, dan tautan karya akan ditampilkan di area
          ini.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.article
      key={project.id}
      className="project-detail"
      ref={detailRef}
      tabIndex="-1"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
      }
    >
      <ProjectMedia project={project} />
      <div className="project-detail__heading">
        <div>
          <p className="project-detail__category">{project.category}</p>
          <TextReveal as="h3">{project.title}</TextReveal>
        </div>
        {project.isPlaceholder && <span className="project-detail__badge">Bukan karya pemilik</span>}
      </div>
      <dl className="project-detail__meta">
        <div>
          <dt>Peran</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>Tahun</dt>
          <dd className={project.year ? undefined : 'exhibition-placeholder'}>
            {project.year ?? 'Belum diisi'}
          </dd>
        </div>
      </dl>
      <p className="project-detail__description">{project.description}</p>
      <div className="project-detail__tools">
        <strong>Tools</strong>
        <p className={project.tools.length ? undefined : 'exhibition-placeholder'}>
          {project.tools.length ? project.tools.join(', ') : 'Belum diisi'}
        </p>
      </div>
      {(project.videoUrl || project.projectUrl) && (
        <div className="project-detail__links">
          {project.videoUrl && (
            <a href={project.videoUrl} target="_blank" rel="noreferrer">
              Tonton video
            </a>
          )}
          {project.projectUrl && (
            <a href={project.projectUrl} target="_blank" rel="noreferrer">
              Buka proyek
            </a>
          )}
        </div>
      )}
    </motion.article>
  )
}

function ProjectsPanel({ projects }) {
  const [selectedProjectId, setSelectedProjectId] = useState(null)
  const detailRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const selectedProject =
    projects.find((project) => project.id === selectedProjectId) ?? null

  useEffect(() => {
    if (!selectedProjectId || !window.matchMedia('(max-width: 47.99rem)').matches) return
    detailRef.current?.focus({ preventScroll: true })
    detailRef.current?.scrollIntoView({ block: 'start', behavior: 'auto' })
  }, [selectedProjectId])

  if (!projects.length) {
    return (
      <div className="exhibition-empty-state">
        <p className="section-kicker">Selected works</p>
        <h2>Belum ada karya untuk ditampilkan.</h2>
        <p>Karya akan ditambahkan setelah media dan informasinya dikonfirmasi.</p>
      </div>
    )
  }

  return (
    <div className="projects-panel">
      <div className="project-list">
        <div className="project-list__heading">
          <p className="section-kicker">Selected works</p>
          <p>Pilih judul untuk melihat detail.</p>
        </div>
        <ol>
          {projects.map((project, index) => {
            const isSelected = project.id === selectedProjectId

            return (
              <li key={project.id}>
                <button
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedProjectId(project.id)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{project.title}</strong>
                  <small>{project.category}</small>
                  <span aria-hidden="true">{isSelected ? '●' : '↗'}</span>
                </button>
              </li>
            )
          })}
        </ol>
      </div>

      <ProjectDetail
        key={selectedProjectId ?? 'empty'}
        project={selectedProject}
        detailRef={detailRef}
        shouldReduceMotion={shouldReduceMotion}
      />
    </div>
  )
}

export default ProjectsPanel