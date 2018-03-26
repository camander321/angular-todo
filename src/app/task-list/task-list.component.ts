import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }

  sortTasksByDate() {
    Task.sortTasks('date');
  }

  sortTasksByPriority() {
    Task.sortTasks('priority');
  }


  ngOnInit() {
  }

}
