var Colour = require('color');
module.exports = class MessageBuilder {
    constructor(){
        this.embed = {fields:[]};
    }
    setAuthor(author, imageURL, url){
        this.embed.author = {};
        this.embed.author.name = author;
        this.embed.author.url = url;
        this.embed.author.icon_url = imageURL;
        return this;
    }
    setTitle(title){
        this.embed.title = title;
        return this;
    }
    setURL(url){
        this.embed.url = url;
        return this;
    }
    setImage(imageURL){
        this.embed.image = {};
        this.embed.image.url = imageURL;
        return this;
    }
    setThumbnail(imageURL){
        this.embed.thumbnail = {};
        this.embed.thumbnail.url = imageURL;
        return this;
    }
    setTimestamp(){
        this.embed.timestamp = new Date();
        return this;
    }
    setColour(colour){
        this.embed.color = Colour(colour).rgbNumber();
        return this;
    }
    setDescription(description){
        this.embed.description = description;
        return this;
    }
    setFooter(text, image){
        this.embed.footer = {};
        this.embed.footer.text = text;
        this.embed.footer.icon_url = image;
        return this;
    }
    addField(name, value, inline){
        this.embed.fields.push({
            name: name,
            value: value.toString(),
            inline: inline
        });
        return this;
    }
}