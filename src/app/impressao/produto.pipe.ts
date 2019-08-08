import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'produto'
})
export class ProdutoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let dataOut: string;
    if ( value  === 'prodpadr' ) {
         dataOut =  'Produto padrão';
    } else if ( value === 'cordpar' ) {
         dataOut = 'Cordão Paralelo Torcido';
    } else {
         dataOut = 'Cobre Nú';
    }
    return dataOut;
  }

}

