let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api.reysekha.xyz/api/wallpaper/cyberspace?apikey=apirey`
  conn.sendFile(m.chat, res, 'cyber.jpg', `© Reysekha`, m)
}
handler.help = ['cyberspace']
handler.tags = ['wallhp']
handler.command = /^(cyberspace)$/i
handler.limit = true

module.exports = handler
