const fetch = require('node-fetch');
const Bluebird = require('bluebird');
fetch.Promise = Bluebird;
const convert = require('xml2js');

module.exports = {

    getImage : function (tag){
        let url = "https://rule34.xxx/index.php?page=dapi&s=post&q=index&limit=1&tags=" + tag;
        fetch(url)
            .then(this.treatResult)
            .then(res => res.text())
            .then(json => console.log(json))
            .catch(err => console.error(err));
    },
    
    treatResult : function (res){
        if(res.ok) {
            return res;
        }
            
        else 
            return new Error("Erreur lors de la récupération de l'image : " + res.statusText);
    }

}