import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import { router as indexRouter } from './routes/index-routes';
import { router as loginRouter } from './routes/login-routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['secret'] }));
app.use(indexRouter);
app.use(loginRouter);

app.listen(3000, () => {
  console.log('Listening at 3000 port');
});
