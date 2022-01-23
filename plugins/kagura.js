let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/kagura?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'kagura.jpg', `© sekha`, m)
}
handler.help = ['kagura']
handler.tags = ['random']
handler.command = /^(kagura)$/i
handler.limit = true

module.exports = handler
