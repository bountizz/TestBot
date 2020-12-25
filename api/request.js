const fetch = require('node-fetch');
const Bluebird = require('bluebird');
fetch.Promise = Bluebird;

module.exports = {

    getImage : async function (tag){
        const url = "https://rule34.xxx/index.php?page=dapi&s=post&q=index&limit=1&tags=" + tag;
        
        const get_data = async url => {
            try {
                const response = await fetch(url);
                if(! response.ok) return new Error("Erreur lors de la récupération de l'image : " + response.statusText);
                const text = await response.text();
                return text;
            } catch (err) {
                console.error(err);
            }
        };

        return get_data(url);
            
    }
        
        
}