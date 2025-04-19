import { Router } from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({ title: 'GET all subscriptions' }));

subscriptionRouter.get('/:id', (req, res) => res.send({ title: 'GET subscription' }));
subscriptionRouter.post('/', (req, res) => res.send({ title: 'POST subscription' }));
subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'PUT subscription' }));
subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE subscription' }));

subscriptionRouter.get('/user/:id', (req, res) => res.send({ title: 'GET all user subscription' }));
subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: 'DELETE: (Cancel) subscription' }));
subscriptionRouter.get('/upcoming-renewals', (req, res) =>
    res.send({ title: 'GET: (Upcoming Renewals) subscription' })
);

export default subscriptionRouter;
