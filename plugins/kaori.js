let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/kaori?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'kaori.jpg', `© sekha`, m)
}
handler.help = ['kaori']
handler.tags = ['random']
handler.command = /^(kaori)$/i
handler.limit = true

module.exports = handler
