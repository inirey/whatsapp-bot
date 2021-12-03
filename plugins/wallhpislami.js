let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://server-api-rey.herokuapp.com/api/wallpaper/islami?apikey=apirey`
  conn.sendFile(m.chat, res, 'islam.jpg', `© Reysekha`, m)
}
handler.help = ['islami']
handler.tags = ['wallhp']
handler.command = /^(islami)$/i
handler.limit = true

module.exports = handler
