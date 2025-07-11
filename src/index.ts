import express, { Request, Response } from 'express';
const morgan = require('morgan');
import path from 'path';
const cors = require('cors');

const app = express();
const port = 3000;

// Kích hoạt CORS cho tất cả domain
app.use(cors());

// Middleware
app.use(morgan('dev')); // Ghi log theo format "dev"
app.use(express.json());

// Middleware tích hợp
app.use(express.json()); // Đọc JSON body
app.use(express.urlencoded({ extended: true })); // Đọc form x-www-form-urlencoded

// Cấu hình EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Dùng file tĩnh trong thư mục "public"
app.use(express.static(path.join(__dirname, 'public')));

// Cấu hình dùng routers
import useRouter from './routers/mainRouter';
useRouter(app);

// Khởi tạo server
app.listen(port, () => {
  console.log(`Server running at https://vnlocationapi.onrender.com/`);
});
