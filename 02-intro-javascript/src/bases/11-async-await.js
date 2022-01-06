
// const getImagenPromesa = () => new Promise ( (resolve, reject) => resolve('aajsjdajs.com'))

const getImagen = async() => {

    try {
        const apiKey = 'IG0K3kQkpT80AznxIFHJanhWVpfRreN5';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const {data} = await resp.json();
        //    console.log(data.data.images.original.url);
        const {url} = data.images.original;
        
        const imgInBody = document.createElement('img');
        imgInBody.src = url;
        document.body.append(imgInBody)
    } catch (err) {
        console.error(err);
    }
  
}

getImagen();
