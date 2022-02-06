const { MessageType } = require("@adiwajshing/baileys")
let axios = require("axios");
let fs = require("fs");
let handler = async(m, { conn, args, text, usedPrefix: _p }) => {
//if(args.length == 0) return m.reply(`Cara Penggunaan: Reply Foto, Ketik *${_p}faketroli* <TextMessage> | <OrderMessage> | <OrderTitle>\nContoh: *${_p}faketroli* Hai Wibu | ZEROBOT | 10k Bang?`) 
	let [poop, tytyd] = text.split("|")
	if(!poop) return m.reply("Masukkan Teks Utama")
	if(!tytyd) tytyd = "Yuki Bot"
  function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
runtime = process.uptime()
  teks = `𝑲𝒊𝒏𝒈 𝑶𝒇 𝑩𝒆𝒂𝒓 𝑶𝒇𝒇𝒊𝒄𝒊𝒂𝒍`// \n\n${kyun(runtime)}`
          run = `${kyun(runtime)}`
	//if(!kecil) return m.reply("Masukkan Teks Title Order!")
  try{
//let q = m.quoted ? m.quoted : m
//let mime = (q.msg || q).mimetype || ''
   // if (!/image\/(jpe?g|png)/.test(mime)) return m.reply("Foto Aja Om :)")
    //let img = await q.download()
let img1 = fs.readFileSync('./src/img1.png')
	const xixi = {
	                  key : {
                                participant : '0@s.whatsapp.net'
                               },
                    message: {
                    orderMessage: {
                            itemCount : 999,
                            status: 1,
                            surface : 1,
                            message: `${teks}\n${run}`,
                            orderTitle: `${teks}\n${run}`,
                            thumbnail: img1,
                            sellerJid: '0@s.whatsapp.net'
                        }
                }
          }
          conn.sendMessage(m.chat, poop, MessageType.extendedText, { quoted: xixi })
      }catch (e){
      	m.reply("```ERROR```")
      console.log(e)
      }
}

handler.command = /^(troly)$/i

module.exports = handler
