let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://server-api-rey.herokuapp.com/api/nsfw/blowjob?apikey=apirey`
  conn.sendFile(m.chat, res, 'blowjob.jpg', `jangan di buat bahan comli om :v`, m)
}
handler.help = ['blowjob']
handler.tags = ['nsfw']
handler.command = /^(blowjob)$/i
handler.limit = true

module.exports = handler
