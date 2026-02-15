import { Router } from "express";
import {getProductos, getProducto, crearProducto, deleteProducto, EditProducto} from "../controllers/product.controller.js";

const router = Router();

router.get('/products', getProductos);

router.get('/products/:id', getProducto);

router.post('/products/crear', crearProducto);

router.delete('/products/:id', deleteProducto);

router.put('/products/:id', EditProducto);


export default router;

