import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    MatPaginatorModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
