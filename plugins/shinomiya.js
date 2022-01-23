let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/shinomiya?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'shinomiya.jpg', `© sekha`, m)
}
handler.help = ['shinomiya']
handler.tags = ['random']
handler.command = /^(shinomiya)$/i
handler.limit = true

module.exports = handler
