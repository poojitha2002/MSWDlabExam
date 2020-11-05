import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Calculator';
  public input1:number;
  public input2:number;
  public input3:number;
  add()
  {
    this.input3=this.input1+this.input2;
  }
  subtract()
  {
    this.input3=this.input1-this.input2;
  }
  mul()
  {
    this.input3=this.input1*this.input2;
  }
  div()
  {
    this.input3=this.input1/this.input2;
  }
}
