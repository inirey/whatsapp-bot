let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://server-api-rey.herokuapp.com/api/nsfw/cuckold?apikey=apirey`
  conn.sendFile(m.chat, res, 'cuklold.jpg', `jangan di buat bahan comli om :v`, m)
}
handler.help = ['cuklold']
handler.tags = ['nsfw']
handler.command = /^(cuklold)$/i
handler.limit = true

module.exports = handler
