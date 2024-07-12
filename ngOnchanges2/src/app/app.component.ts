import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngOnchanges2';
  inputVal: string = '';
  toDestroy: boolean = false;
}
onBtnClicked(inputEl: HTMLInputElement){
  this.inputVal = inputEl.value;
}

DestroyComponent(){
this.toDestroy = !this.toDestroy;
}

function onBtnClicked(inputEl: any, HTMLInputElement: { new(): HTMLInputElement; prototype: HTMLInputElement; }) {
  throw new Error('Function not implemented.');
}
function DestroyComponent() {
  throw new Error('Function not implemented.');
}

