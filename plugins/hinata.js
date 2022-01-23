let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/hinata?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'hinata.jpg', `© sekha`, m)
}
handler.help = ['hinata']
handler.tags = ['random']
handler.command = /^(hinata)$/i
handler.limit = true

module.exports = handler
