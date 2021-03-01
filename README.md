# Bee Beauty - Web App para pedidos via whatsapp :iphone:

:computer: Este proyecto fue realizado usando [React.js](https://es.reactjs.org/)

## ¿que hace esta aplicacion?

Permite crear un catalogo online para realizar pedidos que se envian al whatsapp de la tienda

## ¿Como clonar este repositorio? :floppy_disk:

1. Crea una carpeta vacia donde quieras guardar el código.

2. Abre la carpeta en la terminal.

3. Ejecuta el comando git clone https://github.com/PaolaRoa/beeBeauty.git .

4. Ejecuta el comando npm install

5. Ejecuta el comando npm install react-router-dom

6. Ejecuta el comando npm start 

### !listo! ya tienes el código 


:bulb: **[Aquí](https://docs.github.com/es/github/creating-cloning-and-archiving-repositories/cloning-a-repository) puedes ver mas opciones para clonar este repositorio**

:bulb: **Tambien puedes hacer una bifurcación del repositorio en tu perfil de github siguiendo [estos pasos](https://docs.github.com/es/github/getting-started-with-github/fork-a-repo)**

## ¿Cómo agregar productos a la aplicación? :convenience_store:

### primero, veamos como estan guardados los productos:
Los productos estan guardados en un archivo JSON, [¿quieres saber mas sobre los archivos JSON?](https://www.json.org/json-en.html)

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

### Así  que si lo que quieres es agregar un producto

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

2.Agrega la foto del producto :camera:
        
Las imagenes deben estar en formato .png o .jpg, procura que las imagenes este optimizadas para la web puedes usar por ejemplo https://imagecompressor.com/es/ o https://tinypng.com/.

Guarda tu imagen en la ruta  del proyecto src/images, procura darle a las imagenes nombres acordes o faciles de escribir, evita usar los nombres por defecto que se asignan al tomar la foto.

### ¿ y si quiero crear una nueva categoría?

Bueno, sigue la estructura del JSON :sweat_smile:

Crea la categoria justo debajo de la última categoria que encuentres, con la estructura que se detallo , recuerda que una categoria va separada de otra por una coma, y dentro de esta categoria coloca los items que contiene.

## Desplegar la aplicación :open_file_folder:

Tienes varias opciones para hacer deploy de tu aplicación de manera gratuita, aquí te dejare un tutorial para tres de las más populares.

1. Hacer deploy en [Vercel](https://vercel.com/guides/deploying-react-with-vercel-cra) este es tan sencillo que es mi favorito :purple_heart:.
2. Hacer deploy en [Github Pages](https://platzi.com/tutoriales/1548-react/4065-guia-para-usar-github-pages-en-tus-proyectos-de-reactjs/).
3. Hacer deploy en [Netlify](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/).

##Licencia

Este proyecto está bajo la Licencia MIT License - mira el archivo [LICENSE.md](/LICENSE) para detalles


