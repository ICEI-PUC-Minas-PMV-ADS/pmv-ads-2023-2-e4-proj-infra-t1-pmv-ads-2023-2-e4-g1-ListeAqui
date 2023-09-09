# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

|    Clara Marquez  | Informações:                       |                                        |
|--------------------|------------------------------------|----------------------------------------|
|<img src="img/Clara.png" width = 250 >| **Idade:** 35 anos <br> **Ocupação:** Autônoma |**Aplicativos:**<br><ul>● Instagram <br>● WhatsApp <br>● Aplicativo de Banco</ul>|
|**Motivações:**<br><ul>● Como profissional autônoma, Ana tem uma agenda movimentada e muitas vezes trabalha em casa. Está constantemente em busca de maneiras de economizar tempo e simplificar suas tarefas diárias. </ul>|**Frustrações:**<br><ul>●  Uma das atividades que ela considera demorada é fazer compras de supermercado. Ela gostaria de encontrar uma maneira mais eficiente de planejar suas compras, economizar dinheiro e evitar esquecimentos de itens essenciais|**Hobbies/Histórias:**<br><ul>● Ir a exposições; <br>● Conhecer novos restaurantes;.</ul>|

|    Carlos Vieira | Informações:                       |                                        |
|--------------------|------------------------------------|----------------------------------------|
|<img src="img/Carlos.png" width = 250 >| **Idade:** 28 anos <br> **Ocupação:** Estudante/Estagiário <br> </ul>|**Aplicativos:**<br><ul>● Instagram <br>● WhatsApp <br> </ul>|
|**Motivações:**<br><ul>● Carlos está sempre ocupado com as aulas, trabalhos e estágio, e tem um orçamento limitado. Ele valoriza a economia e está sempre procurando maneiras de economizar dinheiro em suas compras de supermercado.</ul>|**Frustrações:**<br> </ul>●  Busca mandeiras de criar listas de compras acessíveis e conseguir salvar o quanto gastou para lembrar nas prõximas idas ao mercado.<br><ul>|**Hobbies/Histórias:**<br><ul>● Jogar videgames <br>● Ir a bares com amigos;.</ul>|

|    Cleide Santana  | Informações:                       |                                        |
|--------------------|------------------------------------|----------------------------------------|
|<img src="img/Cleide.png" width = 250 >| **Idade:** 43 anos <br> **Ocupação:** Dona de casa|**Aplicativos:**<br><ul>● Dacebook <br>● WhatsApp <br></ul>|
|**Motivações:**<br><ul>● Ela é a principal responsável pelas compras da família e está sempre buscando maneiras de tornar esse processo mais eficiente.. </ul>|**Frustrações:**<br><ul>●  Gostaria de ter uma ferramenta em que guardar o histórico anual das compras pois deseja ter uma perspectiva de quanto ẽ utilizado mensalmente nas compras.|**Hobbies/Histórias:**<br><ul>● Assistir filmes; <br>● Visitar parques com a família;.</ul>|
 

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Clara Marquez   |  Quero criar listas de compras facilmente.            | Para economizar tempo e garantir que não esqueça nenhum item essencial.|
| Clara Marquez  |  Preciso adicionar e remover itens da lista. | Para ajustar minha lista conforme necessário, mantendo-a atualizada.|
| Carlos Vieira   | Quero receber lembretes antes de ir às compras.| Para me lembrar de comprar os itens necessários quando estiver no supermercado.|
| Carlos Vieira  | Preciso categorizar os itens na lista. | Para organizar minha lista por seções, facilitando a busca no supermercado.|          
| Cleide Santana  | Quero ter a opção de compartilhar minha lista com outras pessoas.  | Para colaborar em listas de compras com minha família ou colegas de casa.|
| Cleide Santana  |Preciso acessar minha lista de compras de qualquer dispositivo | Para ter flexibilidade e acesso às minhas listas em diferentes lugares.|

## Modelagem do Processo de Negócio 

### Análise da Situação Atual
A Lista de Compras é uma tarefa simples e eficaz que auxilia no processo de compras. A situação
atual consiste em auxiliar o usuário na elaboração de um planejamento eficaz para suas compras, através da criação de uma lista de compras de forma digital, bem como na manutenção de um rigoroso controle financeiro.

### Descrição Geral da Proposta

O usuário não possui uma forma para consolidar em lista os seus itens a serem adquiridos no mercado, e também não sabe como rastrear  os valores das últimas compras de um determinado produto do mercado. O APP benefícia aqueles  que buscam uma ferramenta conveniente para criar listas de compras e manter seus gastos e planejamentos. Em seguida, o usuário computa produtos,compras e gastos através do aplicativo contribuindo para criação de uma vida financeira mais organizada e equilibrada.

### Processo 1 – Cadastro

É necessário que o usuário baixe o APP e faça seu cadastro. Em seguida, o usuário computa produtos e compras.facilidade para adicionar e remover itens da lista. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – Controle de Gastos


É possivel economizar tempo e garantir que não esqueça nenhum item essencial. O APP redige avisos aos usuarios  através de lembretes antes de ir às compras. O usuário também tem a opção de compartilhar a lista com outras pessoas.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.


## Requisitos

A tabela a seguir apresenta os requisitos funcionais do projeto, identificando suas respectivas prioridades de entrega.
    
### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O aplicativo deve permitir o cadastro de usuários   | ALTA | 
|RF-002| O aplicativo deve permitir o login de usuários   | ALTA | 
|RF-003| A aplicação deve conter uma aba após login no qual o usuário poderá cadastrar os itens da lista do mercado  | ALTA |
|RF-004| A aplicação deve apresentar funcionalidades para que os usuários possam consultar as listas já cadastradas   | ALTA | 
|RF-005| A aplicação deve apresentar funcionalidades para o usuário cadastrar o preço dos itens  | ALTA |
|RF-006| A aplicação deve conter uma aba que o usuário pesquise todos os preços já cadastrados no aplicativo para um determinado item   | ALTA |
|RF-007| A aplicação deve apresentar uma aba que mostre o consumo mensal e anual dos itens da lista  | ALTA | 
|RF-008| A aplicação deve permitir que dentro da lista, apareçam as opções de (excluir e editar) os itens cadastrados na lista   | ALTA| 
|RF-009| A aplicação deve colher o aceite do usuário para os termos de Política de Cookies / Privacidade, flutuante com alinhamento vertical inferior, e horizontal ao centro.    |MÉDIA |
|RF-010| A aplicação deve conter uma página de "Política de Privacidade” contendo informações sobre a privacidade.  | ALTA |  
|RF-011| A aplicação deve validar o login do usuário | ALTA |
|RF-012| A aplicação deve ter a possibilidade de redefinir senha.   | ALTA |
|RF-013| A aplicação deve conter uma página de “Fale conosco”.   | BAIXA | 
|RF-014| A aplicação deve apresentar imagens que auxiliem o entendimento do leitor para cada assunto exposto no corpo da página.    | ALTA |
|RF-015| A aplicação deve apresentar um rodapé com os contatos da página, contendo telefone, Whatsapp, Instagram, e-mail.  | MÉDIA | 

### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender, identificando suas prioridades de entrega.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser responsiva, permitindo a visualização em em dispositivos de celular, desktop, notebook e tablet.  |  ALTA | 
|RNF-002| A aplicação deve ter bom nível de contraste entre os elementos da tela em conformidade.      | MÉDIA | 
|RNF-003| O desenvolvimento front-end para Mobile deve ser através do framework React Native.  | ALTA | 
|RNF-004| O desenvolvimento front-end para desktop deve ser através de HTML/CSS/JavaScript  | ALTA | 
|RNF-005| O sistema back-end juntamente dom a API deve ser desenvolvido na linguagem C#, utilizando o framework - Asp.net Core. |ALTA |
|RNF-006| O banco de dados utilizado será NoSQL.   | MÉDIA | 
|RNF-007| A aplicação deve ter pontuação acima de 50 no requisito “Desempenho”, verificado pelo Lighthouse no navegador Google Chrome.   | MÉDIA |
|RNF-008| A aplicação  deve ter pontuação acima de 50 no requisito “Práticas Recomendadas”, verificado pelo Lighthouse no navegador Google Chrome.   | BAIXA | 
|RNF-009| A aplicação deve ter pontuação acima de 70 no requisito “Acessibilidade”, verificado pelo Lighthouse no navegador Google Chrome.  | MÉDIA |
|RNF-010| A aplicação deve ter pontuação acima de 60 no requisito “SEO”, verificado pelo Lighthouse no navegador Google Chrome.  | MÉDIA | 
|RNF-011| O sistema deverá estar disponível 24 horas por dia e 7 dias na semana. | ALTA |  

## Restrições

As restrições podem ser explicadas como tarefas que limitam e comprometem a execução e o desenvolvimento do projeto, servindo como marco delimitador daquilo que precisará ser realizado para que o projeto seja considerado pronto.  

 A tabela abaixo, apresenta as seguintes restrições do projeto. 

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| A aplicação deve restringir as tecnologias de Front-End com React Native, HTML, CSS, JavaScript e Back-End/API com linguagem de programação C# e framework asp.net core.  |
|02| A aplicação deve ter a homologação das fases de testes (QA) e operação assistida antes do processo de subida para produção.      |
|03| A aplicação deve conter a documentação técnica (Solution Design Document) para facilitar a equipe de suporte em futuros ajustes no código.  |
|04| A aplicação deverá ficar restrito a um único idioma, que será o “pt-br” (português).        |
|05| A aplicação deve ser entregue até o mês/ano de 12/2022.|
|06| O Back end da aplicação deve ser hospedado no smarterasp.net e o front end para web também, já a versão mobile deve estár publicada na play storage da google.      |
|07| O Banco de dados pode ser apenas do tipo NoSQL.  |

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

![Caso de uso](img/Casos-de-uso2.PNG)

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

![rastreabilidade](img/RASTREABILIDADE.PNG)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

Utilizando o PMBoK padrão todo o projeto será gerenciado utilizando planilhas integradas que possibilitarão a visualização da evolução dos trabalhos, bem como a possibilidade de melhoria prática a cada implementação. Para tal, todas as informações referentes ao cronograma, previsão de custos, recursos e equipe envolvidas, atividades ocupadas, reuniões, produção de documentos, entre outros, serão devidamente registradas com o objetivo de construir base documental sólida a fim de que o desenvolvimento do projeto transcorra obedecendo padrões e normas de excelência e qualidade.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

A equipe cumprirá suas tarefas de acordo com as habilidades e características subjetivas de cada membro, a fim de que cada um contribua e produza o melhor trabalho a ser incorporado ao projeto e consequentemente ao produto final. O gerenciamento das tarefas será registrado para que a produtividade e a qualidade sejam mantidas durante todo o desenvolvimento do projeto.

|       TAREFA             |        RESPONSÁVEL                 |             STATUS               |
|--------------------------|------------------------------------|----------------------------------|
| Definição de tema   |  Gabriel            | Concluído                                            |
| Documentação de contexto  | Silvia        | Concluído                                            |
| Personas / Histórias de usuários  | Jessica | Concluído                                          |
| Requisitos funcionais | João | Concluído                                                         |          
| Gerenciamento de tempo / Equipe  | Ana Carolina   | Concluído                                    |
| Orçamento  | Ana Carolina  | Pendente                                                            |
| Requisitos não funcionais | João   |  Concluído                                                  |
| Restrições  | João   |  Concluído                                                                |
| Diagrama de casos de uso | Rafael |  Concluído                                                   |
| Arquitetura de solução | Silvia  |  Pendente                                                     |
| Matriz de rastreabilidade | Rafael |  Concluído                                                  |
| Github  |   Todos  |     Em andamento                                                            | 
| Revisão do projeto  |  Todos    |      Pendente                                                  |
| Entrega do projeto  |   Todos    |     Pendente                                                  |


![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

Com base em todo o escopo produzido anteriormente, os custos do projeto serão gerenciados  na tabela abaixo:


|       RECURSOS NECESSÁRIOS           |        CUSTOS R$               |  
|--------------------------------------|--------------------------------|
|    Recursos Humanos                  |      R$ 300.000,00             |
|    Hardware	                       |      R$ 29.900,00              |
|    Rede                              |      R$ 3.100,00               |
|    Software                          |      R$ 26.000,00              |
|    Serviços                          |      R$ 5.000,00               |
|    Total                             |      R$ 364.000,00             | 


![Orçamento](img/02-orcamento.png)
