# Prova técnica Frontend

A prova tecnica Frontend tem como objetivo medir as qualificações tecnicas ao profissional que está sendo aplicada. Podemos observar alguns pré requisitos para a resolução do teste, que são:

1. Versione o projeto React (TypeScript ou JavaScript) no github.com e crie a estrutura de branches baseadas no GitFlow.
2. Faça uma tela com formulário para busca de endereços por CEP na API http://viacep.com.br/ws/01001000/json/ usando axios.
3. Estilize a tela para busca de CEP com CSS próprio ("manual").
4. Desenvolva um CRUD RESTful API para a entidade "Noticia". A entidade precisa ter apenas os atributos "titulo" e "descricao". Use um servidor JSON como o json-server para manter o backend.
5. Implemente um teste conforme a metodologia BDD para a da busca de endereços por CEP.
6. Crie um dockerfile para a aplicação e execute localmente.
7. Inclua no README instruções detalhadas sobre como configurar, executar, e testar a aplicação, tanto localmente quanto usando Docker.
8. Justifique a estrutura de pastas/arquivos criada.

## Resolução e descrição do projeto

O Código foi versionado utilizando a estrutura de branches baseadas no GitFlow, com base em algumas documentações padronizadas como a da [ATLASSIAN](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=O%20que%20%C3%A9%20Gitflow%3F,por%20Vincent%20Driessen%20no%20nvie.) e os commits com base nessa documentação oferecida por alguns desenvolvedores da comunidade [Padrões de commit](https://github.com/iuricode/padroes-de-commits).

O projeto frontend foi iniciado com a segunda ação "Faça uma tela com formulário para busca de endereços por CEP na API viacep", e assim foi feito. Dentro da pasta app, no arquivo *page.tsx* foi criado dois link de redirecionamento para duas paginas que tambem se encontram dentro da pasta app, "noticia" para a criação do crud com o servidor fake json-server e a outra pasta chamada "endereco" referênte a pagina de endereço e tarefa a qual iremos falar agora. 

Nesta ação eu optei por deixar todo o codigo e chamada da api dentro do arquivo *page.tsx*, para um projeto escalonável a ideia seria quebrar ou dividir esses codigos dessa funcionalidade em partes para que sejam reutilizados, mas por conta do tempo e por ser apenas um conjunto de funcionalidade que irão agregar quase a mesma função, foi optado por deixar tudo em um só arquivo, sendo assim, o unico arquivo que teriamos a mais neste modelo de aquitetura simplista seria o arquivo de estilização *page.css*.

Para o desenvolvimento da estilização do projeto, assim como descrito nos requisitos, foi utilizado o CSS padrão, sem o uso de algum outro compilador de estilo. 


Ao criar um clone do projeto do githib com o comando *git clone url_do_projeto*, será necessário que instale as dependências do projeto. Para isso utilize o comando _npm install_ dentro da pasta do projeto. 

> *Importante*: É importante lembrar que para que o projeto rode, é necessário ter instalados no seu computador/maquina os seguintes programas:

* [NodeJS](https://nodejs.org/en)
* [Docker](https://www.docker.com/) ou diretamente um banco de dados. 
* [Postgres](https://www.postgresql.org/) Caso tenha instalado o docker, assim que estiver no seu editor de código e executar o comando: docker compose up, o seu banco será configurado automaticamente.

Em Seguida depois de instalado as ferramentas acima, com o seu editor de código, entre na pasta do porjeto, acesse a pasta frontend com o seu terminal, execute o comando "npm install" para instalar as dependencias, e o comando "npm run dev" para rodar o seu projeto react, em seguida abra um outro terminal para rodar o seu servidor json-server, assim com descrito nas instruções a seguir. 

## API - Json Server

Para subirmos o servidor json-server é necessário que rode o seguinte comando no terminal do seu editor de código:

> json-server --watch ./api/db.json --port 4000

É importante ressaltar que a porta utilizada para essa api foi a 4000, caso queira rodar o projeto em outra porta, é necessário efetuar as devidas alterações da porta.

### 🔥Pronto!!!

Mais facil do que imaginou né!? Agora com isso é possivel acessar o projeto no seu navegador pela seguinte url: http://localhost:3000/

Espero que gostem, estou super animado para ouvir um feedback de vocês, caso tenham alguma dúvia, eu estarei a disposição para mais esclarecimentos. Até mais!