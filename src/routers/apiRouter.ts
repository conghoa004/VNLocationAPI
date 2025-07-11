import express, { Request, Response } from "express";
import { Router } from "express";
const routers: Router = express.Router();
import apiController from "../controllers/apiController";

// Route xử lý api
routers.get("/", apiController.getAll);
routers.get("/province", apiController.getProvince);
routers.get("/ward", apiController.getWard);

export default routers;