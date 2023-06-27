import express from "express";
import { createUser, getAllUsers, getUser, deleteUser, updateUser, countUsers } from "../controllers/userController.js"

const router = express.Router()

router.post('/create', createUser)

router.get('/get-all', getAllUsers)

router.get('/get/:username', getUser)

router.delete('/delete/:username', deleteUser)

router.put('/update/:username', updateUser)

router.get("/count", countUsers);

export default router;