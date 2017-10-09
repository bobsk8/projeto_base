FROM ubuntu:16.04
MAINTAINER Koji

RUN apt-get update \
 && apt-get install -y curl \
 && curl -sL https://deb.nodesource.com/setup_6.x | bash - \
 && apt-get install -y nodejs \ 
 && npm i nodemon -g \ 
 && npm i mocha -g
