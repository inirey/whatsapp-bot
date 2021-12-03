let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://server-api-rey.herokuapp.com/api/nsfw/ass?apikey=apirey`
  conn.sendFile(m.chat, res, 'ass.jpg', `jangan di buat bahan comli om :v`, m)
}
handler.help = ['nsfwass']
handler.tags = ['nsfw']
handler.command = /^(nsfwass)$/i
handler.limit = true

module.exports = handler
