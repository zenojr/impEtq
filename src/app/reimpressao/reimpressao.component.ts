import { ReimpressaoService } from './reimpressao.service';
import { Component, OnInit }                  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar }                        from '@angular/material/snack-bar';

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

  itCodigo   = '';
  Impressora = 'LPT1';
  Maquina    = '';
  Metros     = '';
  codRie     = 0;
  fase       = 1;

  erro       = false;

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

  


  consultaReimpressao() {
    console.log('Consulta reimp');
    this.reimpressaoService.getData(this.reInspec,
                                    this.fatorConv,
                                    this.codBobina,
                                    this.seq,
                                    this.produto,
                                    this.tipoProd,
                                    this.opcao)
                           .subscribe(doc => {
                                      console.log(doc);
                                      if (doc.includes('Erro')) {
                                        this.snackBar.open('Erro: ' + doc, '[x]Fechar', { duration: 20000 });
                                        this.dataQueryReimp = doc;
                                        this.erro           = true;
                                        console.log(doc);
                                      } else {
                                        let data            = this.reimpressaoService.convertXMLtoJSON(doc);
                                        data                = data['Root'];
                                        data                = data['ttItem'];
                                        data                = data['Registro'];
                                        this.dataQueryReimp = data;
                                        console.log(data);
                                      }
                           });
  }

}
