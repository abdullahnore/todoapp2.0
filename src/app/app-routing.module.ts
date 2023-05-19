import {  NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TodoAppComponent } from './todo-app/todo-app.component';


const routes: Routes = [
 { component:TodoAppComponent,
  path:'todo',loadChildren:()=>import('./todo-app/todo-app.module').then(mod=>mod.TodoAppModule)},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
