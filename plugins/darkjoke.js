let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
m.reply(wait)
heum = await fetch(`https://apikey-bear3.herokuapp.com/api/darkjokes?apikey=${bearkey}`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, kasihcaption, footer, 'Next', `${usedPrefix + command}`, m, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}
handler.help = ['darkjoke', 'darkjokes']
handler.tags = ['internet']
handler.command = /^((drag|dark)joke|jokes)$/i

module.exports = handler
