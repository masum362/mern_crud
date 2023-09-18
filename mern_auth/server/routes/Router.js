import express from 'express'
import { LoginUserData ,RegisterUserData,dashboardData,logOut} from '../controllers/user-controller.js';
import authMiddleware from './secret-route.js';

const router = express.Router();

router.post('/login',LoginUserData)
router.post('/register',RegisterUserData)
router.get('/dashboard',authMiddleware,dashboardData)
router.get('/logout',logOut)


export default router