# Discord-Webhook-Multi

Make a webhook with up to 10 embeds in a single request

## Installation

```nodejs
npm install discord-webhook-mutli
```

## Usage

```python
const { Webhook, MessageBuilder } = require('discord-webhook-mutli');

var hook = new Webhook('Webhook URI Here');
for(var i = 0; i <= 10; ++i){ // Loop 10 times
   var embed = new MessageBuilder(); // Make a new Embed
   embed.setTitle(`Embeds: ${i}`) // Set the Title
   .addField('Multiply', 10*i, true) // add a new inline field
   .addField('Divide', 10/i, true) // add a new inline field
   .addField('Bananas', `I Have ${2*i} Bananas`) // add a new field
   .setColour('#42f5ce'); // Supports Hex Colours
   hook.addEmbed(embed); // Add the embed to the webhook
}
hook.Post(); // Post them all
```

## Documentation

* **Webhook.setUsername('string')**  
Set the username of the Webhook, bypassing what was set inside discord itself

* **Webhook.setAvatar('imageURL')**  
Set the avatar of the Webhook, bypassing what was set inside discord itself

* **Webhook.addEmbed(embed)**  
Add a new embed to the webhook

* **Webhook.clearEmbeds()**  
remove all the embeds currently in the webhook

* **Webhook.Post()**  
Post the Webhook to Discord

* **MessageBuilder.setAuthor('string', 'imageURL', 'URL')**  
Set the Author of the Embed, you can also set the image and url

* **MessageBuilder.setTitle('string')**  
Set the title of the Embed

* **MessageBuilder.setURL('url')**  
Set the url of the Embed, makes the title a hyperlink

* **MessageBuilder.setThumbnail('imageURL')**  
Set the thumbnail of the Embed

* **MessageBuilder.setTimestamp()**  
Set the current time as the timestamp of the embed

* **MessageBuilder.setColour('hexColour')**  
Set the colour of the embed using Hex Colour codes (eg, #FFFFFF)

* **MessageBuilder.setDescription('string')**  
Set the thumbnail of the Embed

* **MessageBuilder.setFooter('string', 'imageURL')**  
Set the footer of the embed, including an icon

* **MessageBuilder.addField('string', 'string' [, boolean])**  
Add a field to the embed with a title and a value, optionally make the field inline with a boolean

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[GPL 3.0 or later](https://choosealicense.com/licenses/gpl-3.0/)