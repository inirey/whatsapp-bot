let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {

  if (!args[0]) throw `url nya mana?\n\ncontoh:\n${usedPrefix + command} https://youtu.be/Idbwkjsa`
  if (!args[0].match(/youtu.be/gi)) throw `url salah`

  let res = await fetch(API('fxc7', '/api/download/ytmp3', { url: args[0] }, 'apikey'))
  if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (!json.status) throw json
    let { judul, artist, album, thumbnail, url, size, duration } = json.result
    conn.sendFile(m.chat, url, 'error.mp3', '', m, 0, { asDocument: db.data.chats[m.chat].useDocument, mimetype: 'audio/mp4' })
}

handler.help = ['yta2'].map(v => v + 'url')
handler.tags = ['downloader']
handler.command = /^(yta2)$/i

handler.limit = true

module.exports = handler
