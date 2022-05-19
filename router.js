import {Router} from 'express'
import Controller from "./Controller.js";

const router = new Router()

router.get('/', Controller.start)

router.post('/', Controller.check)

export default router;