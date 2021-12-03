let fs = require('fs')
global.owner = ['6283195138570', '6283195138570'] // Letakan nomor kamu disini
global.mods = [] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://api.chipa.xyz',
  xteam: 'https://api.xteam.xyz',
  fxc7: 'https://api-xcoders.xyz',
  cakra: 'https://cakrayp.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://api-xcoders.xyz': 'UW8wc3KPy0',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.chipa.xyz': 'pais',
  'https://cakrayp.herokuapp.com': 'cakrayp24Q6',
  'https://api.xteam.xyz': '4acb378768872773',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'administrator',
}

// Sticker WM
global.packname = '❤️ Erza Bot'
global.author = 'ig @_sekhaa'

global.wait = '☕ _Tunggu Permintaan kamu sedang di proses..._'
global.eror = '❌ _Maaf Erorr silahkan hubungi owner_'
global.fla = 'https://hadi-api.herokuapp.com/api/photoxy/smoke-typography?teks='

global.multiplier = 50 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
