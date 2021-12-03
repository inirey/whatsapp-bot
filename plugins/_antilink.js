
let handler = m => m

let linkRegex = /chat.whatsapp.com/i

handler.before = function (m, { user, isAdmin, isBotAdmin }) {

  if (m.isBaileys && m.fromMe) throw false
  let chat = global.db.data.chats[m.chat]
  let name = this.getName(m.sender)
  let link = linkRegex.exec(m.text)
  let aizin = m.text.includes("#izinmin") || m.text.includes("#Izin")

  if (chat.antiLink && link && !aizin) {
 m.reply(`*「 ANTILINK DETECTED 」*\n\nTerdeteksi *${name}* telah mengirim link group!\n\nMaaf Kamu akan dikick dari grup ini!`)
   this.groupRemove(m.chat, [m.sender])
  } else if ( chat.antiLink && link && aizin) {
  	this.sendButton( m.chat, `KAMU TIDAK AKAN DIKICK KARENA KAMU MEMAKAI TANDA #izinmin`, `AntilinkV2`, `Oke`, `ok`, m)
  	}
}
handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler
