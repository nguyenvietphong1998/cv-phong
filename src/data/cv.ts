import type { CvData } from '../types/cv'
// Ảnh avatar đặt ngay cạnh file dữ liệu này — Vite tự đóng gói khi build
import avatarAnh from './avata.jpg'

// ============================================================
// FILE DỮ LIỆU TRUNG TÂM ("CSDL") — theo CLAUDE.md mục "Nội dung trang web"
// Bạn CHỈ cần sửa nội dung trong file này để CV là của mình,
// không phải đụng vào bất kỳ component nào.
// ============================================================
export const cvData: CvData = {
  profile: {
    fullName: 'Nguyễn Viết Phong',
    title: 'Lập trình viên Fullstack (Frontend/Backend), DevOps Engineer',
    shortIntro: 'Yêu thích viết code sạch, trải nghiệm người dùng mượt mà.',
    // Ảnh avatar: file `src/data/avata.jpg` (đổi ảnh chỉ cần thay file này, giữ nguyên tên)
    avatarUrl: avatarAnh,
    location: 'Hà Nội, Việt Nam',
    yearsOfExperience: 3,
  },

  about:
    'Tôi là lập trình viên Fullstack (Frontend/Backend), DevOps Engineer với hơn 3 năm kinh nghiệm xây dựng ứng dụng web bằng React và TypeScript, Backend với Python/Django/FastAPI, CSDL dùng PostgreSQL và MongoDB.' +
    'Tôi chú trọng chất lượng mã nguồn, khả năng bảo trì và tối ưu hiệu năng hiển thị. Khả năng deploy ứng dụng lên môi trường production bằng Docker và Kubernetes.' +
    'Ngoài công việc, tôi thích tìm hiểu công nghệ mới, đóng góp mã nguồn mở và chia sẻ kiến thức qua blog kỹ thuật.',

  contacts: [
    { label: 'Email', value: 'nguyenviet.phong1998@icloud.com', href: 'mailto:nguyenviet.phong1998@icloud.com', icon: 'mail' },
    { label: 'Điện thoại', value: '0868 688 472', href: 'tel:+84868688472', icon: 'phone' },
    { label: 'GitHub', value: 'github.com/nguyenvietphong1998', href: 'https://github.com/nguyenvietphong1998', icon: 'github' },
    { label: 'Website', value: 'nguyenvietphong.dev', href: 'https://nguyenvietphong1998.github.io/cv-phong/', icon: 'globe' },
  ],

  // level: 0–100, hiển thị thành thanh kỹ năng
  skills: [
    { name: 'TypeScript', level: 90, group: 'Ngôn ngữ' },
    { name: 'JavaScript (ES6+)', level: 90, group: 'Ngôn ngữ' },
    { name: 'HTML5 / CSS3', level: 85, group: 'Ngôn ngữ' },
    { name: 'ReactJS', level: 90, group: 'Framework & Thư viện' },
    { name: 'Tailwind CSS', level: 80, group: 'Framework & Thư viện' },
    { name: 'Redux Toolkit', level: 75, group: 'Framework & Thư viện' },
    { name: 'Git / GitHub', level: 85, group: 'Công cụ' },
    { name: 'Vite', level: 75, group: 'Công cụ' },
    { name: 'Python', level: 90, group: 'Ngôn ngữ' },
    { name: 'Django', level: 80, group: 'Framework & Thư viện' },
    { name: 'FastAPI', level: 80, group: 'Framework & Thư viện' },
    { name: 'PostgreSQL', level: 85, group: 'CSDL' },
    { name: 'MongoDB', level: 80, group: 'CSDL' },
    { name: 'Docker', level: 75, group: 'Công cụ' },
    { name: 'Kubernetes', level: 70, group: 'Công cụ' },
  ],

  experiences: [
    {
      company: 'Công ty TNHH Phần mềm ABC',
      position: 'Lập trình viên Frontend',
      period: '06/2023 – Nay',
      points: [
        'Phát triển và bảo trì hệ thống quản lý nội bộ bằng React + TypeScript (khoảng 20 màn hình chính).',
        'Tái cấu trúc component, giảm 35% thời gian tải trang đầu nhờ code-splitting và lazy loading.',
        'Phối hợp với đội UX/UI để dựng design system dùng chung bằng Tailwind CSS.',
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    },
    {
      company: 'Startup XYZ',
      position: 'Thực tập sinh / Junior Developer',
      period: '02/2022 – 05/2023',
      points: [
        'Xây dựng landing page và trang bán hàng responsive, tối ưu SEO on-page.',
        'Viết unit test cho các component quan trọng, đạt độ phủ 70%.',
      ],
      technologies: ['React', 'JavaScript', 'SCSS'],
    },
  ],

  educations: [
    {
      school: 'Đại học Bách Khoa Hà Nội',
      degree: 'Cử nhân Công nghệ thông tin',
      period: '2018 – 2022',
      note: 'Tốt nghiệp loại Giỏi, GPA 3.6/4.0',
    },
  ],

  projects: [
    {
      name: 'Ứng dụng quản lý chi tiêu',
      description:
        'Web app ghi thu/chi cá nhân với biểu đồ thống kê, lưu dữ liệu bằng IndexedDB, hoạt động offline (PWA).',
      technologies: ['React', 'TypeScript', 'Recharts', 'PWA'],
      gitUrl: 'https://github.com/nguyenvana/expense-app',
      liveUrl: 'https://expense-app.demo.dev',
    },
    {
      name: 'Trang đọc truyện tranh',
      description:
        'Website hiển thị truyện theo chương với chế độ đọc dọc, tìm kiếm và đánh dấu yêu thích.',
      technologies: ['React', 'Tailwind CSS', 'REST API'],
      gitUrl: 'https://github.com/nguyenvana/comic-reader',
    },
  ],

  certificates: [
    { name: 'TOEIC 850', issuer: 'IIG', year: '2023' },
    { name: 'Meta Front-End Developer Certificate', issuer: 'Coursera', year: '2022' },
  ],
}
