let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/wallpaper/akiyama?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'akiyama.jpg', `© sekha`, m)
}
handler.help = ['akiyama']
handler.tags = ['random']
handler.command = /^(akiyama)$/i
handler.limit = true

module.exports = handler
