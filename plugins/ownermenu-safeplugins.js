let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `teksnya owner ku?\n\npenggunaan:\n${usedPrefix + command} <teks>\n\ncontoh:\n${usedPrefix + command} plugins/anjay.js`
    if (!m.quoted.text) throw `balas pesan nya!`
    let path = `${text}`
    await require('fs').writeFileSync(path, m.quoted.text)
    m.reply(`tersimpan di ${path}`)
}
handler.help = ['safe'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^safe$/i

handler.owner = true

module.exports = handler
