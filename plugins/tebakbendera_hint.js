let handler = async (m, { conn }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (!(id in conn.tebakbendera)) throw false
    let json = conn.tebakbendera[id][1]
    conn.reply(m.chat, '```' + json.name.replace(/[AIUEOaiueo]/g, '_') + '```\nBalas gambarnya, bukan pesan ini', conn.tebakbendera[id][0])
}
handler.command = /^ben$/i

module.exports = handler
