import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  priorities = ['High', 'Medium', 'Low'];
  description = "";
  // submitted = false;
  onSubmit() {
    new Task(this.description);
    console.log(Task.allTasks);
  };
  // model = new Task('hello');

  // get diagnostic() { return JSON.stringify(this.model); }
}
