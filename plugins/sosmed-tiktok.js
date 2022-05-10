let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {

  if (!args[0]) throw `plese input url\n\ncontoh:\n${usedPrefix + command} https://vt.tiktok.com/yqyjPX/`
  if (!args[0].match(/tiktok/gi)) throw `url Wrong`

  let res = await fetch(API('sekhaAPIs', '/api/download/tiktok', { url: args[0] }, 'apikey'))
  if (!res.ok) throw eror
  let json = await res.json()
  // if (!json.status) throw json
  await m.reply(wait)
  await conn.sendFile(m.chat, json.result.nowatermark, '', `© sekha`, m)

}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['media']
handler.command = /^(tiktok)$/i
handler.limit = true

module.exports = handler
