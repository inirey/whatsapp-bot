let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/ayuzawa?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'ayuzawa.jpg', `© sekha`, m)
}
handler.help = ['ayuzawa']
handler.tags = ['random']
handler.command = /^(ayuzawa)$/i
handler.limit = true

module.exports = handler
