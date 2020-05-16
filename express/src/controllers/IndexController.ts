import { Request, Response } from 'express';
import loggedOutTemplate from '../templates/logged-out';
import loggedInTemplate from '../templates/logged-in';
import { controller, get, use } from '../decorators';
import { ensureAuth } from '../middlewares/ensure-auth-middleware';

@controller('')
class IndexController {

  @get('/')
  getIndexPage(req: Request, res: Response): void {
    const targetTemplate = req.session && req.session.loggedIn ? loggedInTemplate : loggedOutTemplate;
    res.send(targetTemplate);
  }

  @get('/protected')
  @use(ensureAuth)
  getProtectedPage(req: Request, res: Response) {
    res.send('Welcome to protected route');
  }
}
