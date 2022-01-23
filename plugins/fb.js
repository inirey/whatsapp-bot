//okcok
const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `uhm.. url nya mana?\n\ncontoh:\n${usedPrefix + command} https://www.facebook.com/alanwalkermusic/videos/277641643524720`
  if (/^https?:\/\/.*(m.facebook.com||www.facebook.com|facebook.com)/i.test(m.text)) throw `hanya support url dari FB lite dan web saja _harap cek url kembali_`

  let res = await fetch(API('xteam', '/dl/fbv2', { url: args[0] }, 'APIKEY'))
  if (!res.ok) return m.reply(eror)
  let json = await res.json()
  await m.reply(wait)
  await conn.sendFile(m.chat, json.result.hd.url, '', 'sukses ✓', m)
}
handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i

handler.premium = true

module.exports = handler
