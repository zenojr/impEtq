import { ImpressaoService } from './impressao.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-impressao',
  templateUrl: './impressao.component.html',
  styleUrls: ['./impressao.component.scss']
})
export class ImpressaoComponent implements OnInit {
  selectedProd = null;
  selectedTipoProd = null;
  dados: any;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  reinspecao = false;
  checked = false;

  fatorConv = '100';
  codBobina = '';
  reInspec = '';
  produto = '';
  tipoProd = '';
  opcao = '';

  constructor( public impService: ImpressaoService, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.consulta();
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    console.log( 'fator:' + this.fatorConv);

  }



  consultaImpressao() {
    this.impService.getImpressao(
                    this.fatorConv, this.codBobina, this.reInspec, this.produto, this.tipoProd, this.opcao)
                    .subscribe( doc => {
                      console.log(doc);
                    });
  }

  consulta() {
    this.impService.getData().subscribe( doc => {
      let data = this.impService.convertXMLtoJSON(doc);
      data = data['Root'];
      data = data['ttItem'];
      data = data['Registro'];
      console.log(data);
      this.dados = data;
    });
  }

  

}
