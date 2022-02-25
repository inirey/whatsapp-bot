const fs = require('fs')
const deepai = require('deepai')
deepai.setApiKey('31c3da72-e27e-474c-b2f4-a1b685722611')

let handler = async (m) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	if (!mime) throw 'Tidak ada foto'
	if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
	let img = mime.split('/')[1]
	img = Date.now() + '.' + img
	fs.writeFileSync(`./${img}`, await q.download())
	let resp = await deepai.callStandardApi('waifu2x', {
		image: fs.readFileSync(`./${img}`)
	})
	await conn.sendFile(m.chat, resp.output_url, 'hd.jpg', 'Nih, klo kurang hd reply foto ini', m).then(() => fs.unlinkSync(`./${img}`))
}
handler.help = ['hd (caption|reply media)', 'enhance (caption|reply media)']
handler.tags = ['tools']
handler.command = /^(hd|enhance)$/i

module.exports = handler
