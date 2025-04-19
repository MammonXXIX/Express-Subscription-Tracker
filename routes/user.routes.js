import { Router } from 'express';
import { getUser, getUsers } from '../controllers/user.controller.js';
import authorize from '../middlewares/auth.middleware.js';

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', authorize, getUser);
userRouter.post('/', (req, res) => res.send({ title: 'POST user' }));
userRouter.put('/:id', (req, res) => res.send({ title: 'PUT user' }));
userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE user' }));

export default userRouter;
