import { NextFunction, Request, Response} from 'express';
import loginFormTemplate from '../templates/login-form';
import { controller, get, use } from '../decorators';

@controller('/login')
class LoginController {

  @get('/')
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(loginFormTemplate);
  }
}

function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request at ${req.url}`);
  next();
}
