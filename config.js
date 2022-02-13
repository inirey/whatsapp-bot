let fs = require('fs')
let chalk = require('chalk')

global.owner = ['6281284760551', '6281284760551'] // Your Number

global.APIs = { // API Prefix
  // nama: 'https://website'
  rey: 'https://api.reysekha.xyz',
  hardianto: 'https://hardianto.xyz',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://api.chipa.xyz',
  xteam: 'https://api.xteam.xyz',
  fxc7: 'https://api-xcoders.xyz',
  waifupics: 'https://api.waifu.pics',
  cakra: 'https://cakrayp.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
}
global.APIKeys = { // APIKey in here
  // 'https://website': 'apikey'
  'https://api-xcoders.xyz': 'APIKEY', // REGISTER ON WEB
  'https://api.reysekha.xyz': 'apirey', // UNLIMITED
  'https://hardianto.xyz': 'hardianto', // UNLIMITED
  'https://api.neoxr.eu.org': 'yourkey', // UNLIMITED
  'https://api.chipa.xyz': 'APIKEY', // REGISTER ON WEB
  'https://cakrayp.herokuapp.com': 'cakrayp24Q6', // UNLIMITED
  'https://api.xteam.xyz': 'APIKEY', // REGISTER
  'https://zahirr-web.herokuapp.com': 'zahirgans', // UNLIMITED
  'https://api.zeks.me': 'apivinz', // LIMIT 600 day 
}


// Sticker WM
global.packname = '© erza bot'
global.author = 'ig @_sekhaa'

global.wm = '© reysekha'
global.wait = '⏳ tunggu permintaan kamu sedang di proses...'
global.eror = '× Upss Erorr silahkan lapor owner'
global.benar = '✓'
global.salah = '×'
global.dikit = 'hampir benar'
global.footer = '© sekha'
global.lw = 'https://api.reysekha.xyz/api/textpro/greenhoror?apikey=apirey&text='
global.reyganz= 'https://api.reysekha.xyz/api/wallpaper/ukhty?apikey='
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='

global.multiplier = 9999

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
