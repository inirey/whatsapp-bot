let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://server-api-rey.herokuapp.com/api/wallpaper/programing?apikey=apirey`
  conn.sendFile(m.chat, res, 'programming.jpg', `© Reysekha`, m)
}
handler.help = ['programming']
handler.tags = ['wallhp']
handler.command = /^(programming)$/i
handler.limit = true

module.exports = handler
