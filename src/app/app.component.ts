import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Switchboard';

  // stats = [ 'OFF','OFF','OFF','OFF','OFF','OFF','OFF','OFF','OFF','OFF'];

  // switch(idx){

  //   if(this.stats [idx] == "ON") {
  //     this.stats[idx] == "OFF";
  //   } else {
  //     this.stats[idx] = "ON";
  //   }
  // }



  // ANOTHER METHOD
  switches = [true, true, true, true, true, true, true, true, true, true];

  flipSwitch(idx) {
    this.switches[idx] = !this.switches[idx];
  }





} // end of AppComponent
