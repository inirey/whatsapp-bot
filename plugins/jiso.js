let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://server-api-rey.herokuapp.com/api/wallpaper/jiso?apikey=apirey`
  conn.sendFile(m.chat, res, 'jiso.jpg', `© Reysekha`, m)
}
handler.help = ['jiso']
handler.tags = ['random']
handler.command = /^(jiso)$/i
handler.limit = true

module.exports = handler
