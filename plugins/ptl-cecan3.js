let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, global.API('sekhaAPI', '/api/wallpaper/cecan3', {}, 'apikey'))
}
handler.help = ['cecan3']
handler.tags = ['ptl']
handler.command = /^(cecan3)$/i
handler.limit = true

module.exports = handler