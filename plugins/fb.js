const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `uhm.. url nya mana?\n\ncontoh:\n${usedPrefix + command} https://www.facebook.com/alanwalkermusic/videos/277641643524720`
  if (/^https?:\/\/.*(fb.watch|facebook.com)/i.test(m.text)) throw `url salah`

  let res = await fetch(API('fxc7', '/api/download/fb', { url: args[0] }, 'apikey'))
  if (!res.ok) return m.reply(eror)
        let json = await res.json()
        await m.reply(wait)
        // m.reply(util.format(json))
        await this.sendFile(m.chat, json.data.url, '', '❤ Erzaa', m)
    }
handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i

handler.limit = true
handler.premium = true

module.exports = handler
