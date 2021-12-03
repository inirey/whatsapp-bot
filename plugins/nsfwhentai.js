let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://server-api-rey.herokuapp.com/api/nsfw/hentai?apikey=apirey`
  conn.sendFile(m.chat, res, 'hentai.jpg', `jangan di buat bahan comli om :v`, m)
}
handler.help = ['hentai']
handler.tags = ['nsfw']
handler.command = /^(hentai)$/i
handler.limit = true

module.exports = handler
