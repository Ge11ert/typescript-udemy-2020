import { Request, Response } from 'express';
import loggedOutTemplate from '../templates/logged-out';
import loggedInTemplate from '../templates/logged-in';
import { controller, get } from '../decorators';

@controller('/')
class IndexController {

  @get('')
  getIndexPage(req: Request, res: Response): void {
    const targetTemplate = req.session && req.session.loggedIn ? loggedInTemplate : loggedOutTemplate;
    res.send(targetTemplate);
  }
}
