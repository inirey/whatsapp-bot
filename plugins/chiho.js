let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/chiho?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'chiho.jpg', `© sekha`, m)
}
handler.help = ['chiho']
handler.tags = ['random']
handler.command = /^(chiho)$/i
handler.limit = true

module.exports = handler
