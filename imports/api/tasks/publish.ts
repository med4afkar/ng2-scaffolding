import { Meteor } from 'meteor/meteor';

import { Tasks } from 'imports/api/tasks';


if(Meteor.isServer){
    Meteor.publish('tasks', function() {
        return Tasks.find({});
    });    
}
