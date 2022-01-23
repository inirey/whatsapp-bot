let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/minato?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'minato.jpg', `© sekha`, m)
}
handler.help = ['minato']
handler.tags = ['random']
handler.command = /^(minato)$/i
handler.limit = true

module.exports = handler
