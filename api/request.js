const fetch = require('node-fetch');
const Bluebird = require('bluebird');
fetch.Promise = Bluebird;
const xml2js = require('xml2js');

module.exports = {

    getImage : async function (tag, random){
        
        let url = "https://rule34.xxx/index.php?page=dapi&s=post&q=index&limit=1&tags=" + tag;

        if(random != null) url = "https://rule34.xxx/index.php?page=dapi&s=post&q=index&limit=1&tags=" + tag + "&id=" + random;
        
        const get_data = async url => {
            
            try {
                const response = await fetch(url);
                
                if(! response.ok) return new Error("Erreur lors de la récupération de l'image : " + response.statusText);
                
                const text = await response.text();



                const xmlToJson = await xml2js.parseString(text, (err, result) => {
                    
                    if(err) throw err;

                    const json = JSON.stringify(result, null, 4);  
                    
                    return json;
                });
                
                return xmlToJson;

            } catch (err) {
                console.error(err);
            }
        };

        return get_data(url);
            
    }
}