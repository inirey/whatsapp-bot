let skh = require('skh-api')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!q) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} logo`
  let res = await skh.pinterest(q)
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.status) throw json
  let sil = json.result[Math.floor(Math.random() * json.result.length)];
  conn.sendFile(m.chat, sil, '', '© sekha', m, 0, { thumbnail: await (await fetch(sil)).buffer() })
}
handler.help = ['pinterest2 <pencarian>']
handler.tags = ['internet']
handler.command = /^(pint(erest2)?)$/i
handler.limit = true

module.exports = handler
