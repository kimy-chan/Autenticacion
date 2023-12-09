import {Router } from 'express'
import {RegisterController }from '../controller/register'


const registerController = new RegisterController()

const router = Router()

router.get("/register",registerController.rigister)



export default router