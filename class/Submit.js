const fetch = require('node-fetch');

module.exports = (hookURI, payload) => new Promise((resolve, reject)=>{
    fetch(hookURI, {
        method: 'post',
        headers:{
            'Content-Type':'application/json',
            'Accept-Language': 'en-US,en;q=0.9',
            'Upgrade-Insecure-Requests':'1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
            'Cache-Control': 'max-age=0',
            'Connection': 'keep-alive'
        },
        body: JSON.stringify(payload)
    })
    .then(result => resolve(result) )
    .catch(err => reject(err) );
});