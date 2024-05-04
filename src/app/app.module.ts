import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaningTableComponent } from './planing-table/planing-table.component';
import { TaskBarComponent } from './task-bar/task-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaningTableComponent,
    TaskBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
