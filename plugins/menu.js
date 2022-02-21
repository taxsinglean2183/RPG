let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const chats = conn.chats.all()
const groups = chats.filter(v => v.jid.endsWith('g.us'))
const defaultMenu = {
  before: `
┏━━━ꕥ〔 *${namabot}* 〕ꕥ━⬣
┃✾ Hai, %name!
┃
┃✾ Tersisa *%limit Limit*
┃✾ Role *%role*
┃✾ Level *%level (%exp / %maxexp)* 
┃✾ [%xp4levelup]
┃✾ %totalexp XP secara Total
┗━ꕥ
┏━ꕥ 
┃✾ Hari : *%week %weton* 
┃✾ Tanggal : *%date*
┃✾ Tanggal Islam : *%dateIslamic*
┃✾ Jam : *%time Wib*
┗━ꕥ
┏━ꕥ
┃✾ Uptime: *%uptime (%muptime)*
┃✾ Database: %rtotalreg dari %totalreg
┃✾ Youtube:
┃✾ https://youtu.be/Sgb5BVOW66Y
┗━━━━━━ꕥ`.trimStart(),
  header: '┏━━ꕥ〔 *%category* 〕ꕥ━⬣',
  body: '┃✾%cmd %islimit %isPremium',
  footer: '┗━ꕥ\n',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/Donasiku.mp3`)
	bzz = await res.buffer()
	let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw } = global.db.data.settings[conn.user.jid]
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'edukasi', 'news', 'nsfw', 'xp', 'stiker', 'image', 'anime', 'kerangajaib', 'quotes', 'admin', 'rpg', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'sound', 'vn', 'jadibot', 'info','virus', 'vote', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'Utama',
    'game': 'Game',
    'xp': 'Exp & Limit',
    'nsfw': `NSFW ${global.opts['nsfw'] ? '' : '(Dinonaktifkan)'}`,
    'sticker': 'Stiker',
    'edukasi': 'Edukasi',
    'news': 'News',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'rpg': 'Epic Rpg',
    'group': 'Grup',
    'anime': 'Anime',
    'premium': 'Premium',
    'internet': 'Internet',
    'image': 'Random Image',
    'anonymous': 'Anonymous Chat',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'fun': 'Fun',
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absen',
    'quran': 'Islam',
    'audio': 'Pengubah Suara',
    'sound': 'Sound Music',
    'vn': 'Vn Imuet',
    'jadibot': 'Jadi Bot',
    'virus': 'Virus',
    'info': 'Info',
    '': 'Tanpa Kategori',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'nsfw') tags = {
    'hentai': 'Hentai',
    'bokep': 'Bokep'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Epic Rpg'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'image') tags = {
    'image': 'Random Image'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
    if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'quran') tags = {
    'quran': 'Islam'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'sound') tags = {
    'sound': 'Sound Music'
  }
  
  if (teks == 'vn') tags = {
    'vn': 'Vn Imuet'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'virus') tags = {
    'virus': 'Virus'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let names = m.fromMe ? conn.user : conn.contacts[who]
    let pushname = `${names.vnmae || names.notify || names.names || ('+' + names.jid.split`@`[0])}`
    let pushn = 'Daftar Dulu ya kak supaya namanya muncul disini'
    let name = registered ? global.db.data.users[m.sender].name : pushn
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "title": `${ucapan()}, ${name}`.trim(),
          "description": `
┏━━ꕥ〔 *Status* 〕ꕥ━⬣
┃✾ Aktif selama ${uptime}
┃✾ Baterai ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
┃✾ *${Object.keys(global.db.data.users).length}* Pengguna
┃✾ *${totaljadibot.length}* Jadibot
┃✾ *${conn.blocklist.length}* Terblock
┃✾ *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned
┃✾ *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned
┗━ꕥ
┏━ꕥ
┃✾ Script by King Of Bear
┃✾ Yt : https://youtu.be/RSIqyVj-gp0
┃✾ Run bot : Replit
┃✾ Tipe SC King Of Bear
┗━━━━━━━━⬣
“${pickRandom(global.quotes)}”`.trim(),
          "buttonText": "Klik Disini",
          "listType": "SINGLE_SELECT",
          "sections": [
            {
              "rows": [
                {
                  "title": `[🧾] Semua Perintah`,
                  "description": "Memberikan Semua Fitur Bot",
                  "rowId": ".? all"
                }, {
                  "title": "[🕋] Islam",
                  "description": "Menu Tentang Islam",
                  "rowId": ".? quran"
                }, {
                  "title": "[🏫] Edukasi",
                  "description": "Menu Edukasi",
                  "rowId": ".? edukasi"
                }, {
                  "title": "[📰] News",
                  "description": "Menu Berita",
                  "rowId": ".? News"
                },  {
                  "title": "[🎮] Game",
                  "description": "Menu Game",
                  "rowId": ".? game"
                }, {
                  "title": "[🗺️] Epic Rpg",
                  "description": "Menu Game RPG",
                  "rowId": ".? rpg"
                }, {
                  "title": "[📈] XP",
                  "description": "XP Dan Level",
                  "rowId": ".? xp"
                },  {
                  "title": "[🔞] NSFW",
                  "description": "Menu 18+",
                  "rowId": ".? nsfw"
                }, {
                  "title": "[🖼️] Random Image",
                  "description": "Menu Foto Random",
                  "rowId": ".? image"
                }, {
                  "title": "[🎇] Stiker",
                  "description": "Menu Buat Stiker",
                  "rowId": ".? stiker"
                }, {
                  "title": "[🐚] Kerang Ajaib",
                  "description": "Menurut Kerang ajaib....",
                  "rowId": ".? kerangajaib"
                }, {
                  "title": "[📑] Quotes",
                  "description": "Menu Quotes",
                  "rowId": ".? quotes"
                }, {
                  "title": "[🏛️] Admin",
                  "description": "Menu Admin Group",
                  "rowId": ".? admin"
                }, {
                  "title": "[🏢] Grup",
                  "description": "Menu Group",
                  "rowId": ".? grup"
                }, {
                  "title": "[🔝] Premium",
                  "description": "Menu Untuk Premium",
                  "rowId": ".? premium"
                }, {
                  "title": "[🖥️] Internet",
                  "description": "Cari Sesuatu Di Bot",
                  "rowId": ".? internet"
                }, {
                  "title": "[🥷] Anonymous",
                  "description": "Mainkan Anonymous Chat",
                  "rowId": ".? anonymous"
                }, {
                  "title": "[✒️] Nulis & Logo",
                  "description": "Menu Nulis & Logo",
                  "rowId": ".? nulis"
                }, {
                  "title": "[📺] Downloader",
                  "description": "Download Sesuatu Di Bot",
                  "rowId": ".? downloader"
                }, {
                  "title": "[🔧] Tools",
                  "description": "Tools Yang Bisa di Gunakan Di Bot",
                  "rowId": ".? tools"
                }, {
                  "title": "[🎇] Fun",
                  "description": "Menu Ceria",
                  "rowId": ".? fun"
                }, {
                  "title": "[📂] Database",
                  "description": "Simpan Sesuatu Di Bot",
                  "rowId": ".? database"
                }, {
                  "title": "[📝] Vote & Absen",
                  "description": "Menu Vote & Absen",
                  "rowId": ".? vote"
                }, {
                  "title": "[🎙️] Pengubah Suara",
                  "description": "Ubah Suaramu",
                  "rowId": ".? audio"
                }, {
                  "title": "[🎙️] Sound Music",
                  "description": "Dengar Music Singkat",
                  "rowId": ".? sound"
                }, {
                  "title": "[🎙️] Vn Imuet",
                  "description": "Mendengarkan Vn Yang Sangat Imuet",
                  "rowId": ".? vn"
                }, {
                  "title": "[🤖] Jadi Bot",
                  "description": "Jadi Bot",
                  "rowId": ".? jadibot"
                }, {
                  "title": "[⛩️] Anime",
                  "description": "Cari Anime Di Bot",
                  "rowId": ".? anime"
                }, {
                  "title": "[ℹ️] Info",
                  "description": "Info Tentang Bot",
                  "rowId": ".? info"
                }, {
                  "title": "[🔧] Virus",
                  "description": "Virus Yang Bisa Membuat Whatsapp Orang Ngelag/Error",
                  "rowId": ".? virus"
                }, {
                  "title": "Tanpa Kategori",
                  "description": "",
                  "rowId": ".? tanpakategori"
                }, {
                  "title": "[🧑‍💻] Owner",
                  "description": "Menu Khusu Owner",
                  "rowId": ".? owner"
                }
              ]
            }
          ], "contextInfo": {
            "stanzaId": m.key.id,
            "participant": m.sender,
            "quotedMessage": m.message
          }
        }
      }, {}), { waitForAck: true })
    }
    // gunakan ini jika kamu menggunakan whatsapp bisnis
    //   throw `
    // ┌〔 DAFTAR MENU 〕
    // ├ ${_p + command} all
    // ├ ${_p + command} game
    // ├ ${_p + command} xp
    // ├ ${_p + command} stiker
    // ├ ${_p + command} kerang
    // ├ ${_p + command} quotes
    // ├ ${_p + command} admin
    // ├ ${_p + command} group
    // ├ ${_p + command} premium
    // ├ ${_p + command} internet
    // ├ ${_p + command} anonymous
    // ├ ${_p + command} nulis
    // ├ ${_p + command} downloader
    // ├ ${_p + command} tools
    // ├ ${_p + command} fun
    // ├ ${_p + command} database
    // ├ ${_p + command} vote
    // ├ ${_p + command} quran
    // ├ ${_p + command} audio
    // ├ ${_p + command} sound
    // ├ ${_p + command} vn
    // ├ ${_p + command} virus
    // ├ ${_p + command} jadibot
    // ├ ${_p + command} info
    // ├ ${_p + command} tanpa kategori
    // ├ ${_p + command} owner
    // └────  
    //     `.trim()
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send3ButtonLoc(m.chat, await (await fetch(fla + teks)).buffer(), text.trim(), footer, '🧒 Pemilik Bot', '.owner', '💲 Donasi', '.donasi', '📍 Rules', '.infobot', m)
    // await conn.send3ButtonLoc(m.chat, await (await fetch(`https://i.ibb.co/fH0hppT/mikey.jpg`)).buffer(), text.trim(), 'Recoded By Dawnfrosty', 'Pemilik Bot', '.owner', 'Donasi', '.donasi', 'Rules', '.infobot', m)
  await conn.sendFile(m.chat, bzz, 'bzz.opus', null, m, true)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', '?', 'help']
handler.tags = ['main']
handler.command = /^(menu|\?|help)$/i

handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "Selamat pagi"
  }
  if (time > 10) {
    res = "Selamat siang"
  }
  if (time >= 15) {
    res = "Selamat sore"
  }
  if (time >= 18) {
    res = "Selamat malam"
  }
  return res
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.quotes = [
    "Segala sesuatu memiliki kesudahan, yang sudah berakhir biarlah berlalu dan yakinlah semua akan baik-baik saja", 
    "Setiap detik sangatlah berharga karena waktu mengetahui banyak hal, termasuk rahasia hati.", 
    "Jika kamu tak menemukan buku yang kamu cari di rak, maka tulislah sendiri.",
    "Jika hatimu banyak merasakan sakit, maka belajarlah dari rasa sakit itu untuk tidak memberikan rasa sakit pada orang lain.",
    "Hidup tak selamanya tentang pacar.",
    "Rumah bukan hanya sebuah tempat, tetapi itu adalah perasaan.",
    "Pilih mana: Orang yang memimpikan kesuksesan atau orang yang membuatnya menjadi kenyataan?",
    "Kamu mungkin tidak bisa menyiram bunga yang sudah layu dan berharap ia akan mekar kembali, tapi kamu bisa menanam bunga yang baru dengan harapan yang lebih baik dari sebelumnya.",
    "Bukan bahagia yang menjadikan kita bersyukur, tetapi dengan bersyukurlah yang akan menjadikan hidup kita bahagia.",
    "Aku memang diam. Tapi aku tidak buta.",
    "Keyakinan merupakan suatu pengetahuan di dalam hati, jauh tak terjangkau oleh bukti.",
    "Rasa bahagia dan tak bahagia bukan berasal dari apa yang kamu miliki, bukan pula berasal dari siapa diri kamu, atau apa yang kamu kerjakan. Bahagia dan tak bahagia berasal dari pikiran kamu.",
    "Sakit dalam perjuangan itu hanya sementara. Bisa jadi kamu rasakan dalam semenit, sejam, sehari, atau setahun. Namun jika menyerah, rasa sakit itu akan terasa selamanya.",
    "Hanya seseorang yang takut yang bisa bertindak berani. Tanpa rasa takut itu tidak ada apapun yang bisa disebut berani.",
    "Jadilah diri kamu sendiri. Siapa lagi yang bisa melakukannya lebih baik ketimbang diri kamu sendiri?",
    "Kesempatan kamu untuk sukses di setiap kondisi selalu dapat diukur oleh seberapa besar kepercayaan kamu pada diri sendiri.",
    "Kebanggaan kita yang terbesar adalah bukan tidak pernah gagal, tetapi bangkit kembali setiap kali kita jatuh.",
    "Suatu pekerjaan yang paling tak kunjung bisa diselesaikan adalah pekerjaan yang tak kunjung pernah dimulai.",
    "Pikiran kamu bagaikan api yang perlu dinyalakan, bukan bejana yang menanti untuk diisi.",
    "Kejujuran adalah batu penjuru dari segala kesuksesan. Pengakuan adalah motivasi terkuat. Bahkan kritik dapat membangun rasa percaya diri saat “disisipkan” di antara pujian.",
    "Hidup ini hanya sekali dan peluang itu juga sekali munculnya, keduanya tidak datang dua kali.",
    "Karena perjuangan adalah tanda perjalananmu menuju sukses.",
    "Dunia tak lagi sama tak selamanya memihak kita, di saat kita mau berusaha di situlah kebahagiaan akan indah pada waktunya.",
    "Hidup tak semudah membalikkan telapak tangan, tetapi dengan telapak tangan kita dapat mengubah hidup kita jauh lebih baik lagi.",
    "Jadilah pribadi yang menantang masa depan, bukan pengecut yang aman di zona nyaman.",
    "Belajarlah rendah hati, rendahkan hatimu serendah-rendahnya hingga tidak ada seorangpun yang bisa merendahkanmu.",
    "Keyakinan merupakan suatu pengetahuan di dalam hati, jauh tak terjangkau oleh bukti.",
    "Sakit dalam perjuangan itu hanya sementara. Bisa jadi kamu rasakan dalam semenit, sejam, sehari, atau setahun. Namun jika menyerah, rasa sakit itu akan terasa selamanya.",
    "Kekuatan dan perkembangan datang hanya dari usaha dan perjuangan yang terus menerus.",
    "Pengusaha itu bukan orang yang pintar tetapi mereka pintar mencari orang pintar.",
    "Hidup itu sebentar. Kamu harus bisa tersenyum saat merasakan kepedihan atau kita tak akan pernah melanjutkan hidup.",
    "Yang keren itu bukan anak muda yang banyak gaya, tapi anak muda yang banyak karya.",
    "Hanya seseorang yang takut yang bisa bertindak berani. Tanpa rasa takut itu tidak ada apapun yang bisa disebut berani.",
    "Siapapun yang berusaha menjatuhkanmu memang sudah berada di bawahmu.",
    "Kesuksesan dan kegagalan adalah sama-sama bagian dalam hidup. Keduanya hanyalah sementara.",
    "Ia yang mengerjakan lebih dari apa yang dibayar pada suatu saat akan dibayar lebih dari apa yang ia kerjakan.",
    "Rahasia dari kesuksesan kita adalah bahwa kita tidak pernah menyerah.",
    "Karena hidup adalah pilihan.",
    "Memaafkan belum tentu membuat kita lebih baik atau bahkan merasa lebih baik tetapi yang jelas membuka jalan kebaikan.",
    "Memaafkan belum tentu membuat kita lebih baik atau bahkan merasa lebih baik, tetapi yang jelas membuka jalan kebaikan.",
    "Ujian kesetiaan selalu datang setiap hari, pastikan kamu setia kepada orang yang tepat.",
    "Aku tak ingin membuatmu rindu padaku. Karena rindu itu artinya sedih. Dan aku tak ingin menjadi alasanmu bersedih.",
    "Aku memilih memandangimu daripada segala lukisan yang ada di dunia.",
    "Relasi itu seperti bunga yang membutuhkan air, bisa kering dan mati tanpa komunikasi.",
    "Akan lebih baik bersabar menunggu seseorang datang menyapa daripada mengharapkan dia yang memilih pergi untuk kembali.",
    "Mencintai itu butuh tenaga, jangan kau buang tenagamu untuk berlari dan menyerah.",
    "Percayalah, jika dia memang cinta sejati kau, mau semenyakitkan apa pun, mau seberapa sulit liku yang harus dilalui, dia tetap akan bersama kau kelak, suatu saat nanti.",
    "Cinta itu mempunyai kesanggupan yang hebat. Dia bisa membuat binatang menjadi manusia, dan manusia menjadi binatang.",
    "Jauh sebelum aku bertemu denganmu, aku telah mengenalmu dalam doaku.",
    "Cinta merupakan sesuatu yang indah, ia laksana sebuah lukisan di awan, cerah membingkai ufuk senja.",
    "Semoga kelak selimutku adalah kamu yang senantiasa menghangatkanku di kala dingin menyerang tubuh dan jiwaku.",
    "Aku menginginkanmu seutuhnya, selamanya, kamu dan aku, setiap hari.",
    "Cinta itu burung yang indah, yang mengemis untuk ditangkap tapi menolak untuk dilukai.",
    "Karena cinta, duri menjadi mawar. Karena cinta, cuka menjelma anggur segar.",
    "Cinta tak berupa tatapan satu sama lain, tetapi memandang keluar bersama ke arah yang sama.",
    "Cinta tidak terlihat dengan mata, tetapi dengan hati.",
    "Kau pikir aku memperhatikanmu? Tidak, Sayang. Aku memperhatikan lingkunganmu, barangkali ada yang akan mengganggumu, kuhajar dia.",
    "Cinta tidak pernah menuntut, cinta selalu memberi. Cinta selalu menderita, tanpa pernah meratap, tanpa pernah mendendam.",
    "Cinta itu layaknya angin, aku tidak bisa melihatnya tetapi aku bisa merasakannya.",
    "Cinta bukanlah bertahan seberapa lama. Tetapi seberapa jelas dan ke arah mana.",
    "Sahabat yang baik tidak akan mencelakai, tetapi sahabat yang baik akan menasehati, melindungi, dan tulus mengasihi.",
    "Hal terindah dari persahabatan adalah memahami dan dipahami, tanpa pernah memaksa dan ingin menang sendiri.",
    "Jika kau mendapat sahabat sejati yang tak luntur baik dalam keadaan suka ataupun duka. Berjanjilah dalam hatimu untuk selalu setia padanya.",
    "Persahabatan tidak perlu saling mengerti. Karena sahabat akan saling menerima hal yang tak bisa dimengerti.",
    "Sahabat bukan mereka yang menghampirimu ketika butuh, namun mereka yang tetap bersamamu ketika seluruh dunia menjauh.",
    "Persahabatan sejati itu layaknya kesehatan, nilainya baru kita sadari setelah kita kehilangannya.",
    "Lebih baik ku menemani sahabat di kala sendiri daripada menemani kekasih yang tak mempunyai waktu untukku di kala ku sendiri dalam sepi.",
    "Bersahabat bukan berarti kita mempercayainya, tapi bersahabat bagaimana kita dapat dipercaya olehnya. Kepercayaan itu penting.",
    "Sahabat adalah orang yang akan membangunkan kita dari tidur walaupun sedang bermimpi indah.",
    "Ketika dalam kesulitan, mereka menghilang, ketika dalam kebahagiaan, mereka datang dengan riang. Tidak, mereka bukan teman!",
    "Setiap orang berbeda, unik dengan caranya. Kamu harus menghargainya, tapi tak berarti kamu harus menyukai semuanya.",
    "Sahabat itu seperti halnya mata dan tangan. Saat mata menangis tangan mengusap, saat tangan terluka mata menangis.",
    "Persahabatan yang didasari oleh keikhlasan hati dan kasih sayang, akan melahirkan keabadian dalam kebersamaan.",
    "Jika kau mendapat sahabat sejati yang tak luntur baik dalam keadaan suka ataupun duka. Berjanjilah dalam hatimu untuk selalu setia padanya.",
    "Bila esok tiba aku ingin seperti hari-hari sebelumnya. Hari-hari bersama sahabat dan teman-teman untuk bisa bersama melakukan hal-hal positif yang menyenangkan.",
    "Apabila engkau menginginkan kemuliaan maka carilah sahabat dari orang orang yang takut kepada Allah subhanahu wataa'la.",
    "Bisa jadi semua teman kita pergi, tapi tidak dengan sahabat",
    "Persahabatan itu motivasi dan inspirasi, bukan hanya gengsi dan basa-basi.",
    "Tak ada yang terasa semengerikan dulu saat kau sudah punya teman sejati.",
    "Persahabatan tak terjalin dengan orang yang istimewa. Kita jadi istimewa karena bersahabat. Sahabatlah yang mengistimewakan kita."]
