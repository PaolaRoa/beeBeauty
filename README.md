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

### primero, veamos como estan guardados los productos:
Los productos estan guardados en un archivo JSON, si quieres saber mas sobre los archivos JSON https://www.json.org/json-en.html

El archivo donde se almacenan los productos lo encuentras en la ruta src/data/products.json , allí veras que la estructura es la siguiente:

{products:[

    {
      "cname":"nombre de la categoría",
      "items":[
        {
          "id":"referencia del producto (unica para cada producto)",
          "name":"nombre del producto",
          "description":"descripción del producto",
          "price":precio del producto,
          "img":"../images/nombredelaimagen.png",
          "quantity":0
        } ,
        {
          "id":"referencia del producto (unica para cada producto)",
          "name":"nombre del producto",
          "description":"descripción del producto",
          "price":precio del producto,
          "img":"../images/nombredelaimagen.png",
          "quantity":0
        } 
      ]   
    }
   ] 
 }

### así  que si lo que quieres es agregar un producto

1.Sigue la estructura del JSON creando un objeto con los datos del nuevo producto en la categoría que consideres}

        {
          "id":"referencia del producto nuevo",
          "name":"nombre del nuevo producto",
          "description":"descripción del producto nuevo",
          "price":precio del producto nuevo,
          "img":"../images/productonuevo.png",
          "quantity":0
        } 
        
        **quantity siempre se asigna en cero ya que es la cantidad inicial que muestra la aplicación

2.Agrega la foto del producto
        
Las imagenes deben estar en formato .png o .jpg, procura que las imagenes este optimizadas para la web puedes usar por ejemplo https://imagecompressor.com/es/ o https://tinypng.com/.

Guarda tu imagen en la ruta  del proyecto src/images, procura darle a las imagenes nombres acordes o faciles de escribir, evita usar los nombres por defecto que se asignan al tomar la foto.



