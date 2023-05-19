
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent {
  title = 'todo app';
  list: any[] = [];

  constructor() {
    this.loadListFromStorage();
  }
  taskAdd(item: any) {
    this.list.push({
      id: this.list.length,
      name: item.task,
      startDate: item.startDate,
      endDate: item.endDate,
    });

    this.saveListToStorage();
    // sessionStorage.setItem('list', JSON.stringify(this.list));
  }

  removeTask(id: any) {
    this.list = this.list.filter((item) => item.id !== id);
    this.saveListToStorage();
    // sessionStorage.setItem('list', JSON.stringify(this.list));
  }

  private loadListFromStorage() {
    const listString = sessionStorage.getItem('list');
    if (listString) {
      this.list = JSON.parse(listString);
    }
  }

  private saveListToStorage() {
    sessionStorage.setItem('list', JSON.stringify(this.list));
  }
}


