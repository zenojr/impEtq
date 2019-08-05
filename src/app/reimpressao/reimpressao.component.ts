import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-reimpressao',
  templateUrl: './reimpressao.component.html',
  styleUrls: ['./reimpressao.component.scss']
})
export class ReimpressaoComponent implements OnInit {

  selectedProd = null;
  selectedTipoProd = null;
  dados: any;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  reinspecao = false;
  checked = false;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {

    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }

}
