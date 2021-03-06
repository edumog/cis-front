import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StandardizerComponent } from './components/standardizer/standardizer.component';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';

const MaterialModules = [
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatTableModule,
  MatSelectModule,
  MatPaginatorModule
]

@NgModule({
  declarations: [
    AppComponent,
    StandardizerComponent,
    ClientsTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    [...MaterialModules]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
