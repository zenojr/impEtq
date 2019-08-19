import { ImpressorasService } from './impressoras.service';
import {           Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
     selector: 'app-impressoras',
  templateUrl: './impressoras.component.html',
    styleUrls: ['./impressoras.component.scss']
})
export class ImpressorasComponent implements OnInit {

  Impressora: string;

  constructor( private formBuilder: FormBuilder,
               private impressorasService: ImpressorasService ) { }

  ngOnInit() {
    this.impressorasService.currentStatus.subscribe( impressora => this.Impressora = impressora );
  }

  change() {
    this.impressorasService.changeStatus(this.Impressora);
  }



}
