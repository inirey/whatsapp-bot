let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/shizuka?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'shizuka.jpg', `© sekha`, m)
}
handler.help = ['shizuka']
handler.tags = ['random']
handler.command = /^(shizuka)$/i
handler.limit = true

module.exports = handler
