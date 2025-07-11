import { Request, Response } from "express";
import provinces from "../api/province";

const apiController = {
  getAll: (req: Request, res: Response) => {
    res.status(200).json({
      success: true,
      message: "Provinces retrieved successfully.",
      timestamp: new Date().toISOString(),
      data: provinces,
    });
  },

  getProvince: (req: Request, res: Response) => {
    const listProvince = provinces.map((province) => {
      return {
        id: province.id,
        code: province.code,
        name: province.name,
        codename: province.codename,
        division_type: province.division_type,
      };
    });

    res.status(200).json({
      success: true,
      message: "Provinces retrieved successfully.",
      timestamp: new Date().toISOString(),
      data: listProvince,
    });
  },

  getWard: (req: Request, res: Response) => {
    const idProvince = Number(req.query.id);

    const listWard = provinces
      .find((province) => province.id === idProvince)
      ?.wards.map((ward) => {
        return {
          id: ward.id,
          name: ward.name,
          codename: ward.codename,
          division_type: ward.division_type,
        };
      });

    res.status(200).json({
      success: true,
      message: "Wards retrieved successfully.",
      timestamp: new Date().toISOString(),
      data: listWard,
    });
  },
};

export default apiController;
