import express from 'express'
import AppRoutes from './src/Routes/index.js'

const app = express()

app.use(AppRoutes)

app.listen(8000,()=>console.log('App is listening 8000'))