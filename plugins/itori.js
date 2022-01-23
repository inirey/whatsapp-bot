let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/itori?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'itori.jpg', `© sekha`, m)
}
handler.help = ['itori']
handler.tags = ['random']
handler.command = /^(itori)$/i
handler.limit = true

module.exports = handler
