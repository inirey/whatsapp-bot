let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/chitoge?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'chitoge.jpg', `© sekha`, m)
}
handler.help = ['chitoge']
handler.tags = ['random']
handler.command = /^(chitoge)$/i
handler.limit = true

module.exports = handler
