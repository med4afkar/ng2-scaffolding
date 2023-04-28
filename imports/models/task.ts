export class Task {
  _id?: string;
  name: string;
  completed: boolean;

  constructor(name: string) {
    this.name = name;
    this.completed = false;
  }
}
