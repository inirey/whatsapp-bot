let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/naruto?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'naruto.jpg', `© sekha`, m)
}
handler.help = ['naruto']
handler.tags = ['random']
handler.command = /^(naruto)$/i
handler.limit = true

module.exports = handler
