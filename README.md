  
# Sistema de impressão de etiquetas
Recebe solicitação de Impressão e Reimpressão de etiquetas

## WebService:
192.168.0.241 - utiliza a porta `4202` para atender a impressão de etiquetas na Eletrocal e porta `5201` para atender a Corfio.
Para execução do projeto utilizar o comando : na pasta /zeno `./startAll` ou  `pm2 start impEtqEletrocal` para eletrocal e `pm2 start impEtqCorfio` para Corfio. Ambos os comandos devem ser executados dentro das pastas de seus respectivos projetos

## Setup do projeto (Necessário somente em caso de alteração); 
O projeto é atualizado através do Github para pegar as alterações de versão deve-se utilizar o comando `git pull` (Atenção: O comando git pull vai sobreescrever todos os parametros locais do projeto - (Empresa). Após a execução deve-se configurar novamente para cada projeto conforme processo descrito abaixo). 

Serviço esta hospedado em pastas separadas no diretório `/zeno` no qual existe uma pasta para o Eletrocal `impEtqEletrocal` e outra para a Corfio `impEtqCorfio`.
Cada pasta de projeto (Eletrocal/Corfio) possui o parametro da Empresa definido como `InformeEmpresa` por padrão no arquivo: `src\app\impressoras\impressoras.service.ts` o qual deve ser definido como `Eletrocal` ou `Corfio` em suas respectivas pastas. 
Após definir o parametro da empresa na pasta do projeto é necessário compilar o mesmo para produção através do comando: `ng build --prod --optimization`.

O projeto possui um arquivo de execução para Eletrocal `impEtqEletrocal.js` e outro para Corfio `impEtqCorfio`;
 
 
 ## Autor: Zeno França Jr.
 ## Data: 28/08/2019
 ## Data Ver2.: 28/08/2019  Versão em Angular 8                                                                    
