#versao do node
FROM node:20.5.1-slim 
#usuario padrao do contariner
USER node
#diretorio de trabalho onde nossa aplicacao vai ficar
WORKDIR /home/node/app

CMD [ "tail", "-f", "/dev/null" ]