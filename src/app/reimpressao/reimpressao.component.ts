import { ReimpressaoService } from './reimpressao.service';
import { Component, OnInit  } from '@angular/core';
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

  firstFormGroup:  FormGroup;
  secondFormGroup: FormGroup;
  dataQueryReimp:  any;

  reInspec   = 'nao';
  fatorConv  = '100m';
  codBobina  = '';
  seq        = '14';
  produto    = '';
  tipoProd   = '';
  opcao      = 'Reimpressao';
  Empresa    = 'Corfio';
  Projeto    = 'Angular';

  erroReimp  = false;

  itCodigo    = '';
  Impressora  = 'LPT1';
  Maquina     = '';
  Metros      = '';
  codRie      = 0;
  fase        = 1;
  descItem    = '';
  // metros      = '0';
  peso        = '0';
  pesoBalanca = 'no';
  Quant       = 0;
  PesoBal     = '0.000';
  blockMetros = false;

  constructor( private formBuilder:        FormBuilder,
               private reimpressaoService: ReimpressaoService,
               private snackBar:           MatSnackBar) { }

  ngOnInit() {


    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  sendWithEnter(event) {
    if ( event.key === 'Enter' ) {
      this.consultaReimpressao();
    }
  }

  reprintEtq() {this.reimpressaoService.sendReimp(this.Quant,
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
                                                  this.snackBar.open('Resposta: ' + res, '[x]Fechar', { duration: 15000 });
                                                }); }

  consultaPesoBalanca(pesobalanca) {
    if (pesobalanca === 'yes') {
      console.log( 'data send to: ' + this.itCodigo + ' ' + this.seq + ' ' + this.Empresa );
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
