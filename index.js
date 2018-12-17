const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('message', function (message) {
	if (message.content === 'Twitter') {
	message.reply('Twitter de la compétition : @XLeagueOrga') }
})

bot.login('NTIzODQwMTU1MDE5MTE2NTY1.Dvg4JA.mEgzNiK-wq1eh9MlDED8JsLuNt4')







