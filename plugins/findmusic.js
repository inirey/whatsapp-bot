let FormData = require('form-data')
let axios = require('axios')

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime)) throw `Reply to the music you want to find with a caption\n\n_Reply music atau audio dengan caption_ *${usedPrefix + command}*`
  m.reply('Tunggu')
  const bodyForm = new FormData()
  bodyForm.append('audio', await q.download(), 'music.mp3')
  axios('https://api.zeks.me/api/searchmusic?apikey=administrator&audio=https://media1.vocaroo.com/mp3/1ePZvzWDKxIh', {
  method: 'POST',
  headers: {
  "Content-Type": "multipart/form-data",
  ...bodyForm.getHeaders()
  },
  data: bodyForm
  })
  .then(({data}) =>{
  m.reply(`*Song Found!*\n\n*Title* : ${data.data.title}\n*Artist* : ${data.data.artists}\n*Genre* : ${data.data.genre}\n*Album* : ${data.data.album}\n*Release* : ${data.data.release_date}`)
  }).catch(() => {
  m.reply('Lagu tidak ditemukan!')
  })
				
}
handler.help = ['whatmusic']
handler.tags = ['tools']
handler.premium = true

handler.command = /^(whatmusic|find)$/i

module.exports = handler
