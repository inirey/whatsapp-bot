let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/shina?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'shina.jpg', `© sekha`, m)
}
handler.help = ['shina']
handler.tags = ['random']
handler.command = /^(shina)$/i
handler.limit = true

module.exports = handler
