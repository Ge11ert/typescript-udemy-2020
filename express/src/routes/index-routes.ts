import { Router, Request, Response } from 'express';
import loggedOutTemplate from '../templates/logged-out';
import loggedInTemplate from '../templates/logged-in';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const targetTemplate = req.session && req.session.loggedIn ? loggedInTemplate : loggedOutTemplate;
  res.send(targetTemplate);
});

export { router };
