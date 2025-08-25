const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
    const getExtendURL = await RichPresence.getExternal(
    client,
    '367827983903490050',
    'https://i.ibb.co/nN1Zv00k/1000004180.jpg',
  );

    const status = new RichPresence(client)
    .setApplicationId('367827983903490050')
    .setType('COMPETING')
    .setName('‎‎  ')
    .setDetails('‎‎  ')
    .setState('‎‎  ')
    .setAssetsLargeImage(getExtendURL[0].external_asset_path) 
  //  .setAssetsLargeText('?')
    .addButton('AniList', 'https://anilist.co/user/Pistachee')
    .setPlatform('desktop')
  client.user.setPresence({ activities: [status] });

})

client.login("");