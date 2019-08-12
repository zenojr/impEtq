import { ImpressaoService }                   from './impressao.service';
import { Component, OnInit, OnDestroy }       from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription, Observable }           from 'rxjs';
import { MatSnackBar }                        from '@angular/material/snack-bar';

@Component({
  selector:    'app-impressao',
  templateUrl: './impressao.component.html',
  styleUrls:   ['./impressao.component.scss']
})
export class ImpressaoComponent implements OnInit, OnDestroy {
  firstObsSubs:    Subscription;
  firstFormGroup:  FormGroup;
  secondFormGroup: FormGroup;
  dataQuery:       any;
  reinspecao = false;
  isLinear   = true;
  fatorConv  = '100';
  codBobina  = '';
  reInspec   = 'nao';
  produto    = '';
  tipoProd   = '';
  opcao      = 'Impressao';
  erro       = false;
  Quant      = 0;
  itCodigo   = '';
  Impressora = 'LPT1';
  Maquina    = '';
  Metros     = '';
  codRie     = 0;
  fase       = 1;
  Empresa    = 'Corfio';
  Projeto    = 'Angular';

  constructor( public  impService:  ImpressaoService,
               private formBuilder: FormBuilder,
               private snackBar:    MatSnackBar ) { }

  ngOnInit() {

    this.firstFormGroup  = this.formBuilder.group({firstCtrl:
                                                  ['', Validators.required]});
    this.secondFormGroup = this.formBuilder.group({ secondCtrl:
                                                  ['', Validators.required] });
  }

  ngOnDestroy() {}

  printEtq()  { this.impService.sendImp(this.Quant,
                                        this.itCodigo,
                                        this.Impressora,
                                        this.Maquina,
                                        this.Metros,
                                        this.codRie,
                                        this.codBobina,
                                        this.fase,
                                        this.Empresa,
                                        this.Projeto)
                                        .subscribe( res => {
                                          console.log(res);
                                          this.snackBar.open('Resposta: ' + res, '[x]Fechar', { duration: 15000 });
                                        });
  }

  checkReinsp() { if (this.reinspecao === false) {
                      this.reInspec  = 'sim';
                      this.itCodigo  = '';
                      this.codRie    = 0;
                      this.codBobina = '';
                      this.dataQuery = null;
                    } else {
                      this.reInspec = 'nao';
                      this.itCodigo  = '';
                      this.codRie    = 0;
                      this.codBobina = '';
                      this.dataQuery = null;
                    }
  }

  consultaImpressao() {
    this.impService.getImpressao( this.fatorConv,
                                  this.codBobina,
                                  this.reInspec,
                                  this.produto,
                                  this.tipoProd,
                                  this.opcao)
                                  .subscribe( doc => {
                                    if ( doc.includes('Erro') ) {
                                      this.snackBar.open('Erro: ' + doc, '[x]Fechar', { duration: 20000 });
                                      this.dataQuery = doc;
                                      this.erro      = true;
                                      // this.codBobina = '';
                                      console.log(this.dataQuery);
                                    } else {
                                      this.erro      = false;
                                      let data       = this.impService.convertXMLtoJSON(doc);
                                      data           = data['Root'];
                                      data           = data['ttItem'];
                                      data           = data['Registro'];
                                      this.dataQuery = data;
                                      this.itCodigo  = data['itCodigo'];
                                      this.codRie    = data['codRie'];
                                      console.log(this.itCodigo);
                                      console.log(data);
                                    }
                                  });
}

  sendWithEnter(event) {
    if ( event.key === 'Enter' ) {
      this.consultaImpressao();
    }
  }

  consultaImpObservable() {
    const customObservable = Observable.create( observer => {
                                                const req = this.impService.getImpressao(this.fatorConv, this.codBobina,
                                                                                         this.reInspec, this.produto,
                                                                                         this.tipoProd, this.opcao);
                                                observer.next(req);
    });
    this.firstObsSubs = customObservable.subscribe( doc => {
                                                    // let data       = this.impService.convertXMLtoJSON(doc);
                                                    
                                                    
                                                    console.log(doc);
    });

  }

}
