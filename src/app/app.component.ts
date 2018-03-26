import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'A great list';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  masterTaskList: Task[] = Task.allTasks;
  selectedTask: Task = this.masterTaskList[0];

  addTask(newTask: Task) {
    this.masterTaskList.push(newTask);
  }

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  deleteTask() {
    let index = this.masterTaskList.indexOf(this.selectedTask)
    this.masterTaskList.splice(index, 1);
  }

  // addTask() {
  //   let desc: string = prompt("describe your task");
  //   let date: Date = new Date(prompt("when is it due?"));
  //   let priority: number = parseInt(prompt("what priority does it have?"));
  //
  //   new Task(desc, priority, date);
  // }

  finishedEditing() {
    this.selectedTask = null;
  }
}
