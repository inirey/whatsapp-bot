let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  global.API('xteam', '/dl/', {
    url: args[0]
  }, 'APIKEY')
  conn.sendFile(m.chat, undefined, '', '', m)
}
handler.help = ['snackvideo'] 
handler.tags = ['downloader']

handler.command = /^(snackvideo)$/i
handler.premium= true

module.exports = handler
