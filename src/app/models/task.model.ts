export class Task {
  static allTasks = [];
  static allComplete = false;
  public done: boolean = false;
  constructor(public description: string, public priority: number, public dateDue: Date) {
    Task.allTasks.push(this);
  }

  static sortTasks(by: string) {
    switch(by) {
    case 'date':
      return Task.allTasks.sort(compareDate);
    case 'priority':
      return Task.allTasks.sort(comparePriority);
    }
  }

  markComplete() {
    this.done = !this.done;
    let complete: boolean = true;
    Task.allTasks.forEach((task) => { complete = complete && task.done; });
    Task.allComplete = complete;
    console.log(Task.allComplete);
  }
}

function compareDate(a,b) {
  if (a.dateDue < b.dateDue)
    return -1;
  if (a.dateDue > b.dateDue)
    return 1;
  return 0;
}

function comparePriority(a,b) {
  if (a.priority < b.priority)
    return -1;
  if (a.priority > b.priority)
    return 1;
  return 0;
}



new Task("Do some homework", 2, new Date(2017, 0, 1));
new Task("Pet some cats", 1, new Date(2018, 0, 1));
new Task("Eat a meal", 2, new Date(2019, 0, 1));
new Task("Do some exercise", 3, new Date(2020, 0, 1));
