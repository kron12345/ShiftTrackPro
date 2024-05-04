import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-bar',
  templateUrl: './task-bar.component.html',
  styleUrl: './task-bar.component.scss'
})
export class TaskBarComponent {

  @Input() start: Date = new Date();
  @Input() end: Date = new Date();
  @Input() from: string = '';
  @Input() to: string = '';

  constructor() { }

  getDuration(): number {
    return (this.end.getTime() - this.start.getTime()) / (1000 * 60 * 60 * 24);
  }
}
