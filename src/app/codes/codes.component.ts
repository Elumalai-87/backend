import { Component } from '@angular/core';

@Component({
  selector: 'app-codes',
  templateUrl: './codes.component.html',
  styleUrls: ['./codes.component.scss']
})
export class CodesComponent {
  myScriptElement: HTMLScriptElement;
  constructor(){
     this.myScriptElement = document.createElement("script");
     this.myScriptElement.src = "../../assets/script.js";
     document.body.appendChild(this.myScriptElement);
  }
}
