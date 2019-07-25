import { ImpressaoService } from './impressao.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-impressao',
  templateUrl: './impressao.component.html',
  styleUrls: ['./impressao.component.scss']
})
export class ImpressaoComponent implements OnInit {
  selectedProd = '';
  selectedTipoProd = '';
  dados: any;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  reinspecao = false;
  checked = false;

  constructor( public impService: ImpressaoService, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.consulta();
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
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

  change() {
    if (this.reinspecao === false) {
      
    } else {

    }
  }

}
