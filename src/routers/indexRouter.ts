import { Router, Request, Response } from "express";
const routers = Router();
import homeController from "../controllers/indexController";

routers.get("/", homeController.index);

export default routers;