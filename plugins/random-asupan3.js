/*

 • No APIs No APIKeys
 • Created By @_sekhaa

*/

let handler = async(m, { conn }) => {
  await conn.sendFile(m.chat, pickRandom(asupan), 'asupan.mp4', '', m)
}
handler.help = ['asupan3']
handler.tags = ['fun']
handler.command = /^asupan3$/i
handler.premium = false
handler.limit = true
handler.register = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const asupan = [
"https://telegra.ph/file/619aa04491e600dbb7959.mp4",
"https://telegra.ph/file/0a2fb082609cbc325bf30.mp4",
"https://telegra.ph/file/91f3c5e3349e0d2e42735.mp4",
"https://telegra.ph/file/8976c03684338c0277d9b.mp4",
"https://telegra.ph/file/17b2c876d289aecf9ebf9.mp4",
"https://telegra.ph/file/6dacb6b2a9c31b8034cd2.mp4",
"https://telegra.ph/file/9c91080e451b45808a360.mp4",
"https://telegra.ph/file/f5ebf57373f9c3242ed9b.mp4",
"https://telegra.ph/file/6d7caa68102cdba3b4c29.mp4",
"https://telegra.ph/file/0e56c655083e6ebd0b4c1.mp4",
"https://telegra.ph/file/3e650ca743829a37a5832.mp4",
"https://telegra.ph/file/ba140e67136b6e7f131aa.mp4",
"https://telegra.ph/file/93272d42da3dc4c2b083a.mp4",
"https://telegra.ph/file/addc4ba8bf646bd96fad7.mp4",
"https://telegra.ph/file/d8d22720521bfb0635d22.mp4",
"https://telegra.ph/file/e737cb998be88d9eeb830.mp4",
"https://telegra.ph/file/44fbccbd0594fbb8c17b6.mp4",
"https://telegra.ph/file/31a36712c488c73b35a10.mp4",
"https://telegra.ph/file/c15e186b5831aaf5214ea.mp4",
"https://telegra.ph/file/9063d8ec36130478d0a1d.mp4",
"https://telegra.ph/file/6b493844ad75386d6ca91.mp4",
"https://telegra.ph/file/0d99578bf68347d278871.mp4",
"https://telegra.ph/file/80d5bf2c8bb3a433c295c.mp4",
"https://telegra.ph/file/0b229d270277147a07a61.mp4",
"https://telegra.ph/file/9d0429c040a11c16b5cb3.mp4",
"https://telegra.ph/file/cf10d4a388e67d59c2be1.mp4",
"https://telegra.ph/file/0b379191e600c1d248619.mp4",
"https://telegra.ph/file/5535a8e2f4f68d0a5ff75.mp4",
"https://telegra.ph/file/cf649b1655bbb7a9b2bf3.mp4",
"https://telegra.ph/file/1b2f47a123a0c67a97ae5.mp4",
"https://telegra.ph/file/4d49e6a69399b607976bf.mp4",
"https://telegra.ph/file/ed170869c2acbe1444d98.mp4",
"https://telegra.ph/file/e5e202c9061f0c09d9dc3.mp4",
"https://telegra.ph/file/224e7623b87525dd76d6f.mp4",
"https://telegra.ph/file/54e2ca8b02c2197a185e3.mp4",
"https://telegra.ph/file/ff9d4d20281d8c6cfe2b6.mp4",
"https://telegra.ph/file/5347045c5ca8b57b1ee88.mp4",
"https://telegra.ph/file/e87aac76d25eb95641773.mp4",
"https://telegra.ph/file/17f00e6b033b58630a296.mp4",
"https://telegra.ph/file/5cb6ab9d981f14902f885.mp4",
"https://telegra.ph/file/ff8c433cba2c8d7f9223b.mp4",
"https://telegra.ph/file/23724a7108c6814b811d0.mp4",
"https://telegra.ph/file/deec3eeb2aef42bc503d1.mp4",
"https://telegra.ph/file/528e7ac46a5b4e3a1f993.mp4",
"https://telegra.ph/file/520b1a23de24e6adacd33.mp4",
"https://telegra.ph/file/bb1109ae98a23220570ae.mp4",
"https://telegra.ph/file/4da1fed2d600b08acd2b6.mp4",
"https://telegra.ph/file/aa4f4d2934caaf6eabece.mp4",
"https://telegra.ph/file/b808e638eb8ac2c7fc759.mp4",
"https://telegra.ph/file/fc73fd370547b6ba4aaa4.mp4",
"https://telegra.ph/file/afb1269fd16b4f954d487.mp4",
"https://telegra.ph/file/caf183e435a799a3242fb.mp4",
"https://telegra.ph/file/fcf24c73061db64d43937.mp4",
"https://telegra.ph/file/c117835ca792063791419.mp4",
"https://telegra.ph/file/85643495eb7a75a1554cf.mp4",
"https://telegra.ph/file/feb99acde728fc8fe0b57.mp4",
"https://telegra.ph/file/9879eb7f39c5ec76780bc.mp4",
"https://telegra.ph/file/47301ac4a7b1ff6a1a5d4.mp4",
"https://telegra.ph/file/9f2d49108b954aa191fd0.mp4",
"https://telegra.ph/file/d39610483488f0c8f105f.mp4",
"https://telegra.ph/file/544e0b40efde887b53877.mp4",
"https://telegra.ph/file/975568f0a8b7d4b958355.mp4",
"https://telegra.ph/file/84a02e8e71daf352574d9.mp4",
"https://telegra.ph/file/de93093fc3b68cb0f1f76.mp4",
"https://telegra.ph/file/380bc7fbcf6bd363d53fa.mp4",
"https://telegra.ph/file/ae568da0d0d5e85684322.mp4",
"https://telegra.ph/file/9375e388c3bb9c5ca8d4d.mp4",
"https://telegra.ph/file/f50a8b8842ebd348392e9.mp4",
"https://telegra.ph/file/26c10ab3130f13c60127d.mp4",
"https://telegra.ph/file/03a8494ee2a7c66709d4d.mp4",
"https://telegra.ph/file/5bc0a285c338cf7ad0803.mp4",
"https://telegra.ph/file/28e77383ca525d92f13e9.mp4",
"https://telegra.ph/file/a0a7ec8eeceec7dc04977.mp4"
]
