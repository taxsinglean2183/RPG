
let fetch = require('node-fetch')
     let handler  = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Uhm...Namanya mana?\nContoh: ${usedPrefix + command} King Of Bear`
m.reply('_Sedang membuat..._\n*Mohon tunggu sekitar 1 menit*')
heum = await fetch(`https://apikey-bear3.herokuapp.com/api/maker/epep?apikey=KingOfBear&text=${text}`)
    json = await heum.buffer()
   conn.sendFile(m.chat, json, 'Logo epep.png', 'Nih udah jadi Logo Epepmu...\n *_Tetap Support:_* *King Of Bear*', m)
}
handler.help = ['logoepep'].map(v => v + ' <teks>')
handler.tags = ['tools']
handler.command = /^logoepep$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.limit = true
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.register = true

module.exports = handler
