import express from "express"
import recipesRouter from './recipes.js'
import usersrouter from  './user.js'

const router = express.Router()

router.use('/users',usersrouter)
router.use('/recipes',recipesRouter)

router.get('*', (req, res) => {res.send(`<div style="text-align:center"><h1>404 Not Found</h1></div>`);});
  

export default router