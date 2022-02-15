/*
Made with By sekha ❤️
*/

let fetch = require("node-fetch")

let handler = async (m, { conn }) => {
  let res = await fetch(global.API('rey', '/api/wallpaper/ppcouple', {}, 'apikey'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  await conn.sendFile(m.chat, json.male, '', 'Man', m)
  await conn.sendFile(m.chat, json.female, '', 'Woman', m)
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['random']
handler.command = /^(pp(cp|couple))$/i
handler.limit = true

module.exports = handler
