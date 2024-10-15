import express from "express"
import recipes from "../controller/recipes.js"

const router = express.Router()

router.get('/createrercipe',recipes.createrecpie)

export default router