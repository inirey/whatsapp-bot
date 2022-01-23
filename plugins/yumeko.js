let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/yumeko?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'yumeko.jpg', `© sekha`, m)
}
handler.help = ['yumeko']
handler.tags = ['random']
handler.command = /^(yumeko)$/i
handler.limit = true

module.exports = handler
