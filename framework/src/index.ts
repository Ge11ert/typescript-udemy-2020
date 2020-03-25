import { User } from './models/User';

const user = User.build({ id: 1 });

user.fetch();

