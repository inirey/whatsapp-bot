let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://server-api-rey.herokuapp.com/api/wallpaper/nsfwloli?apikey=apirey`
  conn.sendFile(m.chat, res, 'loliii.jpg', `jangan di buat bahan comli om :v`, m)
}
handler.help = ['nsfwloli']
handler.tags = ['nsfw']
handler.command = /^(nsfwloli)$/i
handler.limit = true

module.exports = handler
