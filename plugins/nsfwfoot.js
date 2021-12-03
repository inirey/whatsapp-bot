let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://server-api-rey.herokuapp.com/api/nsfw/foot?apikey=apirey`
  conn.sendFile(m.chat, res, 'foot.jpg', `jangan di buat bahan comli om :v`, m)
}
handler.help = ['foot']
handler.tags = ['nsfw']
handler.command = /^(foot)$/i
handler.limit = true

module.exports = handler
