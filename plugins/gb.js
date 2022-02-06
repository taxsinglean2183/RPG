let handler  = async (m, { conn, usedPrefix: _p }) => {
ye = `@${m.sender.split`@`[0]}`
let info = `Hai Sayangku ${ye} Lagi Nyari Sc Botkuh Yah:v

Nih Link Sc Gua Dibawah :
https://youtu.be/Sgb5BVOW66Y

_*Jangan Lupa Di Like Dan Subscribe Tod...!!!*_
_*Gak Subscribe Gak Work Njingg...!!!*_
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', `*${global.packname}*`, 'status@broadcast') 
}
handler.help = ['github']
handler.tags = ['info']
handler.command = ['script', 'sc', 'scbot', 'github']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 25

module.exports = handler
