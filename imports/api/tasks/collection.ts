import { MongoObservable } from 'meteor-rxjs';

import { Task } from 'imports/models/task';

export const Tasks = new MongoObservable.Collection<Task>('tasks');

Tasks.allow({
    insert() {
      return true;
    },
    update() {
      return true;
    },
    remove() {
      return true;
    }
  });