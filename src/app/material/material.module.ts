import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';

const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
