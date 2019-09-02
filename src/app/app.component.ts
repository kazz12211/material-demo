import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';

  minDate = new Date();
  maxDate = new Date(2020, 2, 10);

  dateFilter = date => {
    const day = date.getDay();
    return day != 0 && day != 6;
  };
}
