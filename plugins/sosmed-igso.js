const { igstory } = require('../lib/scrape')

let handler = async (m, { conn, args, usedPrefix, command }) => {

  if (!args[0]) throw `Pengunaan:\n${usedPrefix + command} <url>\n\nContoh:\n\n${usedPrefix + command} stikerinbot`
  if (args[0].startsWith('http') || args[0].startsWith('@')) throw `username salah`

  igstory(args[0]).then(async res => {
    let igs = JSON.stringify(res)
    let json = JSON.parse(igs)
    await m.reply(global.wait)
    for (let { downloadUrl, type } of json)
      conn.sendFile(m.chat, downloadUrl, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), '© sekha', m)

  })

}
handler.help = ['igstory']
handler.tags = ['media']
handler.command = /^(igs(tory)?)$/i
handler.limit = true

module.exports = handler
