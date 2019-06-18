

# Penta Financiero Challenge

Este proyecto fue realizado para PENTA FINANCIERO con la finalidad de postular a su equipo de trabajo, fué realizado con ReactJs y Firebase.

## Instrucciones

Las intrucciones planteadas fueron las siguientes: 

"As a company executive, I want to see a list of all the invoices I have sent to my customers ordered by emission dates descending, so that I have a clear understanding of my accounts receivable."

• The software MUST be accesible from a desktop browser.

• The software CAN NOT directly access the invoice files, as this files
are securely stored in a backup tape, but the software CAN preprocess
the invoice files and store metadata in any way you see fit.

## Desarrollo del Proyecto

Como nuestro software necesita leer la información contenida en los documentos XML pero sin ingresar a estos, lo primero fue codificar una lectura de la carpeta contenedora de los archivos, luego ir leyendo la información archivo por archivo y enviarla a una base de datos, en este caso fue utilizado los servidores de Firebase Database.

Posterior a esto la información se extrae desde el front para presentar la información correspondiente a cada factura en el navegador. 

### Intrucciones

En caso de querer agregar más documentos en la base de datos, debemos: 

1. Clonar el repositorio

        ` git clone https://github.com/AnaPaulaMontap/penta-financiero.git`

2. Instalar dependencias 

        `npm install`


3. Subir los archivos en la carpeta contenedora: 

            `./src/readXML/Files`

4. Luego de esto se deben subir los archivos a la base de datos: 

        `  node  .src/readXML/index.js  ./src/readXML/Files `


**Note: Debes tener instalado NodeJs en tu computador para poder ejecutar estos comandos**




