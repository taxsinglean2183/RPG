//let { getBuffer, succes } = require('../lib/functions.js');
let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
   pushname2 = `*${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*`
   let cap = `
   `Hai Sayangku ${pushname2} ${ucapan()}\nIntro dulu yuk biar lebih akrab 😇
   
   𝐍𝐚𝐦𝐚:
   𝐔𝐦𝐮𝐫:
   𝐀𝐬𝐤𝐨𝐭:
   𝐀𝐥𝐚𝐬𝐚𝐧 𝐌𝐚𝐬𝐮𝐤 𝐊𝐞 𝐒𝐢𝐧𝐢:`
   reply(cap)
    }

handler.help = ['intro <teks>']
handler.tags = ['maker']
handler.command = /^(intro)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
