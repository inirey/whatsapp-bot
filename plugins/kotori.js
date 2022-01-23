let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/kotori?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'kotori.jpg', `© sekha`, m)
}
handler.help = ['kotori']
handler.tags = ['random']
handler.command = /^(kotori)$/i
handler.limit = true

module.exports = handler
