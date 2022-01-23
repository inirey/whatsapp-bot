let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.send2ButtonLoc(m.chat, await (await fetch(reyganz + 'APIKEY')).buffer(), `
*O F F I C I A L  G R O U P*


📝 *Note*

Rules: 

- tempat untuk mengetes bot yang ada disini.
- dilarang melakukan spam terhadap bot demi kenyamanan bersama.
- bebas men-joinkan bot kalian disini
- malakukan pelanggaran = kick tanpa aba
- tidak ada kata mastah kita semua sama sama belajar
- dilarang keras menggunakan fitur nsfw dan fiture yg berbau pornografi jika melanggar akan di banned dari group
- jangan sungkan untuk bertanya 
 

° NO SPAM BOT
° NOMOR BOT JANGAN DI TELPON
° NO SARA AND RACIST
° NO TOXIC BERLEBIHANN

_silahkan join untuk mendapatkan info terbaru dari developer² bot lain terimakasih_

https://chat.whatsapp.com/D7L8NP2Vnz7Eplx4OAvZdP
`.trim(), '© sekha', 'owner bot', ',owner', 'back menu', ',menu', m)

handler.help = ['wanodejs']
handler.tags = ['info']
handler.command = /^wa(nodejs|bot)$/i

module.exports = handler
