import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import AppRouter from './app.router';
import './controllers/IndexController';
import './controllers/LoginController';

const app = express();
const router = AppRouter.getInstance();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['secret'] }));
app.use(router);

app.listen(3000, () => {
  console.log('Listening at 3000 port');
});
