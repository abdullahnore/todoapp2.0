import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
 
  @Input() list: any;
  @Output() removeTask = new EventEmitter<any>();
  constructor() {
    console.log("sss")
  }
  ngOnInit(): void {}
  remove(id: any) {
    console.log(id);

    this.removeTask.emit(id);
  }
}
