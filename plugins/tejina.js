let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/tejina?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'tejina.jpg', `© sekha`, m)
}
handler.help = ['tejina']
handler.tags = ['random']
handler.command = /^(tejina)$/i
handler.limit = true

module.exports = handler
