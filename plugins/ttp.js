const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn, text, command }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  if (/^ttp1?$/i.test(command)) {
    let stiker = await sticker(null, global.API('xteam', '/ttp', { file: '', text: teks }), global.packname, global.author)
    if (stiker) return await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    throw stiker.toString()
  }
  if (/2$/i.test(command)) {
    let url = await fetch(global.API('https://salism3api.pythonanywhere.com', '/text2img/', { text: teks }))
    if (!url.ok) throw eror
    res = await url.json()
    stick = res.image
    let stiker = await sticker(null, stick, global.packname, global.author)
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  }
  if (/3$/i.test(command)) {
    let stiker = await sticker(null, global.API('hardianto', '/api/maker/ttp', { text: teks }, 'apikey'), global.packname, global.author)
    if (stiker) return await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    throw stiker.toString()
  }
  if (/4$/i.test(command)) {
    let url = await fetch(global.API('https://salism3api.pythonanywhere.com', '/text2img/', { text: teks, outlineColor: '255,0,0,255', textColor: '0,0,0,255' }))
    if (!url.ok) throw eror
    res = await url.json()
    stick = res.image
    let stiker = await sticker(null, stick, global.packname, global.author)
    if (stiker) return await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    throw stiker.toString()
  }
  if (/^ttp5?$/i.test(command)) {
    let stiker = await sticker(null, `https://api.lolhuman.xyz/api/ttp?apikey=${bearkey}&text=${teks}`, global.packname, global.author)
    if (stiker) return await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    throw stiker.toString()
  }
  if (/^ttp6?$/i.test(command)) {
    let stiker = await sticker(null, `https://api.lolhuman.xyz/api/ttp2?apikey=${bearkey}&text=${teks}`, global.packname, global.author)
    if (stiker) return await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    throw stiker.toString()
  }
  if (/^ttp7?$/i.test(command)) {
    let stiker = await sticker(null, `https://api.lolhuman.xyz/api/ttp3?apikey=${bearkey}&text=${teks}`, global.packname, global.author)
    if (stiker) return await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    throw stiker.toString()
  }
  if (/^ttp8?$/i.test(command)) {
    let stiker = await sticker(null, `https://api.lolhuman.xyz/api/ttp6?apikey=${bearkey}&text=${teks}`, global.packname, global.author)
    if (stiker) return await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    throw stiker.toString()
  }
  if (/^ttp9?$/i.test(command)) {
    let stiker = await sticker(null, `https://api.lolhuman.xyz/api/ttp5?apikey=${bearkey}&text=${teks}`, global.packname, global.author)
    if (stiker) return await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    throw stiker.toString()
  }
}
handler.help = new Array(9).fill('ttp').map((v, i) => v + (i + 1) + ' <teks>')
handler.tags = ['sticker']

handler.command = /^ttp[1-9]?$/i

module.exports = handler
