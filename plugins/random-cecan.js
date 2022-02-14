let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/cecan?apikey=apirey`
  conn.sendFile(m.chat, res, 'cecan.jpg', `© Reysekha`, m)
}
handler.help = ['cecan']
handler.tags = ['random']
handler.command = /^(cecan)$/i
handler.limit = true

module.exports = handler
