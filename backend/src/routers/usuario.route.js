
import { Router } from "express";
import {getUsuario, getUsuarios, crearUsuario, deleteUsuarios, updateUsuario} from "../controllers/usuario.controller.js";

const router = Router();

router.get('/usuarios', getUsuarios);

router.get('/usuarios/:id', getUsuario)

router.post('/usuarios/crear', crearUsuario);

router.delete('/usuarios/:id', deleteUsuarios);

router.patch('/usuarios/:id', updateUsuario);  


export default router;