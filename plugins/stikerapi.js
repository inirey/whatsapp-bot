// Created By Sekha
const uploadImage = require('../lib/uploadImage')
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, usedPrefix, text, command }) => {
  
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'balas gambarnya!'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak didukung`
  let img = await q.download()
  let url = await uploadImage(img)
  let apiUrl = global.API('https://api.zeks.me/api/burning-image?apikey=apivinz', { image: url})
  try {
    let stiker = await sticker(null, apiUrl, global.packname, global.author)
    await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  } catch (e) {
    await conn.sendFile(m.chat, apiUrl, 'image.png', null, m, 0, { thumbnail: await (await fetch(apiUrl)).buffer() })
  }
}

handler.help = ['stikerfilter']
handler.tags = ['stickerapi']
handler.command = /^(s(tic?ker)?api)$/i

module.exports = handler
