# Parser de código de PCs conectar igualdad


Se ingresa:

```bash
ID: 01-02-03-01
SN: 01-0A-03-55-01-03-02
```

Retorna: 

```bash
ID: 01020301
SN: 010A0355010302
```
## Versiones

[Instalar NVM (Node Version Manager)](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
Instalar LTS: `nvm install --lts`

```bash

$ node -v
$ 20.17.0

``` 

## Comandos

Comandos disponibles:

- `npm run start`: Inicia el Script
- `node index.js`: Inicia el Script

## Ejemplo

```bash
$ npm run start
> script-codigo-ci@1.0.0 start
> node index.js

prompt: ID:  01-02-03-04
prompt: SN:  0A-0B-0B-0C
ID: 01020304
SN: ABBC

```