import { Component, OnInit } from '@angular/core';
import { IUserTask } from './task.interface';
import { UserTask } from './task.class.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  user: string = 'Khrystyna';
  inputNewTask: string;
  taskToEdit: string;
  indexTask: number;
  editStatus: boolean;
  tasks: Array<IUserTask> = [
    {
      task: 'HTML5',
      check: false,
      status: 'In progress'
    },
    {
      task: 'CSS3',
      check: false,
      status: 'In progress'
    },
    {
      task: 'SCSS',
      check: false,
      status: 'In progress'
    },
    {
      task: 'JavaScript',
      check: false,
      status: 'In progress'
    },
    {
      task: 'jQuery',
      check: false,
      status: 'In progress'
    },
    {
      task: 'Angular',
      check: false,
      status: 'In progress'
    },
  ];
  countTask: number = this.tasks.length;
  checkedTask: boolean = false;
  statusTask: string = 'In progress';
  constructor() { }

  ngOnInit(): void {
  }
  addTask() {
    if (this.inputNewTask) {
      const newTask: IUserTask = new UserTask(this.inputNewTask, this.checkedTask, this.statusTask);
      this.tasks.push(newTask);
      this.inputNewTask = '';
      this.countTask = this.tasks.length;
    }
  }
  onChange(event: any, index: number): void {
    let task = this.tasks[index];
    let checkBox = event.target;
    if (checkBox.checked) {
      task.status = 'Done';
      task.check = true;
    } else {
      task.status = 'In progress';
      task.check = false;
    }
  }
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.countTask = this.tasks.length;
  }
  editTask(index: number) {
    this.editStatus = true;
    this.taskToEdit = this.tasks[index].task;
    this.indexTask = index;
  }

  saveEditTask(): void {
    const editedNewTask: IUserTask = new UserTask(this.taskToEdit, this.checkedTask, this.statusTask);
    this.tasks.splice(this.indexTask, 1, editedNewTask);
    this.editStatus = false;
    this.taskToEdit = '';
  }
}
