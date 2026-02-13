import {pool} from "../db2.js";


export const getUsuarios = async (req, res) => {
    const data = await pool.query("SELECT * FROM public.usuarios ORDER BY idusuario ASC;")
    res.json(data.rows)


};

export const getUsuario = async (req, res) => {
    const id = parseInt(req.params.id) 
    const data = await pool.query("SELECT * FROM public.usuarios WHERE idusuario = $1;", [id])
    res.json(data.rows)
};

export const crearUsuario = async (req, res) => {
    try {
        const {nombre, correo, password} = req.body;
        const {rows}= await pool.query("INSERT INTO public.usuarios(nombre, correo, password) VALUES($1, $2, $3) RETURNING * ;", [nombre, correo, password])

        res.json(rows[0])
    } catch (error) {
        return res.json({ error: error.message })
    }
};

export const deleteUsuarios = async (req, res) => {
    
    try {
    const id = parseInt(req.params.id)
    const data = await pool.query("DELETE FROM public.usuarios WHERE idusuario = $1;", [id])
    res.json({message: "Usuario eliminado"})
    } catch (error) {
        return res.json({ error: error.message })
    }

};

export const updateUsuario = async (req, res) => {
    
    try {
    const id = parseInt(req.params.id)
    const {nombre, correo, password} = req.body;
    const data = await pool.query("UPDATE public.usuarios SET nombre=$1, correo=$2, password=$3 WHERE idusuario=$4 RETURNING *;", [nombre, correo, password, id])
    res.json(data.rows[0])
    } catch (error) {
        return res.json({ error: error.message })
    }   
};