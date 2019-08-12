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


  constructor( private formBuilder:        FormBuilder,
               private reimpressaoService: ReimpressaoService,
               private snackBar:           MatSnackBar) { }

  ngOnInit() {

    this.consultaReimpressao();

    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  consultaReimpressao() {
    this.reimpressaoService.getDataTest().subscribe( doc => console.log(doc) );
  }


}
