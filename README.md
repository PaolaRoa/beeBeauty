# Bee Beauty - Web App para pedidos via whatsapp

Este proyecto fue realizado usando React.js https://es.reactjs.org/

## ¿que hace esta aplicacion?

permite realizar pedidos que se envian al whatsapp de la tienda

## ¿Como clonar este repositorio?

1. Crea una carpeta vacia donde quieras guardar el código.

2. Abre la carpeta en la terminal.

3. Ejecuta el comando git clone https://github.com/PaolaRoa/beeBeauty.git .

4. Ejecuta el comando npm install

5. Ejecuta el comando npm install react-router-dom

6. Ejecuta el comando npm start 

### !listo! ya tienes el código 

## ¿Cómo agregar productos a la aplicación?

Los productos estan guardados en un archivo JSON, si quieres saber mas sobre los archivos JSON https://www.json.org/json-en.html

El archivo donde se almacenan los productos lo encuentras en la ruta src/data/products.json , allí veras que la estructura es la siguiente:

{"products":[
    {
      "cname":"Nombre de la categoria",
      "items":[
         {
           "id":"referencia del producto",
           "name":"nombre del producto",
           "description":"descripcion del producto",
           "price":12000,
           "img":"../images/nombreDeLaImagen",
           "quantity":0
         },
         {
           "id":"referencia del producto",
           "name":"nombre del producto",
           "description":"descripcion del producto",
           "price":12000,
           "img":"../images/nombreDeLaImagen",
           "quantity":0
         }
      ]
    }
  ]
}
