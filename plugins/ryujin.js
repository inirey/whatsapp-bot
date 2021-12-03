let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://server-api-rey.herokuapp.com/api/wallpaper/ryujin?apikey=apirey`
  conn.sendFile(m.chat, res, 'ryujin.jpg', `© Reysekha`, m)
}
handler.help = ['ryujin']
handler.tags = ['random']
handler.command = /^(ryujin)$/i
handler.limit = true

module.exports = handler
