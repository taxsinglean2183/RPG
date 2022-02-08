let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + command)).buffer(), `
Hai Sayangku ${ucapan()}\nIntro dulu yuk biar lebih akrab 😇
   
   𝐍𝐚𝐦𝐚:
   𝐔𝐦𝐮𝐫:
   𝐀𝐬𝐤𝐨𝐭:
   𝐀𝐥𝐚𝐬𝐚𝐧 𝐌𝐚𝐬𝐮𝐤 𝐊𝐞 𝐒𝐢𝐧𝐢:
`.trim(), footer, 'Tampilkan Menu', '.menu')

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

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang🌞"
    }
    if (time >= 15) {
        res = "Selamat sore🌝"
    }
    if (time >= 18) {
        res = "Selamat malam🌚"
    }
    return res
}
