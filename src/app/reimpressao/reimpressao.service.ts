import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Injectable({
  providedIn: 'root'
})
export class ReimpressaoService {

  urlBase   = 'http://192.168.0.7/cgi-bin/wspd_cgi.sh/WService=emswebelt/etq001V2ws.p?';
  paramTest = 'codBobina=419072409&fatorConv=100m&opcao=Reimpressao&produto=Rolo&reInspec=nao&seq=1&tipoProd=%5Bobject%20Object%5D';

  constructor( private http:     HttpClient,
               private xml2Json: NgxXml2jsonService ) { }


  getDataTest() { return this.http.get( this.urlBase + this.paramTest,
    { responseType: 'text' }); }

}


