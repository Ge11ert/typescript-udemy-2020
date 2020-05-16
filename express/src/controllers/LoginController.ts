import { NextFunction, Request, Response} from 'express';
import loginFormTemplate from '../templates/login-form';
import { controller, get, post, use, validateBody } from '../decorators';

@controller('/login')
class LoginController {

  @get('/')
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(loginFormTemplate);
  }

  @post('/')
  @validateBody('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email === 'me@mail.ru' && password === 'password') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  }
}

function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request at ${req.url}`);
  next();
}
