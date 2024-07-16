import { Component,OnInit } from '@angular/core';
import { FluidServiceService } from 'fluid-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  implements OnInit {
  title = 'consuming-angular-app';
  message: string | undefined;
  constructor(private myService: FluidServiceService) { }

  ngOnInit() {
    this.message = this.myService.getMessage();
   
  }
}
