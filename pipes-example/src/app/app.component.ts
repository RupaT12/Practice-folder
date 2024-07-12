import { Component } from '@angular/core';
import { time } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-example';


  today: number = Date.now();
  text: string = 'hello world';
  today1: Date = new Date();
}
