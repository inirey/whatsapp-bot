let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/nezuko?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'nezuko.jpg', `© sekha`, m)
}
handler.help = ['nezuko']
handler.tags = ['random']
handler.command = /^(nezuko)$/i
handler.limit = true

module.exports = handler
