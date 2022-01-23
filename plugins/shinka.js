let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/shinka?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'shinka.jpg', `© sekha`, m)
}
handler.help = ['shinka']
handler.tags = ['random']
handler.command = /^(shinka)$/i
handler.limit = true

module.exports = handler
