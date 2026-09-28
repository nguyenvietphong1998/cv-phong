# 📄 CV Online — Nguyễn Viết Phong

Trang CV cá nhân dựng bằng **ReactJS + TypeScript + Tailwind CSS**, deploy tự động lên **GitHub Pages** qua GitHub Actions.

> Xem trực tiếp: https://nguyenvietphong1998.github.io/cv-phong/

## ✨ Tính năng

- 🗂️ **Bố cục 2 cột** kiểu CV truyền thống: sidebar (avatar, liên hệ, kỹ năng, chứng chỉ) + nội dung chính (giới thiệu, kinh nghiệm, học vấn, dự án)
- 🌗 **Dark / Light mode** — lưu lựa chọn bằng `localStorage`, mặc định theo hệ điều hành
- 🖨️ **Nút In / Xuất PDF** — CSS in ấn tối ưu: ẩn thanh công cụ, giữ 2 cột, không cắt đôi mục giữa 2 trang
- 📱 **Responsive** — mobile tự chuyển 1 cột
- 🧠 **Một file dữ liệu duy nhất** — thay đổi toàn bộ nội dung CV chỉ bằng cách sửa `src/data/cv.ts`, không đụng đến component

## 🚀 Chạy dự án

```bash
npm install       # cài dependencies
npm run dev       # môi trường dev -> http://localhost:5173
npm run build     # build production ra thư mục dist/
npm run preview   # xem thử bản build
```

## 🛠️ Công nghệ

| Công nghệ | Vai trò |
|---|---|
| [Vite 7](https://vite.dev) | Build tool |
| [React 19](https://react.dev) + TypeScript (strict) | UI, không dùng `any` |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling utility-first |
| [Lucide React](https://lucide.dev) | Icon bộ icon |

## 📁 Cấu trúc thư mục

```
src/
├── data/cv.ts          # ⭐ "CSDL" — sửa nội dung CV tại đây
├── types/cv.ts         # Interface định nghĩa cấu trúc dữ liệu
├── hooks/useTheme.ts   # Dark/light mode
├── components/         # 13 component tách riêng (Sidebar, TopBar, SkillList...)
├── App.tsx             # Bố cục 2 cột
└── index.css           # Tailwind + CSS in ấn (@media print)
```

## 📝 Tùy biến nhanh

1. **Sửa thông tin:** mở `src/data/cv.ts`, cập nhật các mục `profile`, `contacts`, `skills`, `experiences`, `educations`, `projects`, `certificates`.
2. **Đổi ảnh avatar:** thay file `src/data/avata.jpg` bằng ảnh khác (giữ nguyên tên file), hoặc đặt `avatarUrl: ''` để tự hiện chữ cái đầu tên.
3. **Mọi lần push lên nhánh `main`** sẽ tự động build & deploy lại trang (xem `.github/workflows/deploy.yml`).

## ☁️ Deploy

Trang được host trên **GitHub Pages** với nguồn build là GitHub Actions:

1. Push code lên nhánh `main`
2. Workflow [`deploy.yml`](.github/workflows/deploy.yml) chạy: `npm ci → npm run build → upload dist/ → deploy Pages`
3. Thành phẩm tại: https://nguyenvietphong1998.github.io/cv-phong/
