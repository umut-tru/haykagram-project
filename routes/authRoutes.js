import { Router } from 'express';
import User from '../models/User.js';
const router = Router();

router.post('/register', async (req,res) => {
try {
    const {email,password} = req.body;
} catch (error) {
    res.status(500).json({message:'Something went wrong, please try again.'})
}
})

router.post('/login', async (req,res) => {

})


export {router};