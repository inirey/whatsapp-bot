let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/hestia?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'hestia.jpg', `© sekha`, m)
}
handler.help = ['hestia']
handler.tags = ['random']
handler.command = /^(hestia)$/i
handler.limit = true

module.exports = handler
