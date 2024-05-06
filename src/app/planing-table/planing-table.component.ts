import { Component } from '@angular/core';

@Component({
  selector: 'app-planing-table',
  templateUrl: './planing-table.component.html',
  styleUrl: './planing-table.component.scss'
})
export class PlaningTableComponent {
  resources = [
    {
      name: 'Resource 1',
      tasks: [{
        start: '2023-05-01T05:11:00',
        end: '2023-05-05T11:20:00',
        from: 'BRBG',
        to: 'CHSM'
      }]
    },
    {
      name: 'Resource 2',
      tasks: [{
        start: '2023-05-03T02:00:14',
        end: '2023-05-10T18:15:15',
        from: 'BS',
        to: 'OL'
      }]
    }
  ];

  timeIntervals: string[] = []
  columnIntervalSeconds: number = 3600
  columWidth: number = 10
  secondsPerEm: number = 0

  constructor() { }

  ngOnInit(): void {
    this.timeIntervals = this.generateTimeIntervals('2023-05-01', '2023-05-10', this.columnIntervalSeconds);
    this.secondsPerEm = this.columnIntervalSeconds / this.columWidth;
  }

  generateTimeIntervals(startDate: string, endDate: string, intervalSecondes: number): string[] {
    let intervals: string[] = [];
    let start = new Date(`${startDate}T:00:00:00Z`);
    let end = new Date(`${endDate}T23:59:59Z`);

    while (start < end) {
      intervals.push(start.toISOString()); // Zeit im HH:MM-Format extrahieren
      start.setSeconds(start.getSeconds() + intervalSecondes);
    }

    return intervals;
  }

  isTaskScheduled(resource: any, date: string): boolean {
    for (let task of resource.tasks) {
      if (new Date(task.start) <= new Date(date) && new Date(task.end) >= new Date(date)) {
        return true;  // Markieren Sie die Zelle, wenn eine Aufgabe geplant ist
      }
    }
    return false;  // Die Zelle bleibt leer, wenn keine Aufgabe geplant ist
  }
}
