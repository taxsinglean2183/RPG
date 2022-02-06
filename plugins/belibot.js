let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `┏━━━ꕥ〔 *Beli Bot* 〕ꕥ━⬣
┃➥ *1 Bulan:* Rp 15.000,00
┃➥ *Permanen:* Rp 25.000,00
┃➥ *Premium:* Rp 10.000,00
┃➥ *Permanen+SC:* Rp 100.000,00
┃➥ *Jasa Run:* Rp 15.000,00
┃➥ *Edit Sc/Nambah Fitur Bot*
┃➥ *1 Fitur:* Rp 5.000.00 No Apikey
┃➥ *1 Fitur:* Rp 8.000.00 + Apikey
┃➥ *Beli Apikey:* Rp 20.000.00 = 1 Bulan
┃➥ *Sc Bot:* https://youtu.be/Sgb5BVOW66Y
┗━━━ꕥ
┏━━━ꕥ〔 *PEMBAYARAN* 〕ꕥ━⬣
┃➥ Gopay, Dana, Dan Ovo
┃
┃✾ *Tertarik Untuk Beli Bot Ini?*
┃➥Ketuk Tombol Di Bawah Ya
┃
┃©2022 King Of Bear
┃Scrip original by Nurutomo
┗━━━ꕥ〔 *${namabot}* 〕ꕥ━⬣`.trim(), footer, 'Dana', '#viadana', 'Owner', '#owner', 'List Menu', '#menu', m)
}

handler.command = /^sewa(bot)?$/i

module.exports = handler
