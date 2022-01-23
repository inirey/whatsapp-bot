let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/itachi?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'itachi.jpg', `© sekha`, m)
}
handler.help = ['itachi']
handler.tags = ['random']
handler.command = /^(itachi)$/i
handler.limit = true

module.exports = handler
