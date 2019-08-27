import { ImpressorasService } from './../impressoras/impressoras.service';

import { ReimpressaoService } from './reimpressao.service';
import { Component, OnInit,
         Input              } from '@angular/core';
import { FormGroup,
         FormBuilder,
         Validators         } from '@angular/forms';
import { MatSnackBar        } from '@angular/material/snack-bar';


@Component({
  selector:    'app-reimpressao',
  templateUrl: './reimpressao.component.html',
  styleUrls:   ['./reimpressao.component.scss']
})
export class ReimpressaoComponent implements OnInit {

   firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
    sendFormGroup: FormGroup;
   dataQueryReimp: any;
           Metros: number;
            Quant: string;

  Impressora = 'LPT1';

  reInspec    = 'nao';
  fatorConv   = '';
  codBobina   = '';
  seq         = '';
  produto     = '';
  tipoProd    = '';
  opcao       = 'Reimpressao';
  Empresa     = '';
  Projeto     = 'Angular';
  erroReimp   = false;
  itCodigo    = '';
  Maquina     = '';
  codRie      = 0;
  fase        = 9;
  descItem    = '';
  peso        = '0';
  pesoBalanca = 'no';
  PesoBal     = '0.000';
  blockMetros = false;

  constructor( private        formBuilder: FormBuilder,
               private reimpressaoService: ReimpressaoService,
               private           snackBar: MatSnackBar,
               private impressorasService: ImpressorasService) { }
  ngOnInit() {

    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.sendFormGroup = this.formBuilder.group({
      metrosControl: [{value: '0', disabled: true}, Validators.required],
       quantControl: ['', Validators.required]
    });

    this.impressorasService.currentStatus.subscribe( impressora => this.Impressora = impressora );
    this.impressorasService.currentEmpresa.subscribe( empresa => this.Empresa = empresa );
  }


  sendWithEnter(event) {
    if ( event.key === 'Enter' ) {
      this.consultaReimpressao();
    }
  }

  reprintEtq() {
    if (this.Quant != null ) {
      this.reimpressaoService
      .sendReimp(this.Quant,
                 this.itCodigo,
                 this.Impressora,
                 this.Maquina,
                 this.Metros,
                 this.codRie,
                 this.codBobina,
                 this.seq,
                 this.PesoBal,
                 this.fase,
                 this.Empresa,
                 this.Projeto)
                 .subscribe( res => {
                 console.log(res);
                 console.log(this.Impressora);
                 this.snackBar.open('Resposta: ' + res, '[x]Fechar', { duration: 15000 });
                 });
    } else {
      this.snackBar.open('Informe a quantidade de etiquetas', '[x Fechar]', { duration: 15000 });
    }
  }

  consultaPesoBalanca(pesobalanca) {
    console.log('Entrada peso bal: ' + pesobalanca);
    console.log('entrada metros: ' + this.Metros);
    console.log('entrada peso: ' + this.peso);
    this.Metros = 0;
    this.peso = '0';
    if (pesobalanca === 'yes') {
        alert('peso bal ' + pesobalanca);
        this.blockMetros = true;
        this.reimpressaoService.getPesoBalanca(this.itCodigo,
                                               this.seq,
                                               this.Empresa)
                                                .subscribe(res => {
                                                let data    = this.reimpressaoService.convertXMLtoJSON(res);
                                                data        = data['Root'];
                                                data        = data['ttItem'];
                                                data        = data['Registro'];
                                                this.Metros = data['metros'];
                                                this.peso   = data['peso'];
                                                console.log('saida metros:' + this.Metros);
                                                console.log('saida peso:' + this.peso);
                                                console.log(this.Quant);
                                                console.log(data);
                                              });
    } else {
      console.log(pesobalanca);
    }
  }

  consultaReimpressao() {
    this.reimpressaoService.getData(this.reInspec,
                                    this.fatorConv,
                                    this.codBobina,
                                    this.seq,
                                    this.produto,
                                    this.tipoProd,
                                    this.opcao,
                                    this.Projeto)
                           .subscribe(doc => {
                                      if (doc.includes('Erro')) {
                                        this.snackBar.open( doc, '[x]Fechar', { duration: 20000 });
                                        this.dataQueryReimp = doc;
                                        this.erroReimp      = true;
                                        console.log(doc);
                                      } else {
                                        this.pesoBalanca    = 'no';
                                        console.log('change peso: ' + this.pesoBalanca);
                                        this.peso           = '0';
                                        this.Metros         = 0;
                                        this.erroReimp      = false;
                                        let data            = this.reimpressaoService.convertXMLtoJSON(doc);
                                        data                = data['Root'];
                                        data                = data['ttItem'];
                                        data                = data['Registro'];
                                        this.dataQueryReimp = data;
                                        this.pesoBalanca    = data['pesoBalanca'];
                                        this.itCodigo       = data['itCodigo'];
                                        this.blockMetros    = false;
                                        this.consultaPesoBalanca( this.pesoBalanca );
                                        console.log( data);
                                      }
                           }); }

}
