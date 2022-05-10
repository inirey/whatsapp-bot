let handler = async (m, { args, usedPrefix, command }) => {

if (!args[0]) throw 'please input username'
if (!args[1]) throw 'please input url repo'

let url = `https://github.com/${args[0]}/${args[1]}/archive/refs/heads/main.zip`
m.reply(`compressing data to file zip*`)
conn.sendFile( m.chat, url, 'repo.zip', null, m)

}
handler.help = ['githubdl']
handler.tags = ['media']
handler.command = /githubdl/i
handler.limit = true

module.exports = handler
