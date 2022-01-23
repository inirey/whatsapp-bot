let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/kurumi?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'kurumi.jpg', `© sekha`, m)
}
handler.help = ['kurumi']
handler.tags = ['random']
handler.command = /^(kurumi)$/i
handler.limit = true

module.exports = handler
