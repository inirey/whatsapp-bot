let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/toukachan?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'toukachan.jpg', `© sekha`, m)
}
handler.help = ['toukachan']
handler.tags = ['random']
handler.command = /^(toukachan)$/i
handler.limit = true

module.exports = handler
