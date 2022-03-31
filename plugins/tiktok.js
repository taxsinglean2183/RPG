let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
m.reply(wait)
let res = await fetch(`https://saipulanuar.herokuapp.com/api/download/tiktok?url=${args[0]}&apikey=${bearkey}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let { description, author, statistic, link, nowatermark } = json.result
await conn.sendFile(m.chat, nowatermark, 'error.mp3', null, m, true)
}

handler.help = ['tiktok <url>']
handler.tags = ['downloader']
handler.command = /^tiktok$/i

module.exports = handler
