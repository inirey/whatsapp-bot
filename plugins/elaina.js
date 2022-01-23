let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/elaina?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'elaina.jpg', `© sekha`, m)
}
handler.help = ['elaina']
handler.tags = ['random']
handler.command = /^(elaina)$/i
handler.limit = true

module.exports = handler
