let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/asuna?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'asuna.jpg', `© sekha`, m)
}
handler.help = ['asuna']
handler.tags = ['random']
handler.command = /^(asuna)$/i
handler.limit = true

module.exports = handler
