let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, global.API('sekhaAPI', '/api/wallpaper/cecan', {}, 'apikey'))
}
handler.help = ['cecan2']
handler.tags = ['ptl']
handler.command = /^(cecan2)$/i
handler.limit = true

module.exports = handler