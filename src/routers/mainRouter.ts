import apiRouter from "./apiRouter";
import homeRouter from "./indexRouter";
import { Express } from "express";

function  useRouter(app: Express) {
    // Tuyến đường home
    app.use('/', homeRouter);

    // Tuyển đường router api
    app.use('/api', apiRouter);
}

export default useRouter