const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `contoh:\n${usedPrefix + command} _sekhaa`

  let res = await fetch(global.API('cakra', '/api/instagram/stalk', { username: args[0], 'apikey'}))
  if (!res.ok) throw eror
  let json = await res.json()
  if (json.status != 200) throw json
  conn.sendFile(m.chat, json.result.profile_pic, 'eror.jpg', `*Nama:* ${json.result.username}\n*Bio:* ${json.result.biography}\n*Followers:* ${json.result.followers}\n*Following:* ${json.result.following}\n*Verified:* ${json.result.verified}\n*Private:* ${json.result.private ? 'Ya' : 'Tidak'}`, m, 0, { thumbnail: await (await fetch(json.result.profile_pic)).buffer() })
}
handler.help = ['igstalk <username>']
handler.tags = ['tools']
handler.command = /^(igstalk)$/i
handler.limit = true
module.exports = handler
