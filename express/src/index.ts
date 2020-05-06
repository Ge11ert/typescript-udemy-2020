import express from 'express';
import bodyParser from 'body-parser';

import { router } from './routes/login-routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(3000, () => {
  console.log('Listening at 3000 port');
});
