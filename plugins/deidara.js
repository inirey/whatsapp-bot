let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/deidara?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'deidara.jpg', `© sekha`, m)
}
handler.help = ['deidara']
handler.tags = ['random']
handler.command = /^(deidara)$/i
handler.limit = true

module.exports = handler
