import { Request, Response } from 'express';
import loginFormTemplate from '../templates/login-form';
import { controller, get } from '../decorators';

@controller('/login')
class LoginController {

  @get('/')
  getLogin(req: Request, res: Response): void {
    res.send(loginFormTemplate);
  }
}

export default LoginController;
