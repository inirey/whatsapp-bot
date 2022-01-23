let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/inori?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'inori.jpg', `© sekha`, m)
}
handler.help = ['inori']
handler.tags = ['random']
handler.command = /^(inori)$/i
handler.limit = true

module.exports = handler
