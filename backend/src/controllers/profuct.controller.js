import {pool} from "../db.js ";

export const getProductos = async (req, res) => {
    const data = await pool.query("SELECT * FROM public.products ORDER BY idproducts ASC;")
    res.json(data.rows)

};

export const getProducto = async (req, res) => {
    const id = parseInt(req.params.id)
    const data = await pool.query("SELECT * FROM public.products WHERE idproducts = $1;", [id])
    res.json(data.rows) 
};

export const crearProducto = async (req, res) => {
    try {
        const {descripcion, precio} = req.body;

        const {rows} = await pool.query("INSERT INTO public.products(descripcion, precio) VALUES($1, $2) RETURNING *;", 
            [descripcion, precio])

        res.json(rows[0])

    } catch (error) {
       return res.json({ error: error.message })
    }
};

export const deleteProducto = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await pool.query("DELETE FROM public.products WHERE idproducts = $1;", [id])
        res.json({ message: "Producto eliminado correctamente" })
    } catch (error) {
        return res.json({ error: error.message })
    }
};

export const patchProducto = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const {descripcion, precio} = req.body;

        const {rows} = await pool.query("UPDATE public.products SET descripcion=$1, precio=$2 WHERE idproducts=$3 RETURNING *;", [descripcion, precio, id])
        res.json(rows[0])
    } catch (error) {
        return res.json({ error: error.message })
    }
};