import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddEditRoutingModule } from './add-edit-routing.module';
import { AddeditComponent } from './addedit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AddEditRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [AddeditComponent],
})
export class AddEditModule { }
