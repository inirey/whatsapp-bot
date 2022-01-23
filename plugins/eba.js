let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/eba?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'eba.jpg', `© sekha`, m)
}
handler.help = ['eba']
handler.tags = ['random']
handler.command = /^(eba)$/i
handler.limit = true

module.exports = handler
