let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  global.API('xteam', '/dl/smule', {
    url: args[0]
  }, 'APIKEY')
  conn.sendFile(m.chat, undefined, '', '', m)
}
handler.help = ['smule']
handler.tags = ['downloader']
handler.premium = true

handler.command = /^(smule)$/i

module.exports = handler
