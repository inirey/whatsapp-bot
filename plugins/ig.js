const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {

  if (!args[0]) throw `uhm.. url nya mana?\n\ncontoh:\n${usedPrefix + command} https://www.instagram.com/p/CQU21b0JKwq/`
  if (!args[0].match(/https:\/\/www.instagram.com\/(p|reel|tv)/gi)) throw `url salah`

  let res = await fetch(API('fxc7', '/api/download/ig', { url: args[0] }, 'apikey'))
  if (!res.ok) return m.reply(eror)
        let json = await res.json()
        await m.reply(wait)
        // m.reply(util.format(json))
        await this.sendFile(m.chat, json.result.url, '', '❤ Erzaa', m)
    }
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ig|instagram)$/i

handler.limit = true
handler.premium = true

module.exports = handler
