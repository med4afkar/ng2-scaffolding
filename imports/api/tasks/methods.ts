import { Tasks } from 'imports/api/tasks';

function insertTask(newTask) {
    Tasks.insert(newTask);
}
function removeTask(taskId) {
    Tasks.remove(taskId);
}
function toggleTask(taskId) {
    let task = Tasks.findOne(taskId);
    Tasks.update(taskId, {
        $set: {
            completed: !task.completed
        }
    });
}


Meteor.methods({
    'tasks.insert': insertTask,
    'tasks.remove': removeTask,
    'tasks.toggle': toggleTask
})