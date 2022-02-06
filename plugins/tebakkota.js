let fetch = require('node-fetch')
let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkota = conn.tebakkota ? conn.tebakkota : {}
    let id = m.chat
    if (id in conn.tebakkota) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkota[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/saipulanuar/database/master/games/tebakkota.json')
    if (!res.ok) throw eror
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}teko untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.tebakkota[id] = [
        await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), caption, footer, 'Bantuan', '.teko', m),
        json, poin,
        setTimeout(async () => {
            if (conn.tebakkota[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.title}*`, footer, 'Tebak Kota', '.tebakkota', conn.tebakkota[id][0])
            delete conn.tebakkota[id]
        }, timeout)
    ]
}
handler.help = ['tebakkota']
handler.tags = ['game']
handler.command = /^tebakkota/i

module.exports = handler