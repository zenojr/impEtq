import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImpressorasService {

  private statusPrinter = new BehaviorSubject<string>('LPT1');
  currentStatus         = this.statusPrinter.asObservable();

  private empresa = new BehaviorSubject<string>('InformeEmpresa');
  currentEmpresa  = this.empresa.asObservable();
  constructor() { }

  changeStatus(status: string) {
    this.statusPrinter.next(status);
  }

  changeEmpresa(statusEmpresa: string) {
    this.empresa.next(statusEmpresa);
  }

}
