let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/boruto?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'boruto.jpg', `© sekha`, m)
}
handler.help = ['boruto']
handler.tags = ['random']
handler.command = /^(boruto)$/i
handler.limit = true

module.exports = handler
