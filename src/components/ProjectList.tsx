import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '../types/cv'
import { SectionTitle } from './SectionTitle'

interface ProjectListProps {
  projects: Project[]
}

/** Lưới thẻ dự án, responsive 1 cột (mobile) / 2 cột (desktop) */
export const ProjectList = ({ projects }: ProjectListProps) => (
  <section>
    <SectionTitle icon="projects">Dự án</SectionTitle>
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.name}
          className="avoid-break flex flex-col rounded-xl border border-slate-200 p-4 transition-shadow hover:shadow-md dark:border-slate-700"
        >
          <h3 className="text-base font-bold">{project.name}</h3>
          <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {project.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="print-exact rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-sky-700 dark:bg-sky-900/40 dark:text-sky-300"
              >
                {tech}
              </span>
            ))}
          </div>
          {(project.gitUrl || project.liveUrl) && (
            <div className="no-print mt-3 flex gap-4 text-sm font-medium text-sky-600 dark:text-sky-400">
              {project.gitUrl && (
                <a href={project.gitUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                  <Github size={14} aria-hidden="true" /> Mã nguồn
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                  <ExternalLink size={14} aria-hidden="true" /> Xem trực tiếp
                </a>
              )}
            </div>
          )}
        </article>
      ))}
    </div>
  </section>
)
