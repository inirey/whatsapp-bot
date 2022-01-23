let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/yotsuba?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'yotsuba.jpg', `© sekha`, m)
}
handler.help = ['yotsuba']
handler.tags = ['random']
handler.command = /^(yotsuba)$/i
handler.limit = true

module.exports = handler
