import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Injectable({
  providedIn: 'root'
})
export class ImpressaoService {

  urlBase = 'http://192.168.0.7/cgi-bin/wspd_cgi.sh/WService=emswebelt/etq001V2ws.p';
  param = '?fatorConv=100m&codBobina=b201&reInspec=nao&produto=Rolo&tipoProd=Produto%20Padr%C3%A3o&opcao=Impressao';

  constructor( private http: HttpClient, private xml2Json: NgxXml2jsonService ) { }

  getData() {
    return this.http.get( this.urlBase + this.param, { responseType: 'text' });
   }

   convertXMLtoJSON(doc) {
       console.log( 'run' );
       const dataRec = doc.toString();
       const parser = new DOMParser();
       const xml = parser.parseFromString( dataRec, 'text/xml' );
       const obj =  this.xml2Json.xmlToJson(xml);
       return obj;
   }

  //  getParam() {

  //  }

}
