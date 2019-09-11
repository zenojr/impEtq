import { ImpressorasService                 } from './../impressoras/impressoras.service';
import { ImpressaoService                   } from './impressao.service';
import { Component, OnInit, OnDestroy       } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription, Observable           } from 'rxjs';
import { MatSnackBar                        } from '@angular/material/snack-bar';


@Component({
     selector: 'app-impressao',
  templateUrl: './impressao.component.html',
    styleUrls: ['./impressao.component.scss']
})
export class ImpressaoComponent implements OnInit, OnDestroy {
     firstObsSubs: Subscription;
   firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
    sendFormGroup: FormGroup;
        dataQuery: any;
            Quant: number;
          Maquina: number;
       reinspecao = false;
         isLinear = true;
        fatorConv = '100';
        codBobina = '';
         reInspec = 'nao';
          produto = '';
         tipoProd = '';
            opcao = 'Impressao';
             erro = false;
         itCodigo = '';
       Impressora = 'LPT1';
           Metros = 0;
           codRie = 0;
             fase = 0;
          Empresa = '';
          Projeto = 'Angular';

  constructor( public          impService: ImpressaoService,
               private        formBuilder: FormBuilder,
               private           snackBar: MatSnackBar,
               private impressorasService: ImpressorasService) { }

  ngOnInit() {
    this.firstFormGroup  = this.formBuilder.group(
        {firstCtrl: ['', Validators.required]});

    this.secondFormGroup = this.formBuilder.group({
        secondCtrl: ['', Validators.required] });

    this.sendFormGroup = this.formBuilder.group({
         maquinaControl: ['', Validators.required],
        etiquetaControl: ['', Validators.required]
      });

    this.impressorasService.currentStatus.subscribe( impressora => this.Impressora = impressora );
    this.impressorasService.currentEmpresa.subscribe( empresa => this.Empresa = empresa );

  }

  ngOnDestroy() {}

  printEtq() {
    console.log(this.Quant);
    console.log(this.Maquina);

    if ( this.Quant != null && this.Maquina != null ) {
        this.impService.sendImp(
        this.Quant,
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
        this.Quant = 0;
        this.codBobina = '';
        this.Metros = 0;
    } else {
      this.snackBar.open('Informe a maquina, e a quantidade de etiquetas', '[x]Fechar', { duration: 15000 });
    }
  }

  checkReinsp() {
    if (this.reinspecao === false) {
        this.reInspec  = 'sim';
        this.itCodigo  = '';
        this.codRie    = 0;
        this.codBobina = '';
        this.dataQuery = null;
    } else {
        this.reInspec  = 'nao';
        this.itCodigo  = '';
        this.codRie    = 0;
        this.codBobina = '';
        this.dataQuery = null;
    }
  }

  consultaImpressao() {
    this.Quant = null;
    this.Maquina = null;
    this.impService.getImpressao( this.fatorConv,
                                  this.codBobina,
                                  this.reInspec,
                                  this.produto,
                                  this.tipoProd,
                                  this.opcao,
                                  this.Projeto)
                                  .subscribe( doc => {
                                    if ( doc.includes('Erro') ) {
                                      this.snackBar.open(doc, '[x]Fechar', { duration: 20000 });
                                      this.dataQuery = doc;
                                      this.erro      = true;
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
                                      this.fase      = data['fase'];
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
    const customObservable = Observable.create(observer  => {
                                               const req = this.impService.getImpressao(this.fatorConv,
                                                                                        this.codBobina,
                                                                                        this.reInspec,
                                                                                        this.produto,
                                                                                        this.tipoProd,
                                                                                        this.opcao,
                                                                                        this.Projeto);
                                               observer.next(req);
    });
    this.firstObsSubs = customObservable.subscribe( doc => {
                                                    // let data       = this.impService.convertXMLtoJSON(doc);

                                                    console.log(doc);
    });
  }
}
