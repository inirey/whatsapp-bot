let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/mikasa?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'mikasa.jpg', `© sekha`, m)
}
handler.help = ['mikasa']
handler.tags = ['random']
handler.command = /^(mikasa)$/i
handler.limit = true

module.exports = handler
