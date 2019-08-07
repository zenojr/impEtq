import { ImpressaoService } from './impressao.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-impressao',
  templateUrl: './impressao.component.html',
  styleUrls: ['./impressao.component.scss']
})
export class ImpressaoComponent implements OnInit, OnDestroy {
  firstObsSubs: Subscription;
  dataQuery: any;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  reinspecao = false;

  fatorConv = '100';
  codBobina = '';
  reInspec = 'nao';
  produto = '';
  tipoProd = '';
  opcao = 'Impressao';

  constructor( public impService: ImpressaoService, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    // this.consulta();
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  ngOnDestroy() {

  }

  consultaImpObservable() {
    const customObservable = Observable.create( observer => {
      const req = this.impService.getImpressao( this.fatorConv, this.codBobina, this.reInspec,
      this.produto, this.tipoProd, this.opcao);
      observer.next(req);
    });

    this.firstObsSubs = customObservable.subscribe( doc => {
      let data = this.impService.convertXMLtoJSON(doc);
      data = data['Root'];
      data = data['ttItem'];
      data = data['Registro'];
      console.log(data);
      this.dataQuery = data;
    });
  }

  consultaImpressao() {
    this.impService.getImpressao( this.fatorConv, this.codBobina, this.reInspec,
    this.produto, this.tipoProd, this.opcao)
    .subscribe( doc => {
      console.log(doc);
      if ( doc.includes('Erro') ) {
        alert('ERRO:' + doc);
      }
      let data = this.impService.convertXMLtoJSON(doc);
      data = data['Root'];
      data = data['ttItem'];
      data = data['Registro'];
      console.log(data);
      this.dataQuery = data;
    }, error => { console.log(error); });

  }

  // consulta() {
  //   this.impService.getData().subscribe( doc => {
  //     let data = this.impService.convertXMLtoJSON(doc);
  //     data = data['Root'];
  //     data = data['ttItem'];
  //     data = data['Registro'];
  //     console.log(data);
  //     this.dados = data;
  //   });
  // }

}
