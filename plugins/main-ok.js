let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/64818bef4059a77d701c6.png', m, { packname: "© IRJA", author: "IG : irja_official" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
