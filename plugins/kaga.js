let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/kaga?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'kaga.jpg', `© sekha`, m)
}
handler.help = ['kaga']
handler.tags = ['random']
handler.command = /^(kaga)$/i
handler.limit = true

module.exports = handler
