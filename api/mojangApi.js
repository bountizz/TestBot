const fetch = require('node-fetch');
const Bluebird = require('bluebird');
fetch.Promise = Bluebird;

module.exports = {

    getStatusServers : async function () {
        
        return new Promise(async (exit, exitWithError) => {

            const response = await fetch("https://status.mojang.com/check");

            if(! response.ok) exitWithError("Erreur lors de la récupération du status des serveurs Mojang : " + response.statusText);
            
            try {
                const answer = await response.json();
                exit(answer);
            }catch(error){
                exitWithError(error);
            }
            
        })
    }
}