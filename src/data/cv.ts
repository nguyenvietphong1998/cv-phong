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
    'Tôi là lập trình viên Fullstack (Frontend/Backend), AI Engineer, DevOps Engineer với hơn 3 năm kinh nghiệm xây dựng ứng dụng web bằng React và TypeScript, Backend với Python/Django/FastAPI, CSDL dùng PostgreSQL và MongoDB.' +
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
    { name: 'HTML5 / CSS3', level: 90, group: 'Ngôn ngữ' },
    { name: 'ReactJS', level: 90, group: 'Framework & Thư viện' },
    { name: 'Tailwind CSS', level: 80, group: 'Framework & Thư viện' },
    { name: 'Redux Toolkit', level: 75, group: 'Framework & Thư viện' },
    { name: 'Git / GitHub', level: 85, group: 'Công cụ' },
    { name: 'Vite', level: 75, group: 'Công cụ' },
    { name: 'Python', level: 95, group: 'Ngôn ngữ' },
    { name: 'Django', level: 80, group: 'Framework & Thư viện' },
    { name: 'FastAPI', level: 80, group: 'Framework & Thư viện' },
    { name: 'PostgreSQL', level: 85, group: 'CSDL' },
    { name: 'MongoDB', level: 90, group: 'CSDL' },
    { name: 'Docker', level: 90, group: 'Công cụ' },
    { name: 'Kubernetes', level: 75, group: 'Công cụ' },
  ],

  experiences: [
    {
      company: 'Công ty F19',
      position: 'AI Engineer',
      period: '03/2022 – 02/2023',
      points: [
        'Phát triển hệ thống AI về nhận diện khuôn mặt, nhận diện biển số xe, OCR, phân loại ảnh, trích xuất thông tin từ ảnh.',
        'Triển khai các mô hình AI lên môi trường production bằng Docker và Triton Server.',
      ],
      technologies: ['Python', 'Docker', 'Triton Server', 'PaddleOCR', 'OpenCV', 'PyTorch', 'TensorFlow', 'Keras'],
    },
    {
      company: 'EDABK LAB / ĐH Bách Khoa Hà Nội',
      position: 'Thành viên nhóm phát triển AI',
      period: '06/2029 – 05/2023',
      points: [
        'Xây dựng hệ thống AI hỗ trợ người khiếm thị trên Jetson Nano (NVIDIA) mô tả hình ảnh, nhận diện gương mặt',
        'Xây dựng hệ thống phát hiện và tracking đối tượng.',
        'Xây dựng hệ thống nhận diện biển số xe, nhận diện chữ viết tay, OCR.'
      ],
      technologies: ['Python', 'Docker', 'Triton Server', 'OpenCV', 'PyTorch', 'TensorFlow', 'Keras'],
    },
  ],

  educations: [
    {
      school: 'Đại học Bách Khoa Hà Nội',
      degree: 'Kỹ sư Công nghệ Diện tử - Viễn thông',
      period: '2018 – 2023',
      note: 'Tốt nghiệp loại Xuất sắc, GPA 3.6/4.0. Học bổng khuyến khích học tập 2 kỳ',

    },
  ],

  projects: [
    {
      name: 'LAN-Monitor',
      description:
        'Hệ thống giám sát tài nguyên và dịch vụ của ~200 máy tính trong mạng LAN nội bộ. Prometheus thu thập số liệu, Grafana vẽ biểu đồ; Portal tự viết quản lý tài khoản, máy tính, dịch vụ, tự sinh luật cảnh báo và phát cảnh báo realtime ra web (WebSocket) và loa (Piper TTS tiếng Việt, chạy offline).',
      technologies: [
        'React',
        'TypeScript',
        'Ant Design',
        'FastAPI',
        'SQLAlchemy',
        'PostgreSQL',
        'Redis',
        'Socket.IO',
        'Prometheus',
        'Grafana',
        'Docker Compose',
        'Ansible',
      ],
      gitUrl: 'https://github.com/nguyenvietphong1998/LAN-Monitor'
    },
    {
      name: 'WritingIelts',
      description:
        'Website luyện IELTS Writing (Task 1, Task 2) với giao diện mô phỏng phòng thi. AI chấm theo 4 tiêu chí IELTS, tô sáng lỗi kèm gợi ý sửa và giải thích tiếng Việt, viết lại bài ở band cao hơn; có thi thử, sổ tay lỗi & từ vựng, theo dõi tiến bộ, tài khoản Free/Premium và thanh toán MoMo.',
      technologies: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'TanStack Query',
        'Zustand',
        'FastAPI',
        'MongoDB',
        'Redis',
        'ARQ',
        'Gemini API',
        'Docker Compose',
      ],
      gitUrl: 'https://github.com/nguyenvietphong1998/WritingIelts'
    },
    {
      name: 'Các dự án tại Bộ Quốc phòng (BQP)',
      description: 'Tham gia xây dựng và hoàn thành 4 dự án phần mềm tại Bộ Quốc phòng.',
      technologies: [
        'ReactJS',
        'HTML',
        'Django',
        'PostgreSQL',
        'PostGIS',
        'MongoDB',
        'SQL',
        'tus-server',
        'Nginx',
        'Docker',
      ],
    },
  ],

  certificates: [
    { name: 'IELTS 4.5', issuer: 'British Council', year: '2026' },
    { name: 'CCNP', issuer: 'BKACAD', year: '2026' },
  ],
}
