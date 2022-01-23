let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/sakura?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'sakura.jpg', `© sekha`, m)
}
handler.help = ['sakura']
handler.tags = ['random']
handler.command = /^(sakura)$/i
handler.limit = true

module.exports = handler
