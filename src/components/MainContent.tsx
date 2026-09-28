import type { CvData } from '../types/cv'
import { AboutSection } from './AboutSection'
import { EducationList } from './EducationList'
import { ExperienceTimeline } from './ExperienceTimeline'
import { ProjectList } from './ProjectList'

interface MainContentProps {
  data: CvData
}

/** Cột phải của CV: giới thiệu, kinh nghiệm, học vấn, dự án */
export const MainContent = ({ data }: MainContentProps) => (
  <main className="p-6 md:p-8">
    <AboutSection about={data.about} />
    <ExperienceTimeline experiences={data.experiences} />
    <EducationList educations={data.educations} />
    <ProjectList projects={data.projects} />
  </main>
)
