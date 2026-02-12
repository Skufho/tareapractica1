import { Router } from "express";
import {getProductos, getProducto, crearProducto, deleteProducto, patchProducto} from "../controllers/profuct.controller.js";

const router = Router();

router.get('/products', getProductos);

router.get('/products/:id', getProducto);

router.post('/products/crear', crearProducto);

router.delete('/products/:id', deleteProducto);

router.patch('/products/:id', patchProducto);


export default router;

