import express from 'express'
import { ReceiveMail, Review } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/receive-mail',ReceiveMail)
router.post('/review',Review)

export default router 