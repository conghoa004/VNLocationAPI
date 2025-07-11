# VN Location API - Provinces & Cities of Vietnam After 2025 Mergers

> A RESTful API providing the latest administrative geographic data of Vietnam after the 2024–2025 administrative unit mergers.  
> 📦 Built with **Node.js**, **TypeScript**, and **Express.js**

---

## 🚀 Features

- ✅ Provide the updated list of provinces/cities after the 2024–2025 merger
- ✅ Get wards/communes/special zones by province ID
- ✅ Data updated based on **Vietnam National Assembly Resolutions 2024–2025**
- ✅ CORS enabled by default, JSON response format

---

## 🧰 Technologies Used

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express.js](https://expressjs.com/)
- [ts-node-dev](https://github.com/wclr/ts-node-dev) – supports hot-reloading during development

---

## 📦 Installation & Running

### 1. Clone the project

```bash
git clone https://github.com/conghoa004/VNLocationAPI.git
cd VNLocationAPI
npm install
```

### 2. Start the server

```bash
npm run dev
```

After starting, the API will be available at `http://localhost:3000`

---

## 📰 API Endpoints

### 1. Get list of provinces/cities

```
GET /api/province
```

**Sample Response:**

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

### 2. Get wards/communes by province ID

```
GET /api/ward?id={province_id}
```

**Example:**

```
GET /api/ward?id=02
```

**Sample Response:**

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

## 🔗 Deployment

Official website: 👉 https://vnlocationapi.onrender.com

---

## 📄 License

Released under the [MIT License](LICENSE).

---

## ⚠️ Disclaimer

**VNLocationAPI** is a community project. Data is collected and structured based on publicly available resolutions of the National Assembly.  
This service is **not affiliated with any official government agency**.
