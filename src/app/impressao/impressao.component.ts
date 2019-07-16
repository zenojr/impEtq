import { ImpressaoService } from './impressao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impressao',
  templateUrl: './impressao.component.html',
  styleUrls: ['./impressao.component.css']
})
export class ImpressaoComponent implements OnInit {

  dados: any;
  constructor( public impService: ImpressaoService ) { }

  ngOnInit() {
    this.consulta();
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
