import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges {

  title: string = 'Demo Component';
@Input() message: string = 'hello';

  constructor() {
    console.log('Demo component constructor is called');
    console.log(this.title);
    console.log(this.message);


  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges Hook called');
    // console.log(changes);
  }


}
