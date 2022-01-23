let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api.sekha.tech/api/wallpaper/ana?apikey=APIKEY`
  conn.sendFile(m.chat, res, 'ana.jpg', `© sekha`, m)
}
handler.help = ['ana']
handler.tags = ['random']
handler.command = /^(ana)$/i
handler.limit = true

module.exports = handler
