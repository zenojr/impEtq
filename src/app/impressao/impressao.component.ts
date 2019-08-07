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
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  reinspecao  = false;
  isLinear    = true;
  fatorConv   = '100';
  codBobina   = '';
  reInspec    = 'nao';
  produto     = '';
  tipoProd    = '';
  opcao       = 'Impressao';
  erro        = false;

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

  checkReinsp() {
    if (this.reinspecao === false) {
      this.reInspec = 'sim';
    } else {
      this.reInspec = 'nao';
    }
  }

  consultaImpressao() {
  this.impService.getImpressao( this.fatorConv, this.codBobina, this.reInspec,
  this.produto, this.tipoProd, this.opcao)
  .subscribe( doc => {
    console.log(doc);
    if ( doc.includes('Erro') ) {
      alert('ERRO: ' + doc + ' ');
      this.dataQuery    = doc;
      this.erro         = true;
      this.codBobina    = '';
      console.log(this.dataQuery);
    } else {
      this.erro = false;
      let data  = this.impService.convertXMLtoJSON(doc);
      data      = data['Root'];
      data      = data['ttItem'];
      data      = data['Registro'];
      console.log(data);
      this.dataQuery = data;
    }
    });

  }

  consultaImpObservable() {
    const customObservable = Observable.create( observer => {
      const req = this.impService.getImpressao( this.fatorConv, this.codBobina,
      this.reInspec, this.produto, this.tipoProd, this.opcao);
      observer.next(req);
    });

    this.firstObsSubs = customObservable.subscribe( doc => {
      let data  = this.impService.convertXMLtoJSON(doc);
      data      = data['Root'];
      data      = data['ttItem'];
      data      = data['Registro'];
      console.log(data);
    });
    this.firstObsSubs.unsubscribe();
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
