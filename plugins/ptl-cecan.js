let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, global.API('sekhaAPI', '/api/wallpaper/cecan', {}, 'apikey'))
}
handler.help = ['cecan']
handler.tags = ['ptl']
handler.command = /^(cecan)$/i
handler.limit = true

module.exports = handler