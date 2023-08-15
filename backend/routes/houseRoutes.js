import express from 'express';
import { uploadHouse} from '../controllers/houseController.js'

import {protect } from '../middleware/authMiddleware.js'
 import { upload } from '../helpers/storage.js'
// upload.array('images')
const router = express.Router()


router.post('/',  uploadHouse)
// router.get('/' , getHouses)
// router.post('/removeHouse', protect,  removeHouse)
// router.post('/removeHouses', protect,  removeHouses)
// router.get('/update', protect, updateHouseData)
// router.get('/like', protect, likeHouse)
// router.get('/rentRequest', protect, rentRequest)
// router.get('/declineRequest', protect, declineRequest)
// router.get('/acceptRequest', protect, acceptRequest)

export default router 
