import { Request, Response } from 'express';
import loginFormTemplate from '../templates/login-form';
import { get } from '../decorators/routes';
import { controller } from '../decorators/controller';

@controller('/login')
class LoginController {

  @get('/')
  getLogin(req: Request, res: Response): void {
    res.send(loginFormTemplate);
  }
}

export default LoginController;
