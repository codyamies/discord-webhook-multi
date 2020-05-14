var Colour = require('color');
module.exports = class MessageBuilder {
    constructor(){
        this.embed = {fields:[]};
    }
    setAuthor(author, imageURL, URL){
        this.embed.author = {};
        this.embed.author.name = name;
        this.embed.author.url = URL;
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
    setThumbnail(image){
        this.embed.image = {};
        this.embed.image.url = image;
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
    setFooter(footer, image){
        this.embed.footer = {};
        this.embed.footer.text = footer;
        this.embed.footer.icon_url = image;
        return this;
    }
    addField(name, value, inline){
        this.embed.fields.push({
            name: name,
            value: value.toString(),
            inline: inline
        })
        return this;
    }
}