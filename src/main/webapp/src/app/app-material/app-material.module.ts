import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatMenuModule} from "@angular/material/menu";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
  ]
})
export class AppMaterialModule { }
