# Hướng dẫn quy tắc cho Claude Code (ReactJS + TypeScript)

## 1. Công nghệ cốt lõi
- **Framework:** ReactJS (Functional Components, Hooks)
- **Ngôn ngữ:** TypeScript (Strict mode, khai báo đầy đủ `interface`/`type`, tránh dùng `any`).
- **Styling:** Tailwind CSS (ưu tiên các class utility sạch sẽ, responsive).
- **Icons:** FontAwesome hoặc Lucide React.

## 2. Quy chuẩn viết code (Coding Standards)
- Chia nhỏ component thành các file riêng biệt trong thư mục `src/components/`.
- Sử dụng cú pháp ES6+ hiện đại (Arrow functions, destructuring props).
- Viết mã sạch, có chú thích ngắn gọn cho các logic phức tạp.
- Đảm bảo không có lỗi TypeScript (red underlines) trước khi hoàn thành task.

## 3. Nội dung trang web
- có 1 file lưu trữ thông tin của cá nhân tôi làm CSDL để hiển thị trang CV của tôi

## 3. Lệnh build & chạy dự án
- Chạy môi trường dev: `npm run dev`
- Build production: `npm run build`