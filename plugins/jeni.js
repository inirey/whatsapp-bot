let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://server-api-rey.herokuapp.com/api/wallpaper/jeni?apikey=apirey`
  conn.sendFile(m.chat, res, 'jeni.jpg', `© Reysekha`, m)
}
handler.help = ['jeni']
handler.tags = ['random']
handler.command = /^(jeni)$/i
handler.limit = true

module.exports = handler
