import sql from 'mssql'
import config from '../config'

// Conexión con la base de datos SQL Server
export const dbSettings = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbDatabase,
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
}

// Realizo la petición para la conexión
export const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings)
    return pool
  } catch (error) {
    console.error(error)
  }
}

export { sql }