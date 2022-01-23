let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/isuzu?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'isuzu.jpg', `© sekha`, m)
}
handler.help = ['isuzu']
handler.tags = ['random']
handler.command = /^(isuzu)$/i
handler.limit = true

module.exports = handler
