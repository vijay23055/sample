import express from "express"
import AppRoutes from "./src/routes/index.js"

const PORT = process.env.PORT || 8000

const app = express()
app.use(express.json());
app.use(AppRoutes)

app.listen(8000,()=>console.log("listing..."))