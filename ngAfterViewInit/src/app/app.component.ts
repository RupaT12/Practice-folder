import { Component, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, AfterViewChecked {
  ngAfterViewChecked(): void {
    console.log("View Checked called")
  }
  ngAfterViewInit(): void {
 console.log("View Init called")
  }
  counter = 0;
  updateCounter(){
    this.counter+=1
  }
}
