let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://server-api-rey.herokuapp.com/api/nsfw/glasses?apikey=apirey`
  conn.sendFile(m.chat, res, 'glass.jpg', `jangan di buat bahan comli om :v`, m)
}
handler.help = ['glass']
handler.tags = ['nsfw']
handler.command = /^(glass)$/i
handler.limit = true

module.exports = handler
