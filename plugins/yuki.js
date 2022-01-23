let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/yuki?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'yuki.jpg', `© sekha`, m)
}
handler.help = ['yuki']
handler.tags = ['random']
handler.command = /^(yuki)$/i
handler.limit = true

module.exports = handler
