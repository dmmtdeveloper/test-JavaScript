import { Router } from "express";
import {
  getAdminForestalAgricola,
  getAllAdmin,
  getTipoCuartel,
  getYearCultivo,
} from "../controllers/admin.controllers.js";

const administradores = Router();

//http://localhost:3001/api/admin/getAll
administradores.get("/getAll", getAllAdmin);

//http://localhost:3001/api/admin/getType
administradores.get("/getType", getTipoCuartel);

//http://localhost:3001/api/admin/getAdminForestal
administradores.get("/getAdminForestal", getAdminForestalAgricola);

//http://localhost:3001/api/admin/getYear
administradores.get("/getYear", getYearCultivo)

export default administradores;
