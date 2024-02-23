import {createPool} from 'mysql2/promise'
import {DB_USER, DB_NAME, DB_HOST, DB_PASSWORD, DB_PORT} from './config.js'

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT
})
