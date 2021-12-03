let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://server-api-rey.herokuapp.com/api/nsfw/ero?apikey=apirey`
  conn.sendFile(m.chat, res, 'ero.jpg', `jangan di buat bahan comli om :v`, m)
}
handler.help = ['ero']
handler.tags = ['nsfw']
handler.command = /^(ero)$/i
handler.limit = true

module.exports = handler
