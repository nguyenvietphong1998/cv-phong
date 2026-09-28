import { Github, Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ContactIcon, ContactLink } from '../types/cv'
import { SectionTitle } from './SectionTitle'

// Ánh xạ kiểu icon trong dữ liệu -> component icon của Lucide
const ICON_MAP: Record<ContactIcon, LucideIcon> = {
  mail: Mail,
  phone: Phone,
  github: Github,
  linkedin: Linkedin,
  globe: Globe,
  'map-pin': MapPin,
}

interface ContactListProps {
  contacts: ContactLink[]
}

/** Danh sách thông tin liên hệ dạng icon + link */
export const ContactList = ({ contacts }: ContactListProps) => (
  <section className="mb-8">
    <SectionTitle icon="contact">Liên hệ</SectionTitle>
    <ul className="space-y-2.5">
      {contacts.map(({ label, value, href, icon }) => {
        const Icon = ICON_MAP[icon]
        return (
          <li key={label} className="flex items-center gap-2.5 text-sm">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-900/60 dark:text-sky-300">
              <Icon size={15} aria-hidden="true" />
            </span>
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="min-w-0 truncate text-slate-700 underline-offset-2 hover:text-sky-600 hover:underline dark:text-slate-300 dark:hover:text-sky-400"
            >
              {value}
            </a>
          </li>
        )
      })}
    </ul>
  </section>
)
