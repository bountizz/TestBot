const fetch = require('node-fetch');

module.exports = {

    getImage : function (tag){
        let url = "https://rule34.xxx/index.php?page=dapi&s=post&q=index&limit=1&tags=" + tag;
        fetch(url)
            .then(result => console.log(result));
            console.log("test réussi avec le tag : " + tag);
        
            /*.then(this.treatResult)
            .then(result => {
                let test = result.json()
                console.log(result);
                console.log(test);
                //return result.sample_url;
        });*/
    },
    
    treatResult : function (res){
        if(res.ok) {
            console.log(res.result);
            return res.result;
        }
            
        else 
            return new Error("Erreur lors de la récupération de l'image : " + res.message);
    }

}