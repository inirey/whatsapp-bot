// maksud te piye sih Ra paham aku
let fs = require('fs')
global.owner = ['6283195138570', '6283195138570'] // nomor kamu disini
global.mods = [] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  rev: 'https://revita.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://api.chipa.xyz',
  xteam: 'https://api.xteam.xyz',
  fxc7: 'https://api-xcoders.xyz',
  erza: 'https://api.erzaa.space',
  cakra: 'https://cakrayp.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  rns: 'https://api.reysekha.space',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://revita.herokuapp.com': 'APIKEYMU',
  'https://api-xcoders.xyz': 'APIKEYMU',
  'https://api-erzaa.space': 'APIKEYMU',
  'https://server-api-rey.herokuapp.com': 'APIKEYMU',
  'https://api.reysekha.space': 'APIKEYMU',
  'https://bx-hunter.herokuapp.com': 'APIKEYMU',
  'https://hardianto-chan.herokuapp.com': 'APIKEYMU',
  'https://neoxr-api.herokuapp.com': 'APIKEYMU',
  'https://api.chipa.xyz': 'APIKEYMU',
  'https://cakrayp.herokuapp.com': 'APIKEYMU',
  'https://api.xteam.xyz': 'APIKEYMU',
  'https://zahirr-web.herokuapp.com': 'APIKEYMU',
  'https://api-fifielmala.herokuapp.com': 'APIKEYMU',
  'https://api.zeks.me': 'APIKEYMU',
}

// Sticker WM
global.packname = '@fifi elmala'
global.author = 'ig @_sekhaa'

global.wait = '☕ _Tunggu Permintaan kamu sedang di proses..._'
global.eror = '❌ _Maaf Erorr silahkan hubungi owner_'
global.fot = '© erzabot'
global.mut = '❌ _Erza di mute silahkan unmute untuk mengaktifkan kembali'
global.ban = '❌ _Maaf kamu di banned silahkan hubungi owner_'
global.fla = 'https://hadi-api.herokuapp.com/api/photoxy/smoke-typography?teks='

global.multiplier = 50 // iki level e jare rehan

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
