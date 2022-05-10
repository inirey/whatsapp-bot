let { MessageType } = require('@adiwajshing/baileys')
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const { servers, yta, ytv } = require('../lib/y2mate')
let yts = require('yt-search')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} anjay`
  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Konten Tidak ditemukan'
  let isVideo = /2$/.test(command)
  let yt = false
  let yt2 = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
    }
  }
  if (yt === false) throw 'semua server gagal'
  if (yt2 === false) throw 'semua server gagal'
  let { dl_link, title, filesize, filesizeF } = yt
  return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "title": `
•  𝐭𝐢𝐭𝐥𝐞 : ${title}
•  𝐬𝐢𝐳𝐞 𝐚𝐮𝐝𝐢𝐨 : ${filesizeF}
•  𝐬𝐢𝐳𝐞 𝐯𝐢𝐝𝐞𝐨 : ${yt2.filesizeF}
•  𝐬𝐞𝐫𝐯𝐞𝐫 : ${usedServer}
•  𝐥𝐢𝐧𝐤 : ${vid.url}\n

𝘗𝘭𝘦𝘢𝘴𝘦 𝘴𝘦𝘭𝘦𝘤𝘵 𝘷𝘪𝘥𝘦𝘰 𝘰𝘳 𝘢𝘶𝘥𝘪𝘰
`.trim(),
          "description": "© sekha",
          "buttonText": "𝐕𝐈𝐄𝐖 𝐑𝐄𝐒𝐔𝐋𝐓𝐒",
          "listType": "SINGLE_SELECT",
          "sections": [
            {
                 "title": "LIST RESULTS",
                 "rows": [
               {
                  "title": "audio",
                  "description": "i choose audio",
                  "rowId": `.yta ${vid.url}`
                }, {
                  "title": "video",
                  "description": "i choose video",
                  "rowId": `.ytv ${vid.url}`
                }
              ]
            }
          ], "contextInfo": {
            "stanzaId": m.key.id,
            "participant": m.sender,
            "quotedMessage": m.message
          }
        }
      }, {}), { waitForAck: true })
    }

handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['media']
handler.command = /^(p|play)$/i
handler.limit = true

module.exports = handler
