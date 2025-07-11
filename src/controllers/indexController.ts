import { Request, Response } from "express";

const homeController = {
    index: (req: Request, res: Response) => {
        res.render("index");
    },
};

export default homeController;