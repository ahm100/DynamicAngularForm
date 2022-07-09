import { NgModule } from '@angular/core';

import {
  MatButtonModule,
} from '@angular/material/button';

import {
  MatMenuModule,
} from '@angular/material/menu';

import {
  MatToolbarModule,
} from '@angular/material/toolbar';

import {
  MatIconModule,
} from '@angular/material/icon';

import {
  MatCardModule
} from '@angular/material/card';

import {
    MatFormFieldModule
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule, 
    MatNativeDateModule,    
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule ,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class MaterialModule {}