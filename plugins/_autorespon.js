let fs = require('fs')
let fetch = require('node-fetch')
let levelling = require('../lib/levelling')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (isBlocked) return
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    let setting = db.data.settings[this.user.jid]
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]
    let name = conn.getName(m.sender)
    let { exp, limit, level, role } = global.db.data.users[m.sender]
  let { min, xp, max } = levelling.xpRange(level, global.multiplier)
  let math = max - xp
    // ketika ditag
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.send2Button(m.chat,
                isBanned ? `${namabot} tidak aktif` : banned ? 'kamu dibanned' : `${namabot} disini, ada yang bisa saya bantu?`,
                footer,
                isBanned ? 'Unban' : banned ? 'Pemilik Bot' : 'Menu',
                isBanned ? '.unban' : banned ? '.owner' : '.?',
                m.isGroup ? 'Ban' : isBanned ? 'Unban' : 'Donasi',
                m.isGroup ? '.ban' : isBanned ? '.unban' : '.donasi', m)
        }
    } catch (e) {
        return
    }

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup && !m.fromMe && !m.isOwner) {
        this.send2ButtonLoc(m.chat, await (await fetch(`https://i.ibb.co/rkTg7B0/donasi.jpg`)).buffer(), `┏━━━ꕥ〔 *${namabot}* 〕ꕥ━⬣
┃✾ Hai, ${name}!
┃
┃✾ Tersisa *${limit} Limit*
┃✾ Role *${role}*
┃✾ Level *${level} (${exp} / ${max}exp)* 
┃✾ Siap untuk *#levelup* : ${math} XP lagi
┃✾ ${exp} XP secara Total
┗━ꕥ
┏━━━ꕥ〔 *BELI/SEWA BOT* 〕ꕥ━⬣
┃✾ *1 Bulan :* RM 5
┃✾ *Permanen :* RM 10
┃✾ *Premium :* RM 15
┃✾ *Sc Bot :* https://pastelink.net/v20Md 
┗━ꕥ
┏━━━ꕥ〔 *PAYMENT METHOD* 〕ꕥ━⬣
┃✾ *Tng :* 0179095675
┃✾ *Maxis :* 0173734022
┃✾ *Tunetalk :* 0108026373
┃✾ *Shopeepay :* Scan QR Code
┗━ꕥ`.trim(), footer, 'Tng', '#viatng', 'Owner', '#owner', m)
}

    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i


    let isSalam = reg.exec(m.text)

    if (isSalam && !m.fromMe) {
        m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._`)
        let res = await fetch(`https://github.com/saipulanuar/Api-Github/raw/main/audio/assalamualaikum.mp3`)
     json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
    }

    
    // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
            setting.backupDB = new Date() * 1
        }
    }

    // update status
    if (new Date() * 1 - setting.status > 1000) {
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        await this.setStatus(`Aktif selama ${uptime} | Mode: ${global.opts['self'] ? 'Private' : setting.groupOnly ? 'Hanya Grup' : 'Publik'} | ${namabot} by ${namalu}`).catch(_ => _)
        setting.status = new Date() * 1
    }

}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
