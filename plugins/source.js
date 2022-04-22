// zx //

const sagiri = require("sagiri")
const fetch = require('node-fetch')
const uploadImage = require('../lib/uploadImage')

let handler = async (m, { conn, command }) => {
  
  await m.reply('Tunggu...')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No Image Found'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} not support`
  let img = await q.download()
  let url = await uploadImage(img)
  let client = sagiri("ad7f4af5ee5c04bfd0ac7df2c799bc62b05e3ed5")
  let sauces = await client(url)
  let sauce = sauces[0]
  await conn.send2ButtonImg(m.chat, await(await fetch(sauce.thumbnail)).buffer(), `
*「 ${command.toUpperCase()} 」*

*Source:* ${sauce.site}
*Author:* ${sauce.authorName}
  `.trim(), '© sekha', 'Author', '.mention '+sauce.authorUrl, sauce.site, '.mention '+sauce.url,false)
}
handler.help = ['sauce', 'source']
handler.tags = ['tools', 'internet']
handler.command = /^(sauce|source|saus)$/i
handler.limit = true

module.exports = handler
