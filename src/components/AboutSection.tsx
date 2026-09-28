import { SectionTitle } from './SectionTitle'

interface AboutSectionProps {
  about: string
}

/** Section giới thiệu bản thân */
export const AboutSection = ({ about }: AboutSectionProps) => (
  <section className="avoid-break mb-10">
    <SectionTitle icon="about">Giới thiệu</SectionTitle>
    {/* text-justify: căn đều cả 2 lề để không bị "thụt thò" mép phải */}
    <p className="text-justify leading-relaxed text-slate-700 dark:text-slate-300">{about}</p>
  </section>
)
