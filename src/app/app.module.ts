import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesComponent } from './views/categories/categories.component';
import { TasksComponent } from './views/tasks/tasks.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule, MatPaginatorIntl} from "@angular/material/paginator";
import { PaginationComponent } from './views/pagination/pagination.component';



@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    TasksComponent,
    PaginationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [{provide: MatPaginatorIntl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
