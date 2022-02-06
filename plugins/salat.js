const fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {

    if (!text) return m.reply(`contoh:\n${usedPrefix + command} jakarta`)
    m.reply('_Sedang Mencari..._\n*Mohon tunggu sekitar 1 menit*')
    let res = await fetch(`https://api.lolhuman.xyz/api/sholat/${text}?apikey=${lolkey}`)
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (!json.status) {
        if (json.result == 'eror') throw 'Masukkan Nama Kota Yang benar'
 }
bear = `┏━━━ꕥ〔 *JADWAL SHOLAT* 〕ꕥ━⬣
┃✾ *Wilayah:* ${json.result.wilayah}
┃✾ *Tanggal :* ${json.result.tanggal}
┃✾ *Sahur:* ${json.result.sahur} Wib
┃✾ *Imsak:* ${json.result.imsak} Wib
┃✾ *Subuh:* ${json.result.subuh} Wib
┃✾ *Terbit:* ${json.result.terbit} Wib
┃✾ *Dhuha:* ${json.result.dhuha} Wib
┃✾ *Dzuhur:* ${json.result.dzuhur} Wib
┃✾ *Ashar:* ${json.result.ashar} Wib
┃✾ *Maghrib:* ${json.result.maghrib} Wib
┃✾ *Isya:* ${json.result.isya} Wib
┗━ꕥ _*©KingOfBear*_ ꕥ━⬣`
m.reply(bear)
}

handler.help = ['salat <daerah>', 'sholat <daerah>']
handler.tags = ['quran']
handler.command = /^(jadwal)?s(a|o|ha|ho)lat$/i

module.exports = handler