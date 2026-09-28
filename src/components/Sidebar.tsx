import type { CvData } from '../types/cv'
import { AvatarCard } from './AvatarCard'
import { CertificateList } from './CertificateList'
import { ContactList } from './ContactList'
import { SkillList } from './SkillList'

interface SidebarProps {
  data: CvData
}

/** Cột trái của CV: thông tin cá nhân, liên hệ, kỹ năng, chứng chỉ */
export const Sidebar = ({ data }: SidebarProps) => (
  <aside className="border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/50 md:border-r md:p-8">
    <AvatarCard profile={data.profile} />
    <ContactList contacts={data.contacts} />
    <SkillList skills={data.skills} />
    <CertificateList certificates={data.certificates} />
  </aside>
)
