require('dotenv').config();
api_key = process.env.API_KEY;
const Discord = require('discord.js');
const{prefix} = require('./config.json');



const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(api_key);