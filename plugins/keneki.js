let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/keneki?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'keneki.jpg', `© sekha`, m)
}
handler.help = ['keneki']
handler.tags = ['random']
handler.command = /^(keneki)$/i
handler.limit = true

module.exports = handler
