// Fetch API 

const apiKey = 'IG0K3kQkpT80AznxIFHJanhWVpfRreN5';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);


peticion
.then( resp => resp.json()) //promesa en cadena
.then( ({data}) => {
    const {url} = data.images.original  //en esta linea, llamamos a propiedades del json de los gifs
    console.log(url);
    // creamos la img en el body 
    const img = document.createElement('img');
    img.src = url; //añadimos la url al src 
    document.body.append(img); //hacemos append para añadirla al body
})
.catch( console.warn)