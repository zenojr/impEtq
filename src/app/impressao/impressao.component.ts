import { ImpressaoService } from './impressao.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-impressao',
  templateUrl: './impressao.component.html',
  styleUrls: ['./impressao.component.scss']
})
export class ImpressaoComponent implements OnInit {

  dados: any;
  isLinear = true;
  tipoProduto: FormGroup;
  produto: FormGroup;

  constructor( public impService: ImpressaoService, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.consulta();
    this.tipoProduto = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.produto = this.formBuilder.group({
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

}
