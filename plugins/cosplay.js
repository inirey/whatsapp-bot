let handler = async (m, { conn }) => {
  await m.reply(wait)
  let res = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey`
  conn.sendFile(m.chat, res, 'cosplay.jpg', `© sekha`, m)
}
handler.help = ['cosplay']
handler.tags = ['random']
handler.command = /^(cosplay)$/i
handler.limit = true

module.exports = handler
