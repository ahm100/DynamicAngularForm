import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { JsonPipe } from '../shared/pipes/json_pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    HomeComponent,
    JsonPipe
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
