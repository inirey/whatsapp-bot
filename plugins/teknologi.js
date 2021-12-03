let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://server-api-rey.herokuapp.com/api/wallpaper/teknologi?apikey=apirey`
  conn.sendFile(m.chat, res, 'teknologi.jpg', `© Reysekha`, m)
}
handler.help = ['teknologi']
handler.tags = ['wallhp']
handler.command = /^(teknologi)$/i
handler.limit = true

module.exports = handler
