import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [
    {
      name: 'Test data 1',
      amount: 23,
    },
    {
      name: 'Hello world this is a test',
      amount: 1,
    },
    {
      name: 'Call me Ishmael',
      amount: 6,
    },
    {
      name: 'Hello darkness my old friend',
      amount: 12,
    },
    {
      name: 'Hell breaks loose',
      amount: 2
    }
  ];
}
