let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `┏━━━ꕥ〔 *Beli Bot* 〕ꕥ━⬣
┃➥ *2 Minggu:* RM 5.00
┃➥ *Permanent:* RM 10.00
┃➥ *Premium:* RM 15.00
┃➥ *Jasa Buat Bot:* RM 20.00
┃➥ *Jasa Run:* RM 5.00
┃➥ *Edit Sc/tambah Fitur Bot*
┃➥ *1 Fitur:* RM 5.00 No Apikey
┃➥ *1 Fitur:* RM 8.00 + Apikey
┃➥ *Beli Apikey:* RM 15.00 = 1 Bulan
┃➥ *Sc Bot:* wa.me/60108026373
┗━━━ꕥ
┏━━━ꕥ〔 *PEMBAYARAN* 〕ꕥ━⬣
┃➥ Touch n' Go , Bankin
┃
┃✾ *Tertarik Untuk Beli Bot Ini?*
┃➥Ketik Button Di Bawah Ya
┃
┃©2022 Synxstore
┃Scrip original by Synxbotz
┗━━━ꕥ〔 *${namabot}* 〕ꕥ━⬣`.trim(), footer, 'Tng', '#viatng', 'Owner', '#owner', 'List Menu', '#menu', m)
}

handler.command = /^sewa(bot)?$/i

module.exports = handler
