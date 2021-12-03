let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {

  if (!args[0]) throw `uhm.. judulnya nya mana?\n\ncontoh:\n${usedPrefix + command} scplay akad`
  //if (!args[0].match(/tiktok/gi)) throw `query salah`

  let res = await fetch(API('rey', '/api/download/soundcloud/play', { query: args[0] }, 'apikey'))
  if (!res.ok) throw eror
  let json = await res.json()
  // if (!json.status) throw json
  await m.reply(wait)
  await conn.sendFile(m.chat, json.result.download, '', '', m)

}
handler.help = ['scplay'].map(v => v + ' query')
handler.tags = ['downloader']
handler.command = /^(scplay)$/i

handler.limit = true

module.exports = handler
