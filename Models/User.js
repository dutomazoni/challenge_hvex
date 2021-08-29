import { model, Schema } from 'mongoose';

const user = new Schema(
    {
        name: {type: String, required: true},
        username: {type: String, required: true},
        password: {type: String, required: true},
        last_login: {type: Date, required: true},
    }
);

const User = model('User', user, 'User');

export { User };
