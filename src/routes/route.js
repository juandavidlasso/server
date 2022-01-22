import express from "express"
import { getConnection, sql } from '../database/connection'

const router = express.Router()

// Ruta para consultar los acrónimos en la DB
router.get('/consultados', async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query('SELECT * FROM Acronimos')
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
})

// Ruta para insertar los acrónimos en la DB
router.post('/insert', async (req, res) => {
    try {
        const { Acronimo } = req.body
        const pool = await getConnection()
        await pool.request().input("Acronimo", sql.VarChar, Acronimo).query('INSERT INTO ACRONIMOS(Acronimo) VALUES(@Acronimo);')
        res.json({ Acronimo })
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
})

export default router;