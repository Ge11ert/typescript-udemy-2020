import express from 'express';
import { router } from './routes/login-routes';

const app = express();

app.use(router);

app.listen(3000, () => {
  console.log('Listening at 3000 port');
});
