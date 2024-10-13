import express from 'express'
import { ReceiveMail } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/receive-mail',ReceiveMail)

export default router