let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://server-api-rey.herokuapp.com/api/nsfw/cum?apikey=apirey`
  conn.sendFile(m.chat, res, 'cum.jpg', `jangan di buat bahan comli om :v`, m)
}
handler.help = ['cum']
handler.tags = ['nsfw']
handler.command = /^(cum)$/i
handler.limit = true

module.exports = handler
