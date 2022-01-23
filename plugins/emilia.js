let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/emilia?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'emilia.jpg', `© sekha`, m)
}
handler.help = ['emilia']
handler.tags = ['random']
handler.command = /^(emilia)$/i
handler.limit = true

module.exports = handler
