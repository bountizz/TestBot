const fetch = require('node-fetch');
const Bluebird = require('bluebird');
fetch.Promise = Bluebird;
const parseString = require('xml2js').parseString;

module.exports = {

    getImage : async function (tag, random){
        
        return new Promise(async (exit, exitWithError) => {

            let url = "https://rule34.xxx/index.php?page=dapi&s=post&q=index&limit=1&tags=" + tag;
            if(random != null) url = "https://rule34.xxx/index.php?page=dapi&s=post&q=index&limit=1&tags=" + tag + "&pid=" + random;
            
                     
                                
            const response = await fetch(url);
            
            if(! response.ok) exitWithError("Erreur lors de la récupération de l'image : " + response.statusText);
            
            const text = await response.text();
            
            
            let xmlToJson = await parseString(text, (err, result) => {
                if(err) exitWithError("Erreur durant la conversion en xml : " + err) ;

                const json = JSON.stringify(result, null, 4);  

                exit(json);

            });
            
        })
    }
}