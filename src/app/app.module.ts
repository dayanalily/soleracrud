import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './component/crud/crud.component';
import { AutosComponent } from './component/autos/autos.component';
import { SaludComponent } from './component/salud/salud.component';
import { HogarComponent } from './component/hogar/hogar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    AutosComponent,
    SaludComponent,
    HogarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
