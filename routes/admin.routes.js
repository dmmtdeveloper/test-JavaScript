import { Router } from "express";
import { getAllAdmin } from "../controllers/admin.controllers.js";

const administradores = Router();

//http://localhost:3001/api/admin/getAll
administradores.get("/getAll", getAllAdmin);

export default administradores;
