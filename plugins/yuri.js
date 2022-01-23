let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/yuri?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'yuri.jpg', `© sekha`, m)
}
handler.help = ['yuri']
handler.tags = ['random']
handler.command = /^(yuri)$/i
handler.limit = true

module.exports = handler
