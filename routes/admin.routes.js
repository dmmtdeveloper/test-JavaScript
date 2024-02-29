import { Router } from "express";
import { getAllAdmin, getTipoCuartel } from "../controllers/admin.controllers.js";

const administradores = Router();

//http://localhost:3001/api/admin/getAll
administradores.get("/getAll", getAllAdmin);

//http://localhost:3001/api/admin/getType
administradores.get("/getType", getTipoCuartel);

export default administradores;
