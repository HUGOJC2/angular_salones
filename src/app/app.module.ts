import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PisoC1Component } from './culturales/piso1/piso1.component'; 
import { PisoI1Component } from './ingenieria/piso1/piso1.component';
import { PisoI2Component } from './ingenieria/piso2/piso2.component'; 
import { PisoI3Component } from './ingenieria/piso3/piso3.component'; 
import { PisoS1Component } from './sociales/piso1/piso1.component';
import { PisoS2Component } from './sociales/piso2/piso2.component';
import { PisoS3Component } from './sociales/piso3/piso3.component';
import { CardModule } from 'primeng/card';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    PisoC1Component,
    PisoI1Component,
    PisoI2Component,
    PisoI3Component,
    PisoS1Component,
    PisoS2Component,
    PisoS3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastModule,
    ToolbarModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    CardModule,
    SelectButtonModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
