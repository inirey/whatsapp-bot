let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/random/blackpink?apikey=apirey`
  conn.sendFile(m.chat, res, 'blackpink.jpg', `© Reysekha`, m)
}
handler.help = ['blackpink']
handler.tags = ['random']
handler.command = /^(blackpink)$/i
handler.limit = true

module.exports = handler
