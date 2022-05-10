let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, global.API('sekhaAPI', '/api/wallpaper/justina', {}, 'apikey'))
}
handler.help = ['justina']
handler.tags = ['ptl']
handler.command = /^(justina)$/i
handler.limit = true

module.exports = handler

