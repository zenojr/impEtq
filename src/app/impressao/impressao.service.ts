import { Injectable }         from '@angular/core';
import { HttpClient }         from '@angular/common/http';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Injectable({
  providedIn: 'root'
})
export class ImpressaoService {

  urlImpressao = 'http://192.168.0.7/cgi-bin/wspd_cgi.sh/WService=emswebelt/etq001V2ws.p';
  paramImpr    = '?fatorConv=100m&codBobina=b201&reInspec=nao&produto=Rolo&tipoProd=Produto%20Padr%C3%A3o&opcao=Impressao';
  urlEtiquetas = 'http://192.168.0.7/cgi-bin/wspd_cgi.sh/WService=emswebelttst/etq002V2ws.p?';

  constructor( private http:     HttpClient,
               private xml2Json: NgxXml2jsonService ) { }

  getDataTest() { return this.http.get( this.urlImpressao + this.paramImpr,
                                        { responseType: 'text' }); }

  getImpressao( fatorConv, codBobina, reInspec, produto, tipoProd, opcao ) {
                return  this.http.get( this.urlImpressao + '?fatorConv=' + fatorConv + '&codBobina=' + codBobina +
                                       '&reInspec=' + reInspec + '&produto=' + produto + '&tipoProd=' + tipoProd +
                                       '&opcao=' + opcao, { responseType: 'text' }
                );
  }

  sendImp( Quant, itCodigo, Impressora, Maquina, Metros, codRie, codBobina, fase, Empresa, Projeto ) {
           return this.http.get( this.urlEtiquetas + '?Quant=' + Quant + '&itCodigo=' +  itCodigo +  '&Impressora=' +
                                 Impressora + '&Maquina=' + Maquina + '&Metros=' + Metros + '&codRie=' + codRie + '&codBobina=' +
                                 codBobina + '&fase=' + fase + '&Empresa=' + Empresa + '&Projeto=' + Projeto, { responseType: 'text' }
            );
  }

  convertXMLtoJSON(doc) { const dataRec = doc.toString();
                          const parser  = new DOMParser();
                          const xml     = parser.parseFromString( dataRec, 'text/xml' );
                          const obj     =  this.xml2Json.xmlToJson(xml);
                          return obj; }
  }
