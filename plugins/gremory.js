let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/gremory?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'gremory.jpg', `© sekha`, m)
}
handler.help = ['gremory']
handler.tags = ['random']
handler.command = /^(gremory)$/i
handler.limit = true

module.exports = handler
