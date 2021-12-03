let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://server-api-rey.herokuapp.com/api/wallpaper/mountain?apikey=apirey`
  conn.sendFile(m.chat, res, 'mountain.jpg', `© Reysekha`, m)
}
handler.help = ['mountain']
handler.tags = ['wallhp']
handler.command = /^(mountain)$/i
handler.limit = true

module.exports = handler
