let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Silakan masukkan kode negaranya\ncontoh:\n${usedPrefix + command} en`
  m.reply('_Sedang membuat..._\n*Mohon tunggu sekitar 1 menit*')
  let res = await fetch(`https://apikey-bear3.herokuapp.com/api/fakedata?country=${args[0]}&apikey=KingOfBear`)
  if (!res.ok) throw eror
  let json = await res.json()

 let iggs = `
┏━━━ꕥ *FAKE DATA* ꕥ━⬣
┃✾ *Name:* ${json.result.name}
┃✾ *Birthday:* ${json.result.birthday}
┃✾ *Address:* ${json.result.address}
┃✾ *City:* ${json.result.city}
┃✾ *Region:* ${json.result.region}
┃✾ *Country:* ${json.result.country}
┃✾ *Zip:* ${json.result.zip}
┃✾ *Number Phone:* ${json.result.phone_number}
┃✾ *Username:* ${json.result.username}
┃✾ *Password:* ${json.result.password}
┃✾ *Email:* ${json.result.email}
┗━❑`
await m.reply(`${iggs}\n\nSupport Terus _*©KingOfBear*_`)
} 

handler.help = ['fakedata']
handler.tags = ['tools']
handler.command = /^fakedata$/i

module.exports = handler
