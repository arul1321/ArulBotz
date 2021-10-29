const { MessageType, WAMessageProto, Presence, MessageOptions, WA_DEFAULT_EPHEMERAL, Mimetype, Browsers, WALocationMessage, WA_MESSAGE_STUB_TYPES, ReconnectMode, ProxyAgent, GroupSettingChange, waChatKey, mentionedJid, processTime } = require("@adiwajshing/baileys")
const {text, document, location, liveLocation, contact, contactsArray, buttonsMessage, listMessage, video, sticker, audio, product, extendedText, groupInviteMessage } = MessageType
const {color} = require('./lib/color')
const {getBuffer} = require('./lib/functions')
const {fetchJson} = require('./lib/fetcher')
const fs = require('fs')
const config = JSON.parse(fs.readFileSync('./config.json'))
let ownerNumber = config.ownerNumber
const getPP = async (jid) => {
	try {
					ppnya = await benny.getProfilePicture(jid)
				} catch {
					ppnya = 'https://i.ibb.co/0qDXtBb/c8ef383d9fa8.jpg'
				}
				return ppnya
}

const msga = (message) => {
                if (message.length >= 10){
                    return `${message.slice(0, 10)}`
                }else{
                    return `${message}`
                }
        }

