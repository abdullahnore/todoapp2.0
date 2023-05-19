import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';


const  routes: Routes =[
  {
   // path:"task",component:TaskComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ],
  exports:[RouterModule]
})
export class TodoRoutingModule { }
