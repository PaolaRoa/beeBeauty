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
           "id":"J003",
           "name":"Set topos Light",
           "description":"Incluye piñas, moño y flor",
           "price":12000,
           "img":"../images/topos1.png",
           "quantity":0
         },
         {
          "id":"J005",
          "name":"Set topos Dream",
          "description":"Incluye corazón, lazo y flor",
          "price":12000,
          "img":"../images/topos2.png",
          "quantity":0
        } 

      ]
    },
    {
      "cname":"Sombras",
      "items":[
        {
          "id":"M030",
          "name":"Sombra Dodo Girl",
          "description":"Sombra para ojos con 12 tonos",
          "price":12000,
          "img":"../images/sombra1.png",
          "quantity":0
        } ,
        {
          "id":"M032",
          "name":"Sombra Frutas Coco",
          "description":"Sombra para ojos con 9 tonos",
          "price":15000,
          "img":"../images/sombra2.png",
          "quantity":0
        } ,
        {
          "id":"M031",
          "name":"Sombra Frutas Peach",
          "description":"Sombra para ojos con 9 tonos",
          "price":15000,
          "img":"../images/sombra3.png",
          "quantity":0
        } ,
        {
          "id":"M026",
          "name":"Paleta Beauty Glazed",
          "description":"Paleta con 63 tonos de sombras para ojos",
          "price":75000,
          "img":"../images/sombra4.png",
          "quantity":0
        } 
      ]   
    },
    {
      "cname":"Skincare",
      "items":[
        {
          "id":"M008",
          "name":"Agua de rosas",
          "description":"Toníco facial de agua de rosas",
          "price":18000,
          "img":"../images/sk1.png",
          "quantity":0
        } ,
        {
          "id":"M004",
          "name":"Mascarilla para ojos",
          "description":"Mascarilla de hydrogel para ojos",
          "price":20000,
          "img":"../images/sk2.png",
          "quantity":0
        }

      ] 
    },
    {
     "cname": "Labios",
     "items":[
      {"id":"M014",
        "name":"Exfoliante klean color",
        "description":"Exfoliante de labios Klean Color",
        "price":10000,
        "img":"../images/lips1.png",
        "quantity":0
      } ,
      {
        "id":"M016",
        "name":"Tinta Helados ",
        "description":"Tinta para labios trendy",
        "price":6000,
        "img":"../images/lips2.png",
        "quantity":0
      }

    ] 
    },
    {
      "cname":"Pestañas y cejas",
      "items":[
        {
          "id":"M020",
          "name":"Pestañina llama",
          "description":"Pestañina de llama trendy",
          "price":15000,
          "img":"../images/eyes1.png",
          "quantity":0
        } ,
        {
          "id":"M022",
          "name":"Pestañina doble ",
          "description":"Pestañina con paso 1: Primer y paso 2: Pestañina",
          "price":20000,
          "img":"../images/eyes2.png",
          "quantity":0
        }
  
      ] 
    }
  ]
}
