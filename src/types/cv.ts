// Định nghĩa toàn bộ kiểu dữ liệu cho trang CV (theo quy tắc: TS strict, không dùng `any`)

/** Các loại icon liên hệ, được ánh xạ sang icon của Lucide trong ContactList */
export type ContactIcon = 'mail' | 'phone' | 'github' | 'linkedin' | 'globe' | 'map-pin'

/** Thông tin cá nhân cơ bản, hiển thị trên đầu sidebar */
export interface Profile {
  fullName: string
  title: string // Chức danh, vd: "Lập trình viên ReactJS"
  shortIntro: string // Câu giới thiệu ngắn dưới tên
  avatarUrl: string // Để trống ("") sẽ tự sinh avatar bằng chữ cái đầu
  location: string
  yearsOfExperience: number
}

/** Một dòng thông tin liên hệ (email, SĐT, GitHub...) */
export interface ContactLink {
  label: string // Nhãn hiển thị, vd: "Email"
  value: string // Giá trị hiển thị, vd: "a@example.com"
  href: string // Link bấm vào (mailto:, tel:, hoặc URL)
  icon: ContactIcon
}

/** Một kỹ năng; `level` từ 0–100 dùng để vẽ thanh phần trăm */
export interface Skill {
  name: string
  level: number
  group: string // Nhóm kỹ năng, vd: "Ngôn ngữ", "Framework & Thư viện"
}

/** Một kinh nghiệm làm việc, hiển thị theo dạng timeline */
export interface Experience {
  company: string
  position: string
  period: string // Vd: "01/2022 – Nay"
  points: string[] // Các gạch đầu dòng mô tả công việc/thành tựu
  technologies: string[]
}

/** Một mục học vấn */
export interface Education {
  school: string
  degree: string // Vd: "Cử nhân Công nghệ thông tin"
  period: string
  note?: string // Ghi chú thêm (GPA, xếp loại...)
}

/** Một dự án đã làm */
export interface Project {
  name: string
  description: string
  technologies: string[]
  gitUrl?: string
  liveUrl?: string
}

/** Chứng chỉ / giải thưởng */
export interface Certificate {
  name: string
  issuer: string
  year: string
}

/** Toàn bộ "CSDL" CV — component chỉ đọc từ cấu trúc này */
export interface CvData {
  profile: Profile
  about: string // Đoạn giới thiệu bản thân (main content)
  contacts: ContactLink[]
  skills: Skill[]
  experiences: Experience[]
  educations: Education[]
  projects: Project[]
  certificates: Certificate[]
}
