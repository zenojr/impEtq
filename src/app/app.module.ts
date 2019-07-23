import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImpressaoComponent } from './impressao/impressao.component';
import { ImpressaoService } from './impressao/impressao.service';
import { PrincipalComponent } from './principal/principal.component';
import { ReimpressaoComponent } from './reimpressao/reimpressao.component';


@NgModule({
  declarations: [
    AppComponent,
    ImpressaoComponent,
    PrincipalComponent,
    ReimpressaoComponent
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
