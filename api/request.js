function getImage(tag){
    let url = "https://rule34.xxx/index.php?page=dapi&s=post&q=index&limit=1&tags=" + tag;
    fetch(url)
        .then(treatResult)
        .then(result => {
            
            console.log(result);
            //return result.sample_url;
    });
}

function treatResult(res){
    if(res.ok) 
        return res.result;
    else 
        return new Error("Erreur lors de la récupération de l'image : " + res.message);
}