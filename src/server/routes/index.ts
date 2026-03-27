import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send('App rodando');
});

router.post('/create', (req, res) => {
  console.log(req.body);

  return res.json(req.body);
});

export { router };
