# test-jest-puppeteer
POC de um projeto de teste utilizando Jest + Puppeteer

## O que é o Jest
É um framework de teste do facebook que provê uma lib de asserts. Mais informações em: https://facebook.github.io/jest/

## O que é o Puppeteer
É uma biblioteca Node para controlar as execuções das ações no navegador e utiliza o Chromium como navegador. Mais informações em:
https://github.com/GoogleChrome/puppeteer

## Instalação

Executar o comando para iniciar um projeto Node:
```
npm init -y
```

E o comando abaixo para instalar a dependência do Jest e do Puppeteer

```
npm i jest puppeteer --save-dev
```

A instalação do Pupppeteer demora um pouco pois vem com sua própria versão do Chromium
O Chormium é um browser Open Source que roda por trás do Chrome, ambos possuem quase as mesmas funcionalidades.

Depois de instalado abra o arquivo package.json e adicione o script de test

```json
"scripts": {
  "test": "jest"
}
```

Para executar os testes, basta executar
```
npm test
```

