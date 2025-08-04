const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);

    const status = new RichPresence(client)
    .setApplicationId('ID APP')
    .setName('')
    .setAssetsLargeImage("URL") 
    .setAssetsLargeText('Texte quand on survole l'image')
    .addButton('', 'URL')
    .addButton('', 'URL')
    .setPlatform('desktop')
  client.user.setPresence({ activities: [status] });
})

client.login('');   
