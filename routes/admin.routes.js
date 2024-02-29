import { Router } from "express";
import { getAdminForestalAgricola, getAllAdmin, getTipoCuartel } from "../controllers/admin.controllers.js";

const administradores = Router();

//http://localhost:3001/api/admin/getAll
administradores.get("/getAll", getAllAdmin);

//http://localhost:3001/api/admin/getType
administradores.get("/getType", getTipoCuartel);

//http://localhost:3001/api/admin/getAdminForestal
administradores.get("/getAdminForestal", getAdminForestalAgricola);

export default administradores;
