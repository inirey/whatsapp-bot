let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/gaming?apikey=apirey`
  conn.sendFile(m.chat, res, 'gaming.jpg', `© Reysekha`, m)
}
handler.help = ['gaming']
handler.tags = ['wallhp']
handler.command = /^(gaming)$/i
handler.limit = true

module.exports = handler
