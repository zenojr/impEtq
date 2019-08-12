import { ReimpressaoService } from './reimpressao.service';
import { ImpressaoService }                   from './../impressao/impressao.service';
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

  reInspec  = 'nao';
  fatorConv = '100m';
  codBobina = '';
  seq       = '';
  produto   = '';
  tipoProd  = '';
  opcao     = '';


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

  consultaReimpressao() {
    console.log('Consulta reimp');
    this.reimpressaoService.getDataTest()
                           .subscribe( doc => {
                             let data            = this.reimpressaoService.convertXMLtoJSON(doc);
                             data                = data['Root'];
                             data                = data['ttItem'];
                             data                = data['Registro'];
                             this.dataQueryReimp = data;
                             console.log(data);
                           });
  }

}
