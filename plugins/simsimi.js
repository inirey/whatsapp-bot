let fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `uhm.. teksnya mana?\n\ncontoh:\n${usedPrefix + command} hai`
  let res = await fetch(global.API('rey', '/api/fun/simisimi-ind2', { text: encodeURIComponent(text) }, 'apikey'))
  if (!res.ok) throw eror
  let json = await res.json()
  if (json.result == 'Aku tidak mengerti apa yang kamu katakan.Tolong ajari aku.') await m.reply('siminya blom diajarin jadi gatau t_t custom pesannya di https://simsimi.com/teach')
  await m.reply(`${json.result.success}`)
}
handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i
handler.premium = false
handler.limit = true
handler.group = true
handler.private = true

module.exports = handler

