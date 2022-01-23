let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api.zacros.my.id/asupan/random`
  await conn.sendFile(m.chat, res, '', `monggo cok`, m)
}

handler.help = ['asupan']
handler.tags = ['fun']
handler.command = /^(asupan)$/i
handler.limit = true

module.exports = handler
