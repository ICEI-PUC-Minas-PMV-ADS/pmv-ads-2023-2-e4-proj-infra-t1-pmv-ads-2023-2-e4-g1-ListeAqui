# Programação de Funcionalidades

Conforme o fluxo de usuários detalharemos a implementação das  funcionalidades de Login, Cadastro de Usuários e Recuperação de Senha em nosso sistema. Essas funcionalidades são executadas inteiramente no front-end da aplicação, utilizando o Firebase Authentication para garantir uma autenticação segura e eficiente. Adicionalmente, integramos o Cloud Firestore, um banco de dados NoSQL orientado a documentos, para o gerenciamento eficaz de dados dos usuários. Essa escolha estratégica pelo Firestore, devido à sua natureza NoSQL, oferece flexibilidade, escalabilidade e uma modelagem de dados dinâmica, que se alinha perfeitamente às necessidades de armazenamento de dados variáveis e em constante evolução do nosso sistema. Juntas, essas tecnologias proporcionam uma solução robusta para autenticação de usuários e gerenciamento de dados, assegurando uma excelente experiência de usuário.

A implementação seguiu a solicitação dos seguintes requisitos:

RF-01 - O aplicativo deve permitir o cadastro de usuários

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t1-pmv-ads-2023-2-e4-g1-ListeAqui/assets/86859418/00a925a6-cfab-472c-96ba-7450f545218c"></img>

RF-02 - O aplicativo deve permitir o login de usuários

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t1-pmv-ads-2023-2-e4-g1-ListeAqui/assets/86859418/4f11d7fb-d6d9-4a6f-bb83-4af79154d519"></img>

RF-11 - A aplicação deve validar o login do usuário

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t1-pmv-ads-2023-2-e4-g1-ListeAqui/assets/86859418/ac8b0d1b-fd90-417c-a22e-a0d43b5a853a"></img>

RF-12 - A aplicação deve ter a possibilidade de redefinir senha.
