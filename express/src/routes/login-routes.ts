import { Request, Response, Router } from 'express';
import loginFormTemplate from '../templates/login-form';
import indexTemplate from '../templates/index';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send(indexTemplate);
});

router.get('/login', (req: Request, res: Response) => {
  res.send(loginFormTemplate);
})

export { router };
