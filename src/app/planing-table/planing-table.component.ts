import { Component } from '@angular/core';

@Component({
  selector: 'app-planing-table',
  templateUrl: './planing-table.component.html',
  styleUrl: './planing-table.component.scss'
})
export class PlaningTableComponent {
  resources = [
    {name: 'Resource 1', tasks:[{start: '2023-05-01', end: '2023-05-05'}]},
    {name: 'Resource 2', tasks:[{start: '2023-05-03', end: '2023-05-10'}]}
  ];

  dates: string[] = []

  constructor() {}

  ngOnInit(): void {
    this.dates = this.generateDateRange('2023-05-01', '2023-05-10');
  }

  generateDateRange(startDate: string, endDate:string): string[]{
    let start = new Date(startDate);
    let end = new Date(endDate);
    let dates: string[] = [];

    while (start <= end) {
      dates.push(start.toISOString().split('T')[0]);
      start.setDate(start.getDate()+1);
    }

    return dates;
  }

  isTaskScheduled(resource: any, date: string): string {
  for (let task of resource.tasks) {
    if (new Date(task.start) <= new Date(date) && new Date(task.end) >= new Date(date)) {
      return 'X';  // Markieren Sie die Zelle, wenn eine Aufgabe geplant ist
    }
  }
  return '';  // Die Zelle bleibt leer, wenn keine Aufgabe geplant ist
}
}
