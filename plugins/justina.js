let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://server-api-rey.herokuapp.com/api/wallpaper/justina?apikey=apirey`
  conn.sendFile(m.chat, res, 'justina.jpg', `© Reysekha`, m)
}
handler.help = ['justina']
handler.tags = ['random']
handler.command = /^(justina)$/i
handler.limit = true

module.exports = handler

/*const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    let res = await fetch(global.API('rey', '/api/wallpaper/justina?', {}, 'apikey'))
    if (!res.ok) throw eror
    let img = await res.buffer()
    //await m.reply(wait)
    if (!img) throw img
    conn.sendFile(m.chat, img, '', '© https://reysekha.xyz', m, 0, { thumbnail: await (await fetch(img)).buffer() })
}
handler.help = ['justina']
handler.tags = ['random']
handler.command = /^(justina|jst)justina$/i
handler.limit = true

module.exports = handler*/
