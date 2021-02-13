let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Dev: Alexandro Sihotang
Script: @Nurotomo
Github: 
https://github.com/Alexandro1910/X-BotV2

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @alexandro.sht_
➥ YouTube:
Alexandro Sihotang

*Thanks To :*
Nurotomo
MfarelS
ST4RZ
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ Pulsa: 081265553098
╠➥ Saweria: saweria.co/AlexandroSihotang
║>Request? Wa.me/6281265553098
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

