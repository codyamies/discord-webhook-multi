var Submit = require('./Submit');

module.exports = class Webhook {
    constructor(webhookURI){
        this.payload = {fields:[]};
        this.webhookURI = webhookURI;
    }
    
    /**
     * @param {String} username Set the username of the webhook
     */
    setUsername(username){
        this.payload.username = username;
    }

    /**
     * @param {String} imageURL Set the avatar of the Webhook
     */
    setAvatar(imageURL){
        this.payload.avatar_url = imageURL;
    }

    /**
     * @param {JSON} embed Embed to be included in the Post
     */
    addEmbed(embed){
        this.payload.fields.push(embed);
    }

    /**
     * Clear all embeds from the payload
     */
    clearEmbeds(){
        this.payload.fields = [];
    }

    /**
     * Post request to discord with current payload and uri
     */
    async Post(){
        try {
            var res = await Submit(this.webhookURI, this.payload);
            if(res.status == 429){
                const body = await res.json();
                const waitUntil = body['retry_after'];
                setTimeout(()=>Submit(this.webhookURI, this.payload), waitUntil);
            } else if (res.status != 204){
                throw new Error(`Error ${res.status}.\nResponse: ${await res.text()}`);
            }
        }
        catch(err){
            throw new Error(err.message);
        }
    }
}