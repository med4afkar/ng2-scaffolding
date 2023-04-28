import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from 'imports/models/task';
import { Tasks } from 'imports/api/tasks';
import { MeteorObservable } from 'meteor-rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasksList: Observable<Task[]>;
  taskName: string;

  constructor() {
    this.tasksList = this.findTaks();
   }
  private findTaks(): Observable<Task[]> {
    return MeteorObservable.subscribe('tasks').pipe(switchMap(() => Tasks.find()));

  }
  addTask(): void {
    let newTask = new Task(this.taskName);
    Meteor.call('tasks.insert', newTask);
    this.taskName = '';
  }
  removeTask(task: Task): void {
    Meteor.call('tasks.remove', task._id);
  },
  toggleTask(task: Task): void {
    Meteor.call('tasks.toggle', task._id);
  }
}
