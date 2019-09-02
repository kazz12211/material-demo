import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';

  constructor(private snackbar: MatSnackBar) {}

  openSnackBar(message, action) {
    let snackBarRef = this.snackbar.open(message, action, {duration: 2000});

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('Snack-bar dismissed')
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('Snack-bar action trigger');
    });
  }

  openCustomSnackBar() {
    this.snackbar.openFromComponent(CustomSnackBarComponent, {duration: 2000});
  }
}


@Component({
  selector: '<custom-snackbar',
  template: `
    <span style='color:orange'>Custom Snackbar</span>
  `
})
export class CustomSnackBarComponent {}