let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/sagiri?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'sagiri.jpg', `© sekha`, m)
}
handler.help = ['sagiri']
handler.tags = ['random']
handler.command = /^(sagiri)$/i
handler.limit = true

module.exports = handler
