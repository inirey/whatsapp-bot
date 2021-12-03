let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://server-api-rey.herokuapp.com/api/wallpaper/cogan?apikey=apirey`
  conn.sendFile(m.chat, res, 'cogan.jpg', `© Reysekha`, m)
}
handler.help = ['cogan']
handler.tags = ['random']
handler.command = /^(cogan)$/i
handler.limit = true

module.exports = handler
