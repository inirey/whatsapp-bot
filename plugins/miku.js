let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/miku?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'miku.jpg', `© sekha`, m)
}
handler.help = ['miku']
handler.tags = ['random']
handler.command = /^(miku)$/i
handler.limit = true

module.exports = handler
