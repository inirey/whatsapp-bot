let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api.reysekha.xyz/api/asupan?apikey=apirey`
  await conn.sendFile(m.chat, res, '', `asupan nya gan`, m)
}

handler.help = ['asupan']
handler.tags = ['fun']
handler.command = /^(asupan)$/i
handler.limit = true

module.exports = handler
