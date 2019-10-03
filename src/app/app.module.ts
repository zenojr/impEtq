import { MaterialModule         } from './material.module';
import { BrowserModule          } from '@angular/platform-browser';
import { NgModule               } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule       } from '@angular/common/http';
import { AppRoutingModule       } from './app-routing.module';
import { AppComponent           } from './app.component';
import { ImpressaoComponent     } from './impressao/impressao.component';
import { ImpressaoService       } from './impressao/impressao.service';
import { PrincipalComponent     } from './principal/principal.component';
import { ReimpressaoComponent   } from './reimpressao/reimpressao.component';
import { ProdutoPipe            } from './impressao/produto.pipe';
import { ImpressorasComponent   } from './impressoras/impressoras.component';
import { ImpressorasService     } from './impressoras/impressoras.service';
import { ReimpressaoDirective } from './reimpressao/reimpressao.directive';


@NgModule({
  declarations: [
    AppComponent,
    ImpressaoComponent,
    PrincipalComponent,
    ReimpressaoComponent,
    ProdutoPipe,
    ImpressorasComponent,
    ReimpressaoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [ ImpressaoService, ImpressorasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
