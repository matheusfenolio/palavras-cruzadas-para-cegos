# Palavras cruzadas acessível a deficientes visuais

  Trabalho de Conclusão de Curso apresentado como exigência parcial para obtenção do título de Bacharel em Engenharia da Computação do Centro Regional Universitário de Espírito Santo do Pinhal à Banca Examinadora sob orientação do Prof. Dr. José Tarcísio Franco de Camargo. 
  Através do jogo, pretende-se que os portadores de deficiência visual desenvolvam a habilidade de utilizar o mouse. Além disso, buscamos desenvolver algo lúdico para o entretenimento de portadores de outros tipos de deficiência, como a auditiva.  

## Implementação

### Instalação

#### Linux

  Você pode usar uma versão que mais te agrade, porém é recomendado que se utilize *18.04LTS* ou superior. Para realizar o download da imagem você pode acessar https://ubuntu.com/download/server. Com o sistema instalado vamos para a instalação dos componentes necessários. Todos os comando serão executados no terminal do sistema em modo *SUDO*
  
#### Preparação

```
sudo
```

Após este comando será requisitado a senha do usuário. 
Com o a senha digitada e o terminal em modo sudo, vamos fazer uma atualização do sistema.

```
sudo apt-get update
sudo apt-get upgrade
```

Feito isso, vamos para as próximas etapas.
  
##### Apache

```
apt install apache2
```

Após a execução deste comando você poderá acessar a pagina inicial do Apache, digitando o IP do servidor no navegador de qualquer computador na rede.

##### PHP

```
apt install -y php php-cli php-common php-gd php-mbstring php-intl php-xml php-zip php-pear libapache2-mod-php
```

Para testarmos se a instalação ocorreu corretamente vamos criar um arquivo de PHP em /var/www/html/test.php

```
nano /var/www/html/teste.php
```

Feito isso digite dentro do arquivo

```php
<?php phpinfo(); ?>
```

Aperte as teclas *CTRL+O* para salvar e *CTRL+X* para fechar o editor. Agora vamos acessar nossa nova pagina, para isso, vá ao navegador novamente e digite o IP do servidor, mas dessa vez você vai adicionar /teste.php, vai ficar assim *IPSERVIDOR/teste.php*. Você deverá ver variás informações referentes a versão instalada do PHP.

##### MySQL

```
apt install -y mysql-server mysql-client php-mysql
```

Após a instalação você deve executar o comando para abrir o prompt de configuração.

```
mysql_secure_installation
```

*Lembre-se de guardar as informações caso precise alterar no projeto*

##### phpMyAdmin

Essa é uma ferramenta para facilitar o uso do MySQL, por ele você poderá manejar seu banco de dados.

```
apt install -y phpmyadmin
```

Para acessá-lo basta digitar *IPSERVIOR/phpmyadmin* no browser.

#### Importação do banco de dados

Dentro do proeto existe um arquivo chamado BD.sql, ele contém os scripts prontos para criar a base de dados para o jogo funcionar. Vamos aos procedimentos: 

* Entrar no phpMyAdmin pelo endereço IPSERVIOR/phpmyadmin*.
* Fazer o login na plataforma. Se você realizou o procedimento apenas seguindo o usário deve ser *root* e o campo senha deve ficar vazio
* Clicar na aba *SQL* no topo da plataforma.
* Colar o script no campo de texto.
* Clicar em executar.

#### Importação do projeto

Feito todos esses passos seu servidor está pronto para hospedar o projeto. Você terá que apagar os dados contido em */var/www/html/test.php*

```
rm -r /var/www/html/*
```

Agora precisamos copiar nossos arquivos para dentro dessa pasta.Existem diversas maneiras, porém vou realizar essa tarefa clonando o este repositório direto na pasta desejada. Para isso vamos instalar no *GIT* no servidor.

```
apt install git
```

Agora vamos acessar a pasta no terminar.

```
cd /var/www/html/
```

Clonamos o projeto.

```
git clone https://github.com/matheusfenolio/palavras-cruzadas-para-cegos.git
```

Porém ele vai criar uma pastar a mais dentro do diretório, por isso, precisamos levar os arquivos para pasta correta.

```
mv -f palavras-cruzadas-para-cegos/* /var/www/html/
```

Pronto. Podemos deixar a pasta vazia lá mesmo, caso haja um update no projeto basta realizar o mesmo processo a partir do clone. Você pode acessar o jogo apenas digitando o IP do servidor no browser.

## Publicação

Agora com seu servidor rodando vamos torna-lo acessível a outras pessoas na internet. Para isso vamos utilizar mais algumas ferramentas.

#### NoIP

* Crie uma conta gratuita em https://www.noip.com/pt-BR/sign-up.
* Crie um novo DDNS ao seu gosto. Ex: jogoacessivel.ddns.net.

#### Configuração de portas

Agora que você ja tem o servidor e um DDNS para redireciona-lo pela internet, vamos configurar o roteador.

* Configure um NAT com o protocolo TCP na porta 80 redirecionando para o IP do ser servidor, também na porta 80. Caso seu provedor bloqueie a publicaçao da prota 80, basta troca-la por qualquer outra (Ex 5000), redireconando internamente para a porta 80.
* Configure o DDNS do NoIP para que seu roteador faça a atualização do IP automaticamente.

*Infelizmente esses passos são diferenciados para cada tipo de equipamento, porém a lógica é a mesma*

#### Acessando o jogo

Com tudo configurado corretamente, você pode acessar seu jogo digitando o DDNS criado no seu browser.

*jogoacessivel.ddns.net ou jogoacessivel.ddns.net:5000*

## Considerações

Esse procedimento foca em configurar o projeto para rodar em um servidor *LAMP* devido a sua versatilidade e acessibilidade, ja que nenhum desses componentes requerem uma licença para uso. Porém pode ser ajustado para rodar no *IIS* ou qualquer outra forma que você desejar, desde que ele supra todos os serviços exigidos. Caso você apenas esteja interessado em rodar local ou realizar alterações, poderá ser utilizado programas como o *XAMP* ou *VertrigoServ*

## Contato

Caso queira enterar em contato para tirar alguma duvida, sugestão ou critica, fique a vontade para me enviar um email mtfprado@outlook.com.
