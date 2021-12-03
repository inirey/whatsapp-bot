let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://server-api-rey.herokuapp.com/api/nsfw/gangbang?apikey=apirey`
  conn.sendFile(m.chat, res, 'gangbang.jpg', `jangan di buat bahan comli om :v`, m)
}
handler.help = ['gangbang']
handler.tags = ['nsfw']
handler.command = /^(gangbang)$/i
handler.limit = true

module.exports = handler
