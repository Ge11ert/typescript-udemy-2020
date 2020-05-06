import { Request, Response, Router } from 'express';
import loginFormTemplate from '../templates/login-form';
import indexTemplate from '../templates/index';

interface RequestWithBody extends Request {
  body: Record<string, string|undefined>;
}

const router = Router();

router.get('/', (req: RequestWithBody, res: Response) => {
  res.send(indexTemplate);
});

router.get('/login', (req: RequestWithBody, res: Response) => {
  res.send(loginFormTemplate);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email !== undefined) {
    res.send(email.toUpperCase());
  } else {
    res.send('Email is required');
  }
});

export { router };
