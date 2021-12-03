let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://server-api-rey.herokuapp.com/api/nsfw/ahegao?apikey=apirey`
  conn.sendFile(m.chat, res, 'ahegao.jpg', `jangan di buat bahan comli om :v`, m)
}
handler.help = ['ahegao']
handler.tags = ['nsfw']
handler.command = /^(ahegao)$/i
handler.limit = true

module.exports = handler
