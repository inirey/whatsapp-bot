let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/madara?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'madara.jpg', `© sekha`, m)
}
handler.help = ['madara']
handler.tags = ['random']
handler.command = /^(madara)$/i
handler.limit = true

module.exports = handler
