import express from 'express'
import {addUser,getUsers,getUser,updateUser,deleteUser} from "../controller/controller.js"


const router = express.Router();

// router.get('/', );
router.post('/add', addUser);
router.get('/', getUsers);
router.get('/:id', getUser)
router.post('/:id',updateUser);
router.delete('/:id',deleteUser);


export default router;