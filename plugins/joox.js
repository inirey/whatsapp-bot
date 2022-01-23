const fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Pengunaan:\n${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} akad`
    if (isUrl(text)) throw `uhm.. judul kak bukan pake url\n\ncontoh:\n${usedPrefix + command} akad`

    let res = await fetch(API('fxc7', '/api/download/joox', { query: text }, 'apikey'))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (!json.status) throw json
    let { judul, artist, album, thumbnail, link, size, duration } = json.result
    let pesan = `
Judul: ${judul}
Artis: ${artist}
Album: ${album}
Ukuran File: ${size}
Durasi: ${duration}

await.....
    `.trim()

    conn.sendFile(m.chat, thumbnail, 'eror.jpg', pesan, m, 0, { thumbnail: await (await fetch(thumbnail)).buffer() })
    conn.sendFile(m.chat, link, 'error.mp3', '', m, 0, { asDocument: db.data.chats[m.chat].useDocument, mimetype: 'audio/mp4' })
}
handler.help = ['joox'].map(v => v + ' <judul>')
handler.tags = ['downloader']
handler.command = /^joox$/i
handler.premium = true

module.exports = handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
