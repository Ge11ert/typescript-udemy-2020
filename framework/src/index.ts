import { User } from './models/User';

const user = new User({ id: 1 });

user.set({ name: 'henlo', age: 999 });
user.save();

const user2 = new User({ name: 'new record', age: 0 });
user2.save();
