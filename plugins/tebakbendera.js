let fetch = require('node-fetch')
let timeout = 60000
let poin = 127
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakbendera[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/erzacanz/database/master/games/tebakbendera.json')
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = `
${json.img}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}ben untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.tebakbendera[id] = [
        await conn.sendButton(m.chat, caption, '© sekha', 'Bantuan', '.ben', m),
        json, poin,
        setTimeout(async () => {
            if (conn.tebakbendera[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.name}*`, '© sekha', 'Tebak bendera', '.tebakbendera', conn.tebakbendera[id][0])
            delete conn.tebakbendera[id]
        }, timeout)
    ]
}
handler.help = ['tebakbendera']
handler.tags = ['game']
handler.command = /^tebakbendera/i
handler.limit = true

module.exports = handler
