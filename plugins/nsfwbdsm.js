let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://server-api-rey.herokuapp.com/api/nsfw/bdsm?apikey=apirey`
  conn.sendFile(m.chat, res, 'bdsm.jpg', `jangan di buat bahan comli om :v`, m)
}
handler.help = ['bdsm']
handler.tags = ['nsfw']
handler.command = /^(bdsm)$/i
handler.limit = true

module.exports = handler
