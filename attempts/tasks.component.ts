import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-newItem',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class TaskComponent {
  task: new Task('butt');
  constructor() {}
}
