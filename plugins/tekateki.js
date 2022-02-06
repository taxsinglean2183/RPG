let fetch = require('node-fetch')
let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tekateki[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/saipulanuar/database/master/games/tekateki.json')
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tete untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.tekateki[id] = [
        await conn.sendButton(m.chat, caption, footer, 'Bantuan', '.tete',m),
        json, poin,
        setTimeout(async () => {
            if (conn.tekateki[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, footer, 'Teka Teki', '.tekateki',m)
            delete conn.tekateki[id]
        }, timeout)
    ]
}
handler.help = ['tekateki']
handler.tags = ['game']
handler.command = /^tekateki/i

module.exports = handler