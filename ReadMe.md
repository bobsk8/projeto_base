# APP Base

## Roteiro

 1. Instalação

## Instalação 

Há 4 etapas para instalar o aplicativo no Linux. Com imagens de maquina virtual com docker pre-instalada eles podem ser reduzido.  

1. *Instalar o Docker, Docker Compose e Angular CLI.
2. Executar o comento npm install dentro de server/client.
3. Entrar na pasta base do projeto e executar o segunte comando `sudo docker-compose up`.
4. Entrar na pasta server/client e executar o seguinte comando `npm start`.
5. Entrar no container do nodejs `sudo docker exec -it nome_container_nodejs bash` e executar `node bin/create-tables.js`
5. Acessar no 'http://localhost:4200'.

### * Intalação do Docker

# Como Usar

1. Instalar Docker
2. Configurar Docker
3. Instalar Docker-Compose
4. Instalar o Angular CLI
5. Iniciar o Programa

Ambiente: Ubuntu16.04LTS

#### Instalar Docker

Obs.. para Linux Mint deve instalar as dependencias abaixo.
```terminal
sudo apt-get install -y docker.io cgroup-lite apparmor
```

```terminal
sudo apt-get update
sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
sudo apt-add-repository 'deb https://apt.dockerproject.org/repo ubuntu-xenial main'
sudo apt-get update
sudo apt-get install -y docker-engine
```
Ref: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04


#### Configurar Docker

caso tiver problema com DNSs publicos configure de acordo com o seu ambiente.

Se você usa Ubuntu16.04  
criar o arquivo abaixo
```terminal
sudo vi /etc/docker/daemon.json
```
e adicionar a configuração
```json
{"dns":["seu_ip"]}
```
--------------------------------

Se você usa Ubuntu14.04  
tirar o # antes do configuração no arquivo abaixo e
alterar o IP do DNS
/etc/default/docker
```terminal
DOCKER_OPTS="--dns 172.21.0.13 --dns 172.21.0.54"
```

Reinicie o Docker e o terminal que você está utilizando.
```terminal
sudo service restart docker
```


#### Instalar Docker-Compose

```terminal
sudo apt-get install docker-compose
```
Ref: https://docs.docker.com/compose/install/#/undefined

#### Instalar o Angular CLI

```terminal
sudo npm install -g @angular/cli
```
Ref: https://angular.io/guide/quickstart


#### Iniciar o Docker

Cheque se não há nenhum progaram utilizando a porta 80.
caso exista termine com o comando abaixo.
```terminal
sudo netstat -peanut | grep ":80" | grep "LISTEN"
```

setiver parar com o comando abaixo.
```terminal
sudo service <programa> stop
```