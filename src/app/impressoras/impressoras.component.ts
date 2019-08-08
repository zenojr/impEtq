import { Component, OnInit }                  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector:    'app-impressoras',
  templateUrl: './impressoras.component.html',
  styleUrls:   ['./impressoras.component.scss']
})
export class ImpressorasComponent implements OnInit {

  dados:           any;
  firstFormGroup:  FormGroup;
  secondFormGroup: FormGroup;

  selectedProd     = null;
  selectedTipoProd = null;
  isLinear         = true;
  reinspecao       = false;
  checked          = false;

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
