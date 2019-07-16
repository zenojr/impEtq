import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImpressaoComponent } from './impressao/impressao.component';
import { ImpressaoService } from './impressao/impressao.service';


@NgModule({
  declarations: [
    AppComponent,
    ImpressaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [ ImpressaoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
