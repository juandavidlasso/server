import express from 'express'
import cors from 'cors'
import routes from './routes/route'
import morgan from 'morgan'
import config from './config'

const app = express()

// Configuracion puerto
app.set("port", config.port)

// Middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Rutas
app.use("/api", routes)

app.listen(app.get("port"))

// Puerto corriendo
console.log("Servidor corriendo en http://localhost:"+app.get("port"))

export default app