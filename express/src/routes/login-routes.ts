import { Request, Response, NextFunction, Router } from 'express';
import loginFormTemplate from '../templates/login-form';

interface RequestWithBody extends Request {
  body: Record<string, string|undefined>;
}

const router = Router();

router.get('/login', (req: RequestWithBody, res: Response) => {
  res.send(loginFormTemplate);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email === 'me@mail.ru' && password === 'password') {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send('Invalid email or password');
  }
});

router.get('/logout', (req: RequestWithBody, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', ensureAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route');
});

function ensureAuth(req: Request, res: Response, next: NextFunction ): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403).send('Access Denied');
}

export { router };
