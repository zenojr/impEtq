  
# Sistema de impressão de etiquetas
Recebe solicitação de Impressão e Reimpressão de etiquetas

## WebService:
192.168.0.241 - utiliza a porta 4202 para atender a impressão de etiquetas na Eletrocal e porta 4203 para atender a Corfio.

## Setup do projeto (Necessário somente em caso de alteração no servidor); 
O projeto é atualizado através do Github para pegar as alterações de versão deve-se utilizar o comando `git pull` (Atenção: O comando git pull vai sobreescrever todos os parametros locais do projeto - Empresa e Porta. Após a execução deve-se configurar novamente para cada projeto conforme processo descrito abaixo). 

#### Serviço esta hospedado em pastas separadas no diretório `/zeno` no qual existe uma pasta para o Eletrocal `impEtqEletrocal` e outra para a Corfio `impEtqCorfio`.
Cada pasta de projeto (Eletrocal/Corfio) possui o parametro da Empresa definido como 'InformeEmpresa' por padrão no arquivo: `src\app\impressoras\impressoras.service.ts` o qual deve ser definido como `Eletrocal` ou `Corfio`. 
Após definir o parametro da empresa na pasta do projeto é necessário compilar o mesmo para produção através do comando: `ng build --prod`.
Também deve ser alterada a porta de execução do serviço no arquivo: `impEtq.js` alterando a porta em:
`const port = process.env.PORT || 4202;` (Verifique a porta correta para o projeto como supra citado).
 
 

 ## Autor: Zeno França Jr.
 ## Data: 15/08/2019
 ## Data Ver2.: 15/08/2019  Versão em Angular 8                                                                    




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
