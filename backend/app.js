import express from 'express'
import dotenv from 'dotenv'
import pool from './config/db.js'

dotenv.config()
const Port = 3001
const app = express()

app.listen(Port, () => {
    console.log('Servidor Conectado...')
})