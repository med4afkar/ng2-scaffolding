import { Meteor } from 'meteor/meteor';

import './publish';
import './methods';

// export * from './collection';

// Create admin user
if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
        username: 'admin',
        email: 'admin@ceapro.es',
        password: 'ceapro',
        profile: {
            name: 'admin'
        }
    });
}