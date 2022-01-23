let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/akira?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'akira.jpg', `© sekha`, m)
}
handler.help = ['akira']
handler.tags = ['random']
handler.command = /^(akira)$/i
handler.limit = true

module.exports = handler
