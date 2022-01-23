let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/erza?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'erza.jpg', `© sekha`, m)
}
handler.help = ['erza']
handler.tags = ['random']
handler.command = /^(erza)$/i
handler.limit = true

module.exports = handler
