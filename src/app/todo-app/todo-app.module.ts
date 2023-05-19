import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { TodoAppComponent } from './todo-app.component';
console.warn("ss");

@NgModule({
  declarations: [TodoAppComponent,TaskComponent],
  imports: [
   FormsModule
,CommonModule
  ]
})
export class TodoAppModule { }
