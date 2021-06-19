# Sigilo, Parente!

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Tema e objetivos](#2-tema-e-objetivos)
* [3. A quem se destina](#3-a-quem-se-destina)
* [4. UX e UI](#4-ux-e-ui)
* [5. Conteúdos e conceitos aplicados](#5-conteúdos-e-conceitos-aplicados)

***

## 1. Prefácio

_Este projeto foi desenvolvido como parte do Bootcamp para Front End da Laboratoria._

Cifrar é uma forma de transformar mensagens em código. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história. 

A técnica de cifrar mensagens utilizada pelo Imperador Júlio César ocorre 
por substituição, em que cada letra do texto é substituída por outra, que 
se encontra a um número fixo de posições (deslocamento) mais a frente do
mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 7 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  H I J K L M N O P Q R S T U V W X Y Z A B C D E F G 
* A letra A será H
* A palavra TEKOA será ALRVH

## 2. Tema e objetivos

A aplicação **Sigilo, Parente!** é uma forma segura de oferecer uma 
comunicação virtual segura aos diferentes povos indígenas e seus 
respectivos apoiadores. Estando em constante articulação política e 
organizacional e se defendendo de pressões e ameaças de madeireiros,
garimpeiros e grandes latifundiários contrários às terras indígenas e
aos direitos dos povos originários, é preciso se comunicar sem que
haja vazamento de informações, como estratégias de defesa e dados 
pessoais.

## 3. A quem se destina

Povos indígenas e rede de apoiadores não indígenas que desejam se
comunicar de forma segura, protegendo informações cruciais para
sua articulação frente às ameaças sofridas.

## 4. UX e UI

### Desenho do produto

A aplicação foi pensada para ser simples, possuindo uma interface
amigável e interativa, onde o usuário pode escolher sua chave de 
descolamento, denominada como "chave de sigilo", sendo instruído como
utilizá-la. A paleta de cores possui inspirações das cores da Mata 
Atlântica, cestarias indígenas e do açrafrão, pigmento utilizado em
pinturas corporais. Abaixo temos a tela de início.

![landing](https://user-images.githubusercontent.com/70327566/122655596-d574d480-d129-11eb-9069-31e302866cf9.png)


### Interface do usuário 

As instruções são dadas de forma clara em forma de "passo-a-passo".
O usuário consegue selecionar a chave de sigilo que desejar, seja ela
com valores positivos ou negativos.

![steps](https://user-images.githubusercontent.com/70327566/122655614-005f2880-d12a-11eb-8cca-874de1c106ae.png)


As caixas foram dispostas para que sejam visualizadas simultaneamente.

![boxes](https://user-images.githubusercontent.com/70327566/122655654-72377200-d12a-11eb-9c7d-ea5a4b3c0f86.png)

## 5. Conteúdos e conceitos aplicados

### HTML e CSS

* Uso de HTML semântico.
* Uso de seletores de CSS.

### DOM

* Uso de seletores do DOM.
* Manipular eventos do DOM.
* Manipulação dinâmica do DOM.

### JavaScript

* Manipulação de strings.
* Uso de condicionais.
* Uso de laços (loops).
* Uso de funções (parâmetros | argumentos | valor de retorno)
* Declaração correta de variáveis (const & let)

### Testing

* Teste unitário.

### Estrutura do código e guia de estilo

* Organizar e dividir o código em módulos (Modularização)
* Uso de identificadores descritivos (Nomenclatura | Semântica)
* Uso de linter (ESLINT)

### Git e GitHub

* Uso de comandos de git (add | commit | pull | status | push)
* Gerenciamento de repositorios de GitHub (clone | fork | gh-pages)

### UX

* Desenhar a aplicação pensando e entendendo o usuário
* Criar protótipos para obter feedback e iterar
* Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)
