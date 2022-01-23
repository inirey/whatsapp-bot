let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/tsunade?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'tsunade.jpg', `© sekha`, m)
}
handler.help = ['tsunade']
handler.tags = ['random']
handler.command = /^(tsunade)$/i
handler.limit = true

module.exports = handler
