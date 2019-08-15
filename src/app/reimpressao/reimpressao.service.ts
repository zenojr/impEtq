import { HttpClient         } from '@angular/common/http';
import { Injectable         } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Injectable({
  providedIn: 'root'
})
export class ReimpressaoService {

  urlConsulta    = 'http://192.168.0.7/cgi-bin/wspd_cgi.sh/WService=emswebelttst/etq001V2ws.p?';
  urlReimpressao = 'http://192.168.0.7/cgi-bin/wspd_cgi.sh/WService=emswebelt/etq002V2ws.p?';
  urlPesoBalanca = 'http://192.168.0.7/cgi-bin/wspd_cgi.sh/WService=emswebelt/etq004ws.p?';


  constructor( private     http: HttpClient,
               private xml2Json: NgxXml2jsonService ) { }

  getPesoBalanca(itCodigo,
                 seq,
                 Empresa) {return this.http.get(this.urlPesoBalanca + 'itCodigo=' + itCodigo +
                                                                      '&seq='     + seq      +
                                                                      '&Empresa=' + Empresa,
                                                                      {responseType: 'text'}); }

  sendReimp(Quant,
            itCodigo,
            Impressora,
            Maquina,
            Metros,
            codRie,
            codBobina,
            seq,
            PesoBal,
            fase,
            Empresa,
            Projeto) {return this.http.get(this.urlReimpressao + 'Quant='       + Quant      +
                                                                 '&itCodigo='   + itCodigo   +
                                                                 '&Impressora=' + Impressora +
                                                                 '&Maquina='    + Maquina    +
                                                                 '&Metros='     + Metros     +
                                                                 '&codRie='     + codRie     +
                                                                 '&codBobina='  + codBobina  +
                                                                 '&seq='        + seq        +
                                                                 '&PesoBal='    + PesoBal    +
                                                                 '&fase='       + fase       +
                                                                 '&Empresa='    + Empresa    +
                                                                 '&Projeto='    + Projeto,
                                                                 {responseType: 'text'}); }

  getData(reInspec,
          fatorConv,
          codBobina,
          seq,
          produto,
          tipoProd,
          opcao,
          Projeto) { return this.http.get(this.urlConsulta + 'reInspec='   + reInspec  +
                                                             '&fatorConv=' + fatorConv +
                                                             '&codBobina=' + codBobina +
                                                             '&seq='       + seq       +
                                                             '&produto='   + produto   +
                                                             '&tipoProd='  + tipoProd  +
                                                             '&opcao='     + opcao     +
                                                             '&Projeto='   + Projeto,
                                                             {responseType: 'text'}); }


  convertXMLtoJSON(doc) { const dataRec = doc.toString();
                          const parser  = new DOMParser();
                          const xml     = parser.parseFromString( dataRec, 'text/xml' );
                          const obj     =  this.xml2Json.xmlToJson(xml);
                          return obj; }

}


