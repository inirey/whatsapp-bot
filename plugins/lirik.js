let fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} dandelions`
  let res = await fetch(global.API('hardianto', '/api/info/lirik', { query: text }, 'apikey'))
  //if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.status) throw json
  m.reply(json.lirik)
}
handler.help = ['lirik'].map(v => v + ' <teks>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics?)$/i

module.exports = handler
