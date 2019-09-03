import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    let dialogRef = this.dialog.open(DialogExampleComponent, {data: {name: 'Kazuo'}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}