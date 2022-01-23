let fetch = require('node-fetch')

let timeout = 60000
let poin = 127
let handler = async (m, { conn, usedPrefix }) => {
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (id in conn.susunkata) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.susunkata[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/erzacanz/database/master/games/susunkata.json')
    if (!res.ok) throw eror
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = `
${json.soal}

Tipe: ${json.tipe}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}suka untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.susunkata[id] = [
        await conn.sendButton(m.chat, caption, '© sekha', 'Bantuan', '.suka'),
        json, poin,
        setTimeout(async () => {
            if (conn.susunkata[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, '© sekha', 'Susun Kata', '.susunkata')
            delete conn.susunkata[id]
        }, timeout)
    ]
}
handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^susunkata/i
handler.limit = true

module.exports = handler
