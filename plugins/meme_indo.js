let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix, command }) => {
m.reply(wait)
 heum = await fetch(`https://apikey-bear3.herokuapp.com/api/random/memeindo?apikey=${bearkey}`)
 json = await heum.buffer()
conn.sendButtonImg(m.chat, json, kasihcaption, footer, 'Next', `${usedPrefix + command}`, m, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}
handler.command = /^(memeindo)$/i
handler.register = true
handler.private = false
handler.limit = true

module.exports = handler
