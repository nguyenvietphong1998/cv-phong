import type { Certificate } from '../types/cv'
import { SectionTitle } from './SectionTitle'

interface CertificateListProps {
  certificates: Certificate[]
}

/** Danh sách chứng chỉ / giải thưởng */
export const CertificateList = ({ certificates }: CertificateListProps) => (
  <section>
    <SectionTitle icon="certificates">Chứng chỉ</SectionTitle>
    <ul className="space-y-3 text-sm">
      {certificates.map((cert) => (
        <li key={cert.name} className="flex items-start justify-between gap-3">
          <div>
            <p className="font-medium leading-snug">{cert.name}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{cert.issuer}</p>
          </div>
          <span className="shrink-0 text-xs font-semibold text-sky-600 dark:text-sky-400">{cert.year}</span>
        </li>
      ))}
    </ul>
  </section>
)
