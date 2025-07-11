# 🇻🇳 VN Location API - Danh sách Tỉnh/Thành phố mới sau sáp nhập (2025)

> Một RESTful API cung cấp dữ liệu địa lý hành chính mới nhất của Việt Nam sau khi sáp nhập các đơn vị hành chính (2024–2025).
> 📦 Xây dựng bằng **Node.js**, **TypeScript**, và **Express.js**

---

## 🚀 Tính năng

* ✅ Cung cấp danh sách tỉnh/thành phố sau sáp nhập
* ✅ Lấy danh sách xã/phường/đặc khu theo tỉnh/thành phố
* ✅ Dữ liệu cập nhật từ **Nghị quyết Quốc hội 2024–2025**
* ✅ CORS được bật sẵn, phản hồi định dạng chuẩn JSON

---

## 🧰 Công nghệ sử dụng

* [Node.js](https://nodejs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Express.js](https://expressjs.com/)
* [ts-node-dev](https://github.com/wclr/ts-node-dev) – hỗ trợ chạy server trong môi trường phát triển

---

## 📦 Cài đặt và khởi chạy

### 1. Clone dự án

```bash
git clone https://github.com/conghoa004/VNLocationAPI.git
cd VNLocationAPI
npm install
```

### 2. Khởi chạy server

```bash
npm run dev
```

Sau khi khởi chạy, API sẵn sàng phục vụ tại `http://localhost:3000`

---

## 📰 Tuyến API

### 1. Lấy danh sách tỉnh/thành phố

```
GET /api/province
```

**Phản hồi mẫu:**

```json
[
  {
    "id": "01",
    "name": "Thành phố Hà Nội"
  },
  {
    "id": "02",
    "name": "Tỉnh Lào Cai"
  }
]
```

---

### 2. Lấy danh sách xã/phường theo ID tỉnh/thành phố

```
GET /api/ward?id={province_id}
```

**Ví dụ:**

```
GET /api/ward?id=02
```

**Phản hồi mẫu:**

```json
[
  {
    "name": "Phường Lào Cai"
  },
  {
    "name": "Xã Cam Đường"
  }
]
```

---

## 📄 Giấy phép

Phát hành theo [MIT License](LICENSE).
