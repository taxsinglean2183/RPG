let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `contoh:\n${usedPrefix + command} raraharsita2`

  let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=${lolkey}`)
  if (!res.ok) throw eror
  let json = await res.json()
  if (json.status != 200) throw json
  conn.sendFile(m.chat, json.result.user_picture, 'eror.jpg', `*Nama:* ${json.result.username}\n*Bio:* ${json.result.bio}\n*Followers:* ${json.result.followers} Followers\n*Following:* ${json.result.followings} Following\n*Posts:* ${json.result.video} Posts\n*Link:* https://www.tiktok.com/@${json.result.username}\n\n_*~SUPPORT TERUS KING OF BEAR*_`, m, 0, { thumbnail: await (await fetch(json.result.user_picture)).buffer() })
}

handler.help = ['ttstalk <username>']
handler.tags = ['tools']
handler.command = /^ttstalk$/i

module.exports = handler
