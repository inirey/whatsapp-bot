// please don't not remove author

const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', 
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
        
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReclientectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");
const simple = require("./lib/simple.js");
const { virtex, vipi } = require("./lib/virtex.js"); //memans
const hx = require("hxz-api");
const yo = require("tod-api");
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const speed = require("performance-now");
const request = require("request");
const { spawn, exec, execSync } = require("child_process");
const fs = require("fs");
const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const { EmojiAPI } = require("emoji-api");
const ig = require("insta-fetcher");
const emoji = new EmojiAPI();
const fetch = require("node-fetch");
const FormData = require("form-data");
const phoneNum = require("awesome-phonenumber");
const gis = require("g-i-s");
const got = require("got");
const imageToBase64 = require("image-to-base64");
const ID3Writer = require("browser-id3-writer");
const brainly = require("brainly-scraper");
const yts = require("yt-search");
const ms = require("parse-ms");
const toMs = require("ms");
const imgbb = require("imgbb-uploader");
const { error } = require("qrcode-terminal");
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./lib/functions");
const { color, bgcolor } = require("./lib/color");
const { fetchJson, getBase64, kyun, createExif } = require("./lib/fetcher");
const { yta, ytv, igdl, upload, formatDate } = require("./lib/ytdl");
const { webp2mp4File } = require("./lib/webp2mp4");
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const afk = JSON.parse(fs.readFileSync("./lib/off.json"));
const { sleep, isAfk, cekafk, addafk } = require("./lib/offline");
const { cmdadd } = require("./lib/totalcmd.js");
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const voting = JSON.parse(fs.readFileSync("./lib/voting.json"));
const { addVote, delVote } = require("./lib/vote");
const reminder = require("./lib/reminder");
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const _reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));

banChats = false;
offline = false;
targetpc = "0";
owner = "6283195138570";
fake = "_*Made By Rey ganteng ❤️*_";
thumb = fs.readFileSync("./reyganz/thumb.jpeg");
numbernye = "0";
waktu = "-";
alasan = "-";
autojoin = false;
prefixStatus = true;
hit_today = [];

//=================================================//
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));

// Sticker Cmd
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
};

const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
module.exports = client = async (client, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;
    global.blocked;
    mek.message =
      Object.keys(mek.message)[0] === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const {
      text,
      extendedText,
      contact,
      location,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
    } = MessageType;
    const type = Object.keys(mek.message)[0];
    1;
    var prefixRegEx = /^[!&z?=#.+\/]/gi;
    let _chats =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : type == "stickerMessage" &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== null &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined
        ? getCmd(mek.message[type].fileSha256.toString("base64"))
        : "";
    let prefix = _chats.match(prefixRegEx) ? prefixRegEx.exec(_chats)[0] : "";
    body =
      type === "conversation" && mek.message.conversation.startsWith(prefix)
        ? mek.message.conversation
        : type == "imageMessage" &&
          mek.message.imageMessage.caption.startsWith(prefix)
        ? mek.message.imageMessage.caption
        : type == "videoMessage" &&
          mek.message.videoMessage.caption.startsWith(prefix)
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" &&
          mek.message.extendedTextMessage.text.startsWith(prefix)
        ? mek.message.extendedTextMessage.text
        : "";
    budy =
      type === "conversation"
        ? mek.message.conversation
        : type === "extendedTextMessage"
        ? mek.message.extendedTextMessage.text
        : "";
    let chats = _chats.match(prefixRegEx)
      ? _chats
          .split(prefixRegEx)
          .find((v) => v === _chats.replace(prefixRegEx, ""))
      : _chats;
    let command = chats.split(/ +/g)[0];
    hit_today.push(command);
    const args = _chats.trim().split(/ +/).slice(1);
    const isCmd = _chats.match(prefixRegEx)
      ? prefixRegEx.exec(_chats)["input"]
      : _chats;
    isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
    isStc = `${isStc}`
    const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
    isStc !== "" && content.includes("conversation")
    const q = args.join(" ");
    const botNumber = client.user.jid;
    const botNumberss = client.user.jid + "@c.us";
    const isGroup = from.endsWith("@g.us");
    reyganz = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
    reyganz = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
    const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
    const antivirtex = JSON.parse(
      fs.readFileSync("./database/antivirtex.json")
    );
    const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
    const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
    const antihidetg = JSON.parse(
      fs.readFileSync("./database/antihidetag.json")
    );
    const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
    const isAntiviewonce = isGroup ? antivo.includes(from) : false;
    const isKickarea = isGroup ? kickarea.includes(from) : false;
    const isRey = body.startsWith(prefix);
    const isAntivirtex = isGroup ? antivirtex.includes(from) : false;
    const isAntilink = isGroup ? antilink.includes(from) : false;

    const sender = mek.key.fromMe
      ? client.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
    let senderr = mek.key.fromMe
      ? client.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
    // const isSelfNumber = config.NomorSELF
    // const isOwner = sender.id === isSelfNumber
    const totalchat = await client.chats.all();
    const m = simple.smsg(client, mek);
    const groupMetadata = isGroup ? await client.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    const isOwner = owner.includes(sender)
//    const isSimi = isGroup ? samih.includes(from) : false
    const isVote = isGroup ? voting.includes(from) : false;
//    body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
//    budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
//    const isCmd = body.startsWith(prefix)
    const conts = mek.key.fromMe
      ? client.user.jid
      : client.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = mek.key.fromMe
      ? client.user.name
      : conts.notify || conts.vname || conts.name || "-";
    const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
    if (prefix && command) cmdadd();
    const totalhit = JSON.parse(fs.readFileSync("./lib/totalcmd.json"))[0]
      .totalcmd;
    //Y
    const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Selamat malam";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat senja";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat sore";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat siang";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Selamat pagi";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat malam";
    }

    //MESS
    mess = {
      wait: "prosess...",
      success: "Berhasil!",
      wrongFormat: "Format salah",
      error: {
        stick: "bukan sticker",
        Iv: "Linknya error:v",
      },
      only: {
        group: "Khusus grup",
      },
    };

    // THANKS YOGI PW
    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };

    const reply = (teks) => {
      client.sendMessage(from, teks, text, { quoted: mek });
    };

    const sendMess = (hehe, teks) => {
      client.sendMessage(hehe, teks, text);
    };

    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? client.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : client.sendMessage(from, teks.trim(), extendedText, {
            quoted: mek,
            contextInfo: { mentionedJid: memberr },
          });
    };

    const ftroli = {
      key: {
        fromMe: true,
        participant: "0@s.whatsapp.net",
        remoteJid: "6289523258649-1604595598@g.us",
      },
      message: {
        orderMessage: {
          itemCount: 10,
          status: 200,
          thumbnail: thumb,
          surface: 200,
          message: fake,
          orderTitle: "yogipw.",
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
    const fdoc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { documentMessage: { title: fake, jpegThumbnail: thumb } },
    };
    const fvn = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 99999,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
    const fvideo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
    const ftextt = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text":"hallo bang",
                 "title": `Hmm`,
                 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
                        }
	                  } 
                     };
    const flokasi = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    locationMessage: {
                    name: 'lu wibu',
                    jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg')
                          }
                        }
                      };
    const floc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { locationMessage: { name: fake, jpegThumbnail: thumb } },
    };
    const fakestatus = (teks) => {
      client.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `6283195138570@s.whatsapp.net`,
            ...(from ? { remoteJid: "status@broadcast" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const fakethumb = (teks, yes) => {
      client.sendMessage(from, teks, image, {
        thumbnail: fs.readFileSync("./stik/fake.jpeg"),
        quoted: mek,
        caption: yes,
      });
    };
    const fakegroup = (teks) => {
      client.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, "./stik" + names + ".png", async function () {
        console.log("selesai");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            client.sendMessage(to, media, MessageType.sticker, { quoted: mek });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };
    const ftokoo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: fs.readFileSync(`./stik/thumb.jpeg`), //Gambarnye
            },
            title: "Yogi-Fakereply", //Kasih namalu
            description: "ERZA BOT",
            currencyCode: "USD",
            priceAmount1000: "2000",
            retailerId: "YogiPw",
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
    const sendMediaURL = async (to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids);
      }
      const fn = Date.now() / 10000;
      const filename = fn.toString();
      let mime = "";
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers["content-type"];
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, filename, async function () {
        console.log("done");
        let media = fs.readFileSync(filename);
        let type = mime.split("/")[0] + "Message";
        if (mime === "image/gif") {
          type = MessageType.video;
          mime = Mimetype.gif;
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio;
        }
        client.sendMessage(to, media, type, {
          quoted: mek,
          mimetype: mime,
          caption: text,
          contextInfo: { mentionedJid: mids },
        });

        fs.unlinkSync(filename);
      });
    };
    const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      client.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendButImage = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      kma = gam1;
      mhan = await client.prepareMessage(from, kma, image);
      const buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      client.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };

   const sendButLocation = async (
     id, 
     text1, 
     desc1, 
     gam1, 
     but = [], 
     options = {}
   ) => {
     kma = gam1
     mhan = await client.prepareMessage(from, kma, location)
     const buttonMessages = {
       locationMessage: mhan.message.locationMessage,
       contentText: text1,
       footerText: desc1,
       buttons: but,
       headerType: 6
     };
     client.sendMessage(
       id, 
       buttonMessages, 
       MessageType.buttonsMessage, 
       options
     );
    };
    const sendButVideo = async (
      id,
      text1,
      desc1,
      vid1,
      but = [],
      options = {}
    ) => {
      kma = vid1;
      mhan = await client.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5,
      };
      client.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    const kick = function (from, orangnya) {
      for (let i of orangnya) {
        client.groupRemove(from, [i]);
      }
    };
    const add = function (from, orangnya) {
      client.groupAdd(from, orangnya);
    };
    const sendBug = async (target, teks) => {
      if (!teks) teks = ".";
      await client.relayWAMessage(
        client.prepareMessageFromContent(
          target,
          client.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      client.sendMessage(target, teks, "conversation");
    };

    //FUNCTION
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }

    cekafk(afk);
    if (!mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (isAfk(mek.key.remoteJid)) return;
        addafk(mek.key.remoteJid);
        heheh = ms(Date.now() - waktu);
        client.sendMessage(
          mek.key.remoteJid,
          `@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [`${owner}@s.whatsapp.net`],
              stanzaId: "B826873620DD5947E683E3ABE663F263",
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: {
                imageMessage: {
                  caption: "*OFFLINE*",
                  jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                },
              },
            },
          }
        );
      }
    }
    if (mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (mek.message.extendedTextMessage != undefined) {
          if (mek.message.extendedTextMessage.contextInfo != undefined) {
            if (
              mek.message.extendedTextMessage.contextInfo.mentionedJid !=
              undefined
            ) {
              for (let ment of mek.message.extendedTextMessage.contextInfo
                .mentionedJid) {
                if (ment === `${owner}@s.whatsapp.net`) {
                  if (isAfk(mek.key.remoteJid)) return;
                  addafk(mek.key.remoteJid);
                  heheh = ms(Date.now() - waktu);
                  client.sendMessage(
                    mek.key.remoteJid,
                    `@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
                    MessageType.text,
                    {
                      contextInfo: {
                        mentionedJid: [`${owner}@s.whatsapp.net`],
                        stanzaId: "B826873620DD5947E683E3ABE663F263",
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                          imageMessage: {
                            caption: "*OFFLINE*",
                            jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                          },
                        },
                      },
                    }
                  );
                }
              }
            }
          }
        }
      }
    }

    //========================================================================================================================//
    colors = ["red", "white", "black", "blue", "yellow", "green"];
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
    if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIVATE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
    if (!isGroup && prefix && command)
    var kuis = false
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "args :",
        color(args.length)
      );
    //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (prefix && command && isGroup)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "in",
        color(groupName),
        "args :",
        color(args.length)
      );
    //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
    if (isGroup && !isVote) {
      if (budy.toLowerCase() === "vote") {
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6283152753417@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "✅",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      } else if (budy.toLowerCase() === "devote") {
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6283152753417@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "❌",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      }
    }
    const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      client.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };
    //kasih wm gw ajg kalau make
    if (isGroup && isAntilink && !mek.key.fromMe) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTILINK DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        client.groupRemove(from, [sender]);
      }
    }
    if (isGroup && isAntiviewonce && m.mtype == "viewOnceMessage") {
      reply(
        `@${sender.split("@")[0]} Terdeteksi mengirim gambar/video viewonce!`
      );
      var msg = { ...mek };
      msg.mek = mek.message.viewOnceMessage.message;
      msg.mek[Object.keys(msg.mek)[0]].viewOnce = false;
      client.copyNForward(m.chat, msg);
    }
    if (
      isGroup &&
      isAntihidetag &&
      m.message[m.mtype]?.contextInfo?.mentionedJid?.length ==
        groupMembers.length
    ) {
      console.log(
        color("[ANTI-HIDETAG]", "red"),
        color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "white")
      );
      reply(`@${sender.split("@")[0]} Terdeteksi mengirim pesan hidetag!!`);
      kick(from, sender);
    }

    if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 700) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        client.groupRemove(from, sender);
      }
    }
    if (isGroup && autojoin == true) {
      if (budy.includes("://chat.whatsapp.com/")) {
        console.log(
          color("[AUTO-JOIN]", "red"),
          color("YAHAHAHHAHAH", "white")
        );
        client.query({
          json: [
            "action",
            "invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }
    if (isGroup && isKickarea && !mek.key.fromMe) {
      if (sender.includes("62")) {
        reply("GRUP ONLY +62!");
        client.groupRemove(from, [sender]);
      }
    }
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

      await client.setStatus(`Aktif selama ${uptime}`).catch((_) => _);
      settingstatus = new Date() * 1;
    }
    if (_chats.startsWith(">")) {
      try {
        return client.sendMessage(
          from,
          JSON.stringify(eval(budy.slice(2)), null, "\t"),
          text,
          { quoted: mek }
        );
      } catch (err) {
        e = String(err);
        reply(e);
      }
    }
    if (budy.startsWith('$')){
      const cod = args.join(' ')
      exec(cod, (err, stdout) => {
      if(err) return reply(`${err}`)
      if (stdout) {
      reply(`${stdout}`)
      }
      })
    }
    if (budy.startsWith('>')){
//      if (!mek.key.fromMe) return
      try {
      return client.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
      } catch(err) {
      e = String(err)
      reply(e)
      }
      }
      if (budy.startsWith('=>')){
  //    if (!mek.key.fromMe) return
      var konsol = budy.slice(3)
      var util = require("util")
      Return = (sul) => {
      var sat = JSON.stringify(sul, null, 2)
      bang = util.format(sat)
      if (sat == undefined){
      bang = util.format(sul)
      }
      return reply(bang)
      }
      try {
      reply(util.format(eval(`;(async () => { ${konsol} })()`)))
      console.log('\x1b[1;37m>', '[', '\x1b[1;32mEVAL\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      } catch(e){
      reply(String(e))
      }
      }

    if (!mek.key.fromMe && banChats === true) return;
    if (prefixStatus) if (_chats.startsWith(command)) return;
    switch (command) {
      //case "?":
       // var menu = `${ucapanWaktu} @${senderr.split("@")[0]}
      case "menu":
      case "help":
             ganz = fs.readFileSync("./stik/thumb.jpeg");
//           ganz = await getBuffer (`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`)
//           pporang = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
//           const ganz = await getBuffer(pporang)
           mark = "0@s.whatsapp.net"
           halah = `
           
👋hallo ${pushname} ada yg bisa bot bantu\n
🇬🇧 ENGLISH\n\nBefore using the bot, please read the rules, no phone spam, if you find a bug or there is a feature that doesn't work, please immediately report the owner\n\n
🇮🇩 INDONESIA\n\nsebelum mengunakan bot harap baca rules dilarang spam telfon jika menemukan bug atau ada fitur yang tidak berfungsi silakan langsung lapor ke owner terimakasih\n\n
Click the button below to see all menu bot✓
`
sendButLocation(from, `_*WELCOME TO ERZA BOT*_`, `${halah}`, {jpegThumbnail:ganz}, [{buttonId:`${prefix}?`,buttonText:{displayText:'menu 📜'},type:1},{buttonId:`${prefix}donasi`,buttonText:{displayText:'donasi 🎁'},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'owner 🌹'},type:1}], {contextInfo: { mentionedJid: [mark]}})
break;

     case 'wallprogramming':
	  anu = await fetchJson(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Programming.json`, {method: 'get'})
	  reply('Tunggu Ya Kak')
	  var n = JSON.parse(JSON.stringify(anu));
	  var nimek =  n[Math.floor(Math.random() * n.length)];
	  prog = await getBuffer(nimek)
	  sendButImage(from, `wallpaper nya kak`, `Made by Rey ❤️`, prog, [
            {
              buttonId: `${prefix}wallprogramming`,
              buttonText: {
                displayText: `truth again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
	 break
     case 'wallcyberspace':
	  anu = await fetchJson(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/CyberSpace.json`, {method: 'get'})
          reply('Tunggu Ya Kak')
	  var n = JSON.parse(JSON.stringify(anu));
	  var nimek =  n[Math.floor(Math.random() * n.length)];
	  cyber = await getBuffer(nimek)
	  sendButImage(from, `wallpaper nya kak`, `Made by Rey ❤️`, cyber, [
            {
              buttonId: `${prefix}wallcyberspace`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
         break
     case 'wallgame':
	  anu = await fetchJson(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Game%20Wallp.json`, {method: 'get'})
	  reply('Tunggu Ya Kak')
	  var n = JSON.parse(JSON.stringify(anu));
	  var nimek =  n[Math.floor(Math.random() * n.length)];
	  gemm = await getBuffer(nimek)
	  sendButImage(from, `wallpaper nya kak`, `Made by Rey ❤️`, gemm, [
            {
              buttonId: `${prefix}wallgame`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
      case 'suit':
              sendButMessage(from, `🤝🏻 *list suit*\n\n✂️ gunting\n📄 kertas\n🗿 batu`, `pilih di bawah kak`, [
            {
              buttonId: `${prefix}stt batu`,
            buttonText: {
              displayText: `batu🗿`,
            },
            type: 1,
          },
          {
              buttonId: `${prefix}stt kertas`,
            buttonText: {
              displayText: `kertas📄`,
            },
            type: 1,
          },
          {
              buttonId: `${prefix}stt gunting`,
              buttonText: {
                displayText: `gunting✂️`,
              },
              type: 1,
             },
           ]);
          break;
      case 'tictactoe':
case 'ttt':
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
client.sendMessage(from, `*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game
Ketik Y/N untuk menerima atau menolak permainan

Ketik ${prefix}delttc , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
break
	 case 'stt':
                     if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					 if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
      case 'slot':
            case 'slots':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            sendButMessage(from, `${somtoy}\n\n_jika anda mendapatkan 3buah sama anda win_`, `slots lagi?`, [
            {
              buttonId: `${prefix}slot`,
              buttonText: {
                displayText: `slots`,
              },
              type: 1,
             },
           ]);
          break;
      case 'wallmuslim':
	   anu = await fetchJson(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Islamic.json`, {method: 'get'})
	   reply('Tunggu Ya Kak')
	   var n = JSON.parse(JSON.stringify(anu));
	   var nimek =  n[Math.floor(Math.random() * n.length)];
	   muss = await getBuffer(nimek)
	   sendButImage(from, `wallpaper nya kak`, `Made by Rey ❤️`, muss, [
            {
              buttonId: `${prefix}wallmuslim`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
      case "?":
           pporang = fs.readFileSync('./stik/thumb.jpeg')
//           pporang = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
//           const ofrply = await getBuffer(pporang)
           jembot = "0@s.whatsapp.net"
           cmd = `
🤖 *INFO BOT*

📝 Runtime : ${runtime(process.uptime())}
📝 Hit Today : ${hit_today.length} Hit
📝 Total Hit : ${totalhit} Hit
📝 Total Chat : ${totalchat.length} Chat

⏲️ *INFORMATION FEATURE*

🛑 = REPAIR FITUR
❌ = ERORR


📸 *Instagram owner*
*https://instagram.com/_sekhaa*

😺 *Github Owner*
*https://github.com/inirey*

✏️ *Whatsapp Bot Node JS*
*https://chat.whatsapp.com/BsC3U7tjBuq6vBXOa4Wh9j*


🐋 *MAKER MENU*

🐋 ${prefix}sticker
🐋 ${prefix}swm <author|packname>
🐋 ${prefix}take <author|packname>
🐋 ${prefix}fdeface 🛑
🐋 ${prefix}emoji
🐋 ${prefix}wasted
🐋 ${prefix}wanted
🐋 ${prefix}deltrash
🐋 ${prefix}squidrip
🐋 ${prefix}sertiff1 <text> 🛑
🐋 ${prefix}bpink <text>
🐋 ${prefix}tulis


🐋 *CONVERT MENU*

🐋 ${prefix}toimg
🐋 ${prefix}tomp3
🐋 ${prefix}tomp4
🐋 ${prefix}slow
🐋 ${prefix}fast
🐋 ${prefix}reverse
🐋 ${prefix}tourl

🐋 *MEDIA MENU*

🐋 ${prefix}ytsearch <query>
🐋 ${prefix}igstalk <query>
🐋 ${prefix}githubstalk <query>
🐋 ${prefix}tiktokstalk <query>
🐋 ${prefix}play <query>
🐋 ${prefix}video <query>
🐋 ${prefix}igstory <username>
🐋 ${prefix}twitter <link>
🐋 ${prefix}tiktok <link>
🐋 ${prefix}tiktokaudio <link>
🐋 ${prefix}fb <link>
🐋 ${prefix}ytmp3 <url>
🐋 ${prefix}ytmp4 <url>
🐋 ${prefix}youtube <url>
🐋 ${prefix}tiktoknowm <url>
🐋 ${prefix}tiktokdl <url>
🐋 ${prefix}tiktok <url>
🐋 ${prefix}instagram <url>
🐋 ${prefix}ig <url>
🐋 ${prefix}twitter <url>

🐋 *GAME MENU*

🐋 ${prefix}suit
🐋 ${prefix}slot
🐋 ${prefix}slots


🐋 *FUN MENU*

🐋 ${prefix}upswteks
🐋 ${prefix}upswimage
🐋 ${prefix}upswvideo
🐋 ${prefix}fitnah
🐋 ${prefix}fitnahpc
🐋 ${prefix}kontak

🐋 *OTHER MENU*

🐋 ${prefix}truth
🐋 ${prefix}dare
🐋 ${prefix}hidetag
🐋 ${prefix}kontag
🐋 ${prefix}sticktag
🐋 ${prefix}totag
🐋 ${prefix}ping
🐋 ${prefix}inspect
🐋 ${prefix}join
🐋 ${prefix}caripesan <query>
🐋 ${prefix}get
🐋 ${prefix}brainly <query>
🐋 ${prefix}image <query>
🐋 ${prefix}anime <random>
🐋 ${prefix}pinterest <query>
🐋 ${prefix}komiku <query>
🐋 ${prefix}lirik <query>
🐋 ${prefix}chara <query>
🐋 ${prefix}playstore <query>
🐋 ${prefix}otaku <query>


🐋 *NSFW & 18 & anime*


🐋 ${prefix}anal
🐋 ${prefix}pussy
🐋 ${prefix}lesbian
🐋 ${prefix}eroneko
🐋 ${prefix}bj
🐋 ${prefix}neko
🐋 ${prefix}baka
🐋 ${prefix}poke
🐋 ${prefix}slap
🐋 ${prefix}neko2
🐋 ${prefix}keta
🐋 ${prefix}blowjob
🐋 ${prefix}awoo
🐋 ${prefix}blowjob
🐋 ${prefix}megumin
🐋 ${prefix}neko3
🐋 ${prefix}trapnime
🐋 ${prefix}kitsune
🐋 ${prefix}yuri
🐋 ${prefix}loli
🐋 ${prefix}naruto
🐋 ${prefix}boruto
🐋 ${prefix}minato

🐋 *TEXT PRO*

🐋 ${prefix}glitch <text1|text2>
🐋 ${prefix}battlefield <text1|text2>
🐋 ${prefix}pubglogo <text1|text2>
🐋 ${prefix}googlesugest <text1|text2|text3>
🐋 ${prefix}coffecup <text1>
🐋 ${prefix}coffecup2 <text1>
🐋 ${prefix}neontext <text1>
🐋 ${prefix}glowtext <text1>
🐋 ${prefix}summer <text1>
🐋 ${prefix}flowertext <text1>


🐋 *KERANG MENU*

🐋 ${prefix}apakah <saya Ganteng?>
🐋 ${prefix}kapankah <kapankah saya sukses>
🐋 ${prefix}bisakah <bisakah saya sukses?>



🐋 *RANDOM IMAGE & VID*


🐋 ${prefix}meme
🐋 ${prefix}memeindo
🐋 ${prefix}cecan
🐋 ${prefix}cogan
🐋 ${prefix}justina
🐋 ${prefix}asupan
🐋 ${prefix}asupan2
🐋 ${prefix}aeshestic
🐋 ${prefix}wallprogramming ❌
🐋 ${prefix}wallmountain ❌
🐋 ${prefix}wallcyberspace ❌
🐋 ${prefix}wallgame ❌
🐋 ${prefix}wallmuslim ❌
🐋 ${prefix}walltechnology ❌
🐋 ${prefix}jadibot [locked]

🐋 *OWNER MENU*

🐋 ${prefix}off
🐋 ${prefix}on
🐋 ${prefix}status
🐋 ${prefix}setthumb
🐋 ${prefix}settarget
🐋 ${prefix}setfakeimg
🐋 ${prefix}setreply
🐋 ${prefix}setprefix
🐋 ${prefix}mode
🐋 ${prefix}term <code>
🐋 ${prefix}eval <code>
🐋 ${prefix}colongsw [reply sw]

🐋 *GRUP MENU*

🐋 ${prefix}grup
🐋 ${prefix}promote <reply chat member>
🐋 ${prefix}demote <reply chat member>
🐋 ${prefix}setdesc
🐋 ${prefix}setname
🐋 ${prefix}kick <reply/tag member>
🐋 ${prefix}add <reply/tag member>
🐋 ${prefix}getbio <reply chat member>
🐋 ${prefix}getname <reply chat member>
🐋 ${prefix}reminder <msg/2s>
🐋 ${prefix}listonline
🐋 ${prefix}sider [reply chat bot]
🐋 ${prefix}antilink
🐋 ${prefix}antihidetag
🐋 ${prefix}antiviewonce
🐋 ${prefix}antivirtex
🐋 ${prefix}kickarea

Customize By Rey ❤️ www.reysekha.xyz
`
          sendButLocation(from, `hallo ${pushname} welcome 👋`, `${cmd}`, {jpegThumbnail:pporang}, [{buttonId:`${prefix}ping`,buttonText:{displayText:'ping 🕐'},type:1},{buttonId:`${prefix}donasi`,buttonText:{displayText:'donasi 🎁'},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'owner 🌹'},type:1}], {contextInfo: { mentionedJid: [jembot]}})
         break;
      case 'wallmountain':
	   anu = await fetchJson(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Mountain.json`, {method: 'get'})
	   reply('Tunggu Ya Kak')
	   var n = JSON.parse(JSON.stringify(anu));
	   var nimek =  n[Math.floor(Math.random() * n.length)];
	   moun = await getBuffer(nimek)
	   sendButImage(from, `wallpaper nya kak`, `Made by Rey ❤️`, moun, [
            {
              buttonId: `${prefix}wallmountain`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
         case "credits"
              var _0x153a54=_0x3695;function _0x3695(_0x1567f1,_0x4bcb4d){var _0x2646b8=_0x2646();return _0x3695=function(_0x3695bc,_0x4ac3d2){_0x3695bc=_0x3695bc-0x109;var _0x13bc06=_0x2646b8[_0x3695bc];return _0x13bc06;},_0x3695(_0x1567f1,_0x4bcb4d);}function _0x2646(){var _0x357a3b=['144FNRRou','9416781LhUuNQ','0@s.whatsapp.net','\x0a🌹\x20*SOURCE\x20INFO*\x20🌹\x0a\x0a•\x20API:\x20*https:www.reysekha.xyz*\x0a•\x20Official\x20Web:\x20*https://www.reysekha.my.id*\x0a•\x20GitHub:\x20*https://github.com/inirey*\x0a\x0a\x0a_thank\x20you\x20for\x20using\x20this\x20bot,\x20don\x27t\x20forget\x20to\x20support\x20the\x20owner\x20by\x20following\x20Instagram\x20:)\x20https://instagram.com/_sekhaa_\x0a','17740IXVloS','8488362pdEOXl','readFileSync','menu','✨\x20*THANKS\x20TO\x0a\x0a🔖\x20ibnusyawal\x0a🔖\x20tobz\x0a🔖\x20ben/vinz\x0a🔖\x20Mr\x20hadi\x0a🔖\x20hardianto\x0a🔖\x20hanif\x20mrhtzz\x0a🔖\x20mfarlesz\x0a🔖\x20Arugaz\x0a🔖\x20zhirr\x0a🔖\x20Yogipw\x0a🔖\x20and\x20all\x20creator\x0a\x0a','12BIcUkd','351208MqJurn','9186480Vaqeyo','owner','3714147SYwafJ','menu🌹','440RBrjbc','7YNxUJl','owner\x20🌹','103777BroTod'];_0x2646=function(){return _0x357a3b;};return _0x2646();}(function(_0x52c8a,_0x536495){var _0x42eb69=_0x3695,_0x2a35e0=_0x52c8a();while(!![]){try{var _0x4d3a0f=-parseInt(_0x42eb69(0x117))/0x1*(-parseInt(_0x42eb69(0x10e))/0x2)+parseInt(_0x42eb69(0x112))/0x3+parseInt(_0x42eb69(0x114))/0x4*(-parseInt(_0x42eb69(0x109))/0x5)+parseInt(_0x42eb69(0x10a))/0x6*(-parseInt(_0x42eb69(0x115))/0x7)+-parseInt(_0x42eb69(0x10f))/0x8*(-parseInt(_0x42eb69(0x118))/0x9)+parseInt(_0x42eb69(0x110))/0xa+-parseInt(_0x42eb69(0x119))/0xb;if(_0x4d3a0f===_0x536495)break;else _0x2a35e0['push'](_0x2a35e0['shift']());}catch(_0x5c7e26){_0x2a35e0['push'](_0x2a35e0['shift']());}}}(_0x2646,0xc85d9),gimana=fs[_0x153a54(0x10b)]('./stik/thumb.jpeg'),ptod=_0x153a54(0x11a),teks=_0x153a54(0x11b),sendButLocation(from,_0x153a54(0x10d),''+teks,{'jpegThumbnail':gimana},[{'buttonId':prefix+_0x153a54(0x111),'buttonText':{'displayText':_0x153a54(0x116)},'type':0x1},{'buttonId':prefix+_0x153a54(0x10c),'buttonText':{'displayText':_0x153a54(0x113)},'type':0x1}],{'contextInfo':{'mentionedJid':[ptod]}}));
              break;
       //REY GANTENG
case "glitch":
          if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(7)
				tx1 = ct.split("|")[0];
                tx = ct.split("|")[1];
				anu = await fetchJson(`https://rey-api.herokuapp.com/api/textmaker?text=${tx1}&text2=${tx}&theme=glitch&apikey=sekhaapi`)
				buffer = await getBuffer(anu.result.url)
				sendButImage(from, `berhasil di buat ${pushname}`, `Made by Rey ❤️`, buffer, [
            {
              buttonId: `${prefix}credits`,
              buttonText: {
                displayText: `source 🌹`,
              },
              type: 1,
            },
          ]);
          break;
case "play3":
          playmp3 = body.slice(9)
          return reply(mess.Iv);
           anu = await fetchJson(
          `https://api.zeks.me/api/ytplaymp3/2?apikey=administrator&q=${playmp3}`, 
        );
        buffer = await getBuffer (anu.result.thumbnail)
        sendButImage(
          from,
          `• *Title*: ${anu.result.title}\n• *Durasi*: ${anu.result.duration}\n• *Size*: ${anu.result.size}\n• *Source*: ${anu.result.source}`,
          `Silahkan pilih salah satu yg mau didownload`,
          buffer,
          [
            {
              buttonId: `${prefix}pley ${args[0]}|ytplaymp4/2`,
              buttonText: {
                displayText: `VIDEO`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}pley ${args[0]}|ytplaymp3/2`,
              buttonText: {
                displayText: `AUDIO`,
              },
              type: 1,
            },
          ]
        );
        break;        
case "pley":
        var gh = args.join("");
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var rey = await fetchJson(
          `https://api.zeks.me/api/${tipe}?apikey=administrator&q=${link}`
        );
        if (tipe == "ytplaymp3/2") {
          sendMediaURL(from, rey.result.link, "");
        }
        if (tipe == "ytplaymp4/2") {
          sendMediaURL(from, rey.result.link, "");
        }
        break;
case 'play2':
				playmp3 = body.slice(9)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=administrator&q=${playmp3}`, {method: 'get'})
				infomp3 = `「 *YOUTUBE PLAY MP3* 」\n\n*• Judul:* ${anu.result.title}\n*• Ukuran:* ${anu.result.size}\n*• Durasi:* ${anu.result.duration}\n*• Link:* ${anu.result.source}\n\n _*AUDIO SEDANG DI KIRIM*_`
				buffer = await getBuffer(anu.result.thumbnail)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				lagu = await getBuffer(anu.result.url_audio)
				client.sendMessage(from, lagu, audio, )
case "pubglogo":
          if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(9)
				pu = ct.split("|")[0];
                bg = ct.split("|")[1];
				anu = await fetchJson(`https://rey-api.herokuapp.com/api/textmaker/game?text=${pu}&text2=${bg}&theme=pubg&apikey=sekhaapi`)
				buffer = await getBuffer(anu.result.url)
				sendButImage(from, `berhasil di buat ${pushname}`, `Made by Rey ❤️`, buffer, [
            {
              buttonId: `${prefix}credits`,
              buttonText: {
                displayText: `source 🌹`,
              },
              type: 1,
            },
          ]);
          break;
case "battlefield":
          if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(12)
				bat = ct.split("|")[0];
                le = ct.split("|")[1];
				anu = await fetchJson(`https://rey-api.herokuapp.com/api/textmaker/game?text=${bat}&text2=${le}&theme=battlefield&apikey=sekhaapi`)
				buffer = await getBuffer(anu.result.url)
				sendButImage(from, `berhasil di buat ${pushname}`, `Made by Rey ❤️`, buffer, [
            {
              buttonId: `${prefix}credits`,
              buttonText: {
                displayText: `source 🌹`,
              },
              type: 1,
            },
          ]);
          break;
case "coffecup":
          if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(9)
				anu = await fetchJson(`https://rey-api.herokuapp.com/api/textmaker/senja?text=${ct}&theme=coffee-cup&apikey=sekhaapi`)
				buffer = await getBuffer(anu.result.url)
				sendButImage(from, `berhasil di buat ${pushname}`, `Made by Rey ❤️`, buffer, [
            {
              buttonId: `${prefix}credits`,
              buttonText: {
                displayText: `source 🌹`,
              },
              type: 1,
            },
          ]);
          break;
case "coffecup2":
          if (args.length < 1) return reply(`textnya mana om?`)
				cok = body.slice(10)
				anu = await fetchJson(`https://rey-api.herokuapp.com/api/textmaker/senja?text=${cok}&theme=coffee-cup2&apikey=sekhaapi`)
				buffer = await getBuffer(anu.result.url)
				sendButImage(from, `berhasil di buat ${pushname}`, `Made by Rey ❤️`, buffer, [
            {
              buttonId: `${prefix}credits`,
              buttonText: {
                displayText: `source 🌹`,
              },
              type: 1,
            },
          ]);
          break;
case "neontext":
          if (args.length < 1) return reply(`textnya mana om?`)
				oon = body.slice(9)
				anu = await fetchJson(`https://rey-api.herokuapp.com/api/textmaker/metallic?text=${oon}&theme=neon&apikey=sekhaapi`)
				buffer = await getBuffer(anu.result.url)
				sendButImage(from, `berhasil di buat ${pushname}`, `Made by Rey ❤️`, buffer, [
            {
              buttonId: `${prefix}credits`,
              buttonText: {
                displayText: `source 🌹`,
              },
              type: 1,
            },
          ]);
          break;
case "glowtext":
          if (args.length < 1) return reply(`textnya mana om?`)
				goo = body.slice(9)
				anu = await fetchJson(`https://rey-api.herokuapp.com/api/textmaker/metallic?text=${goo}&theme=glow&apikey=sekhaapi`)
				buffer = await getBuffer(anu.result.url)
				sendButImage(from, `berhasil di buat ${pushname}`, `Made by Rey ❤️`, buffer, [
            {
              buttonId: `${prefix}credits`,
              buttonText: {
                displayText: `source 🌹`,
              },
              type: 1,
            },
          ]);
          break;
case "summer":
          if (args.length < 1) return reply(`textnya mana om?`)
				amerenak = body.slice(7)
				anu = await fetchJson(`https://rey-api.herokuapp.com/api/textmaker/alam?text=${amerenak}&theme=summer&apikey=sekhaapi`)
				buffer = await getBuffer(anu.result.url)
				sendButImage(from, `berhasil di buat ${pushname}`, `Made by Rey ❤️`, buffer, [
            {
              buttonId: `${prefix}credits`,
              buttonText: {
                displayText: `source 🌹`,
              },
              type: 1,
            },
          ]);
          break;
case "flowertext":
          if (args.length < 1) return reply(`textnya mana om?`)
			    fow = body.slice(11)
				anu = await fetchJson(`https://rey-api.herokuapp.com/api/textmaker/alam?text=${fow}&theme=flower&apikey=sekhaapi`)
				buffer = await getBuffer(anu.result.url)
				sendButImage(from, `berhasil di buat ${pushname}`, `Made by Rey ❤️`, buffer, [
            {
              buttonId: `${prefix}credits`,
              buttonText: {
                displayText: `source 🌹`,
              },
              type: 1,
            },
          ]);
          break;
case "googlesugest":
          if (args.length < 1) return reply(`textnya mana om?`)
			    rey = body.slice(13)
				ganz = rey.split("|")[0];
                bang= rey.split("|")[1];
                dah= rey.split("|")[0];
				anu = await fetchJson(`https://rey-api.herokuapp.com/api/textmaker?text=${ganz}&text2=${bang}&text3=${dah}&theme=google-suggestion&apikey=sekhaapi`)
				buffer = await getBuffer(anu.result.url)
				sendButImage(from, `berhasil di buat ${pushname}`, `Made by Rey ❤️`, buffer, [
            {
              buttonId: `${prefix}credits`,
              buttonText: {
                displayText: `source 🌹`,
              },
              type: 1,
            },
          ]);
          break;
      // BY HARDIANTO API
	 case 'yuri':
        if (!isGroup) return reply(mess.only.group);
kon = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=yuri&apikey=hardianto`)
anu = await getBuffer(kon)
sendButImage(from, `nihhh ngab🗿`, `lanjut?`, anu, [
            {
              buttonId: `${prefix}yuri`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
   case 'kapankah':
                if (!isGroup) return reply(mess.only.group);
                kapankah = body.slice(1)
				const kapankahh = ["1 Minggu lagi","1 Bulan lagi","1 Tahun lagi","100 tahun lagi","gatau","2030","1 Jam lagi","1 Menit lagi"]
				const koh = kapankahh[Math.floor(Math.random() * kapankahh.length)]
				client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
			break 
  case 'bisakah':
               if (!isGroup) return reply(mess.only.group);
               bisakah = body.slice(1)
				const bisakahh = ["Bisa","Tidak Bisa","Ga tau","mungkin"]
				const keh = bisakahh[Math.floor(Math.random() * bisakahh.length)]
				client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
			break 
 case 'apakah':
			    if (!isGroup) return reply(mess.only.group);
				apakah = body.slice(1)
				const apakahh = ["Ya","Tidak","Ga tau","ga mungkin","bisa jadi","mungkin"]
				const kah = apakahh[Math.floor(Math.random() * apakahh.length)]
				client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
			 break
case 'anal':
        if (!isGroup) return reply(mess.only.group);
aku = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=anal&apikey=hardianto`)
kon = await getBuffer(aku)
sendButImage(from, `nihhh ngab🗿`, `lanjut?`, kon, [
            {
              buttonId: `${prefix}anal`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
case 'neko':
if (!isGroup) return reply(mess.only.group)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=hardianto`)
kom = await getBuffer(hai)
sendButImage(from, `nihhh ngab🗿`, `lanjut?`, kom, [
            {
              buttonId: `${prefix}neko`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
case 'baka':
if (!isGroup) return reply(mess.only.group)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=baka&apikey=hardianto`)
kom2 = await getBuffer(hai)
sendButImage(from, `nihhh ngab🗿`, `lanjut?`, kom2, [
            {
              buttonId: `${prefix}baka`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
case 'slap':
if (!isGroup) return reply(mess.only.group)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=slap&apikey=hardianto`)
sla = await getBuffer(hai)
sendButImage(from, `nihhh ngab🗿`, `lanjut?`, sla, [
            {
              buttonId: `${prefix}slap`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
case 'poke':
if (!isGroup) return reply(mess.only.group)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=poke&apikey=hardianto`)
mon = await getBuffer(hai)
sendButImage(from, `nihhh ngab🗿`, `lanjut?`, mon, [
            {
              buttonId: `${prefix}poke`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
case 'neko2':
if (!isGroup) return reply(mess.only.group)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=hardianto`)
kot = await getBuffer(hai)
sendButImage(from, `nihhh ngab🗿`, `lanjut?`, kot, [
            {
              buttonId: `${prefix}neko2`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
case 'keta':
if (!isGroup) return reply(mess.only.group)
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=keta&apikey=hardianto`)
kett = await getBuffer(hai)
sendButImage(from, `nihhh ngab🗿`, `lanjut?`, kett, [
            {
              buttonId: `${prefix}keta`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
case  'awoo':
if (!isGroup) return reply(mess.only.group)
anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
woo = await getBuffer(anu.url)
sendButImage(from, `nihhh ngab🗿`, `lanjut?`, woo, [
            {
              buttonId: `${prefix}awoo`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
case  'blowjob':
if (!isGroup) return reply(mess.only.group)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
sendButImage(from, `nihhh ngab🗿`, `lanjut?`, buffer, [
            {
              buttonId: `${prefix}blowjob`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
case  'megumin':
if (!isGroup) return reply(mess.only.group)
anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
beep = await getBuffer(anu.url)
sendButImage(from, `nihhh ngab🗿`, `lanjut?`, beep, [
            {
              buttonId: `${prefix}megumin`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
case  'neko3':
if (!isGroup) return reply(mess.only.group)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
ahh = await getBuffer(anu.url)
sendButImage(from, `nihhh ngab🗿`, `lanjut?`, ahh, [
            {
              buttonId: `${prefix}neko3`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
case  'trapnime':
if (!isGroup) return reply(mess.only.group)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
uhh = await getBuffer(anu.url)
sendButImage(from, `nihhh ngab🗿`, `lanjut?`, uhh, [
            {
              buttonId: `${prefix}trapanime`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
case 'lesbian':
        if (!isGroup) return reply(mess.only.group);
kau = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=lesbian&apikey=hardianto`)
sekha = await getBuffer(kau)
sendButImage(from, `nihhh ngab🗿`, `lanjut?`, sekha, [
            {
              buttonId: `${prefix}lesbian`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
case 'eroneko':
        if (!isGroup) return reply(mess.only.group);
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=eroNeko&apikey=hardianto`)
kon = await getBuffer(hai)
sendButImage(from, `nihhh ngab🗿`, `lanjut?`, eroneko, [
            {
              buttonId: `${prefix}eroneko`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
case 'bj':
        if (!isGroup) return reply(mess.only.group);
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=bJ&apikey=hardianto`)
kon = await getBuffer(hai)
sendButImage(from, `nihhh ngab🗿`, `lanjut?`, kon, [
            {
              buttonId: `${prefix}bj`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
case 'kitsune':
        if (!isGroup) return reply(mess.only.group);
hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=kitsune&apikey=hardianto`)
kon = await getBuffer(hai)
sendButImage(from, `nihhh ngab🗿`, `lanjut?`, kitsune, [
            {
              buttonId: `${prefix}kitsune`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
case 'pussy':
        if (!isGroup) return reply(mess.only.group);
gim = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=pussy&apikey=hardianto`)
sendButImage(from, `nihhh ngab🗿`, `lanjut?`, gim, [
            {
              buttonId: `${prefix}pussy`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
      // BY ZHIRRR
      case 'walltechnology':
	   anu = await fetchJson(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Technology.json`, {method: 'get'})
	   reply('Tunggu Ya Kak')
	   var n = JSON.parse(JSON.stringify(anu));
	   var nimek =  n[Math.floor(Math.random() * n.length)];
	   tekno = await getBuffer(nimek)
          sendButImage(from, `wallpaper nya kak`, `Made by Rey ❤️`, tekno, [
            {
              buttonId: `${prefix}walltechnology`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
      case "truth":
          const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
	  const ttrth = trut[Math.floor(Math.random() * trut.length)]
	  initru = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
          sendButImage(from, `truth!!!\n\n${ttrth}`, `Made by Rey ❤️`, initru, [
            {
              buttonId: `${prefix}truth`,
              buttonText: {
                displayText: `truth again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
      case "dare":
	  const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
	  const der = dare[Math.floor(Math.random() * dare.length)]
	  buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
	  sendButImage(from, `dare!!\n\n${der}`, `Made by Rey ❤️`, buffer, [
            {
              buttonId: `${prefix}dare`,
              buttonText: {
                displayText: `dare again ➡️`,
              },
              type: 1,
            },
          ]);
	  break;
      case "alfatihah":
           teks = `mari kita bacakan al-fatihah sejenak untuk ${out}`
          break
      case "thanks":
           teks = `sama sama kak ${pushname}`
           reply(teks)
          break
      case "dana":
       sendButMessage(from, `hallo kack mau donasi lewat dana? Langsung aja kirim ke 6281284760551`, `terimakasih telah mau berdonasi ❤️`, [
            {
              buttonId: `${prefix}menu`,
              buttonText: {
                displayText: `back menu`,
              },
              type: 1,                                                                                                                                                            
            },
          ]);
         break;
      case "saweria":
       sendButMessage(from, `hallo kack mau donasi lewat saweria? Langsung aja ke https://saweria.co/inirey`, `terimakasih telah mau berdonasi ❤️`, [
            {
              buttonId: `${prefix}menu`,
              buttonText: {
                displayText: `back menu`,
              },
              type: 1,                                                                                                                                                            
            },
          ]);
         break;
      case "trakker":
        sendButMessage(from, `hallo kak mau donasi lewat trakker ya langsung aja ke https://trakteer.id/erzabot`, `Terimakasih telah mau berdonasi ❤️`, [
            {
              buttonId: `${prefix}menu`,
              buttonText: {
                displayText: `back menu`,
              },
              type: 1,
             },
           ]);
          break;
      case "donasi":
        sendButImage(from, `jangan lupa suport owner terus ya ${pushname}\n\n`, `📸 Instagram\nhttps://instagram.com/_sekhaa\n\n😺 Github\nhttps://github.com/inirey\n\n💻 YouTube\nRey sekha\n\n🌐 Website\nwww.reysekha.my.id\n\n🔥 Rest API\nwww.reysekha.xyz\n\nmau donasi lewat apa kack silahkan pilih di bawah terimakasih :)`, thumb, [
           {
              buttonId: `${prefix}trakker`,
            buttonText: {
              displayText: `trakker 💸`,
            },
            type: 1,
          },
          {
              buttonId: `${prefix}saweria`,
            buttonText: {
              displayText: `saweria 😺`,
            },
            type: 1,
          },
          {
              buttonId: `${prefix}dana`,
              buttonText: {
                displayText: `dana 💵`,
              },
              type: 1,
           },
         ]);
         break;
      case "kisahnabi":
         teks = body.slice(11)
         anu = await fetchJson (`https://rey-api.herokuapp.com/api/kisahnabi?nabi=${teks}&apikey=sekhaapi`, )
         var hmm = anu.result
         teks = `• NABI: ${hmm.nabi.nabi}\n• LAHIR: ${hmm.nabi.lahir}\n• UMUR: ${hmm.nabi.umur}\n• LAHIR: ${hmm.nabi.tempat}\n\n${hmm.nabi.kisah}`,
         beff = await getBuffer (hmm.nabi.image)
         client.sendMessage(from, beff, image, {quoted: mek, caption: teks})
         break
      case "owner":
        sendKontak(from, owner, "Tod", "save lah ajg");
        break;
      //------------------< Sticker Cmd >-------------------
      case "addcmd":
      case "setcmd":
        if (isQuotedSticker) {
          if (!q)
            return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`);
          var kodenya =
            mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
              "base64"
            );
          addCmd(kodenya, q);
          fakestatus("Done!");
        } else {
          reply("tag stickenya");
        }
        break;
      case "delcmd":
        if (!isQuotedSticker)
          return reply(`Penggunaan : ${command} tagsticker`);
        var kodenya =
          mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
            "base64"
          );
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
        fakestatus("Done!");
        break;
      case "listcmd":
        teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
        cemde = [];
        for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        mentions(teksnyee, cemde, true);
        break;
      //------------------< Fitur Fun >-------------------

      //------------------< Fitur Anti antian >-------------------
      case "antilink":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntilink) return reply("Sudah aktif!!");
          antilink.push(from);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mengaktifkan antilink!");
        } else if (args[0] == "off") {
          antilink.splice(from, 1);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mematikan antilink!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "boruto":
        anu = await fetchJson(`https://raw.githubusercontent.com/inirey/Document-api/main/boruto.json`, )
        min = JSON.parse(JSON.stringify(anu));
        bons =  min[Math.floor(Math.random() * min.length)];
        asuu = await getBuffer(bons)
        sendButImage(from, `Source: https://github.com/inirey/Document-api`, `cari lagi? klik di bawah`, asuu, [
            {
              buttonId: `${prefix}boruto`,
              buttonText: {
                displayText: `next ➡️`,
              },
              type: 1,
            },
           ]);
        break;
      case "cogan":
        anu = await fetchJson(`https://raw.githubusercontent.com/inirey/Document-api/main/cogan.json`, )
        min = JSON.parse(JSON.stringify(anu));                                                                                                       
        cog =  min[Math.floor(Math.random() * min.length)];
        apaan = await getBuffer(cog)
        sendButImage(from, `Source: https://github.com/inirey/Document-api`, `cari lagi? klik di bawah`, apaan, [
            {
              buttonId: `${prefix}cogan`,
              buttonText: {
                displayText: `next ➡️`,
              },
              type: 1,
            },                                               
          ]);
        break;
      case "cecan":
        php = await fetchJson(`https://raw.githubusercontent.com/inirey/Document-api/main/cecan.json`, )
        min = JSON.parse(JSON.stringify(php));
        cec =  min[Math.floor(Math.random() * min.length)];
        lahh = await getBuffer(cec)
        sendButImage(from, `Source: https://github.com/inirey/Document-api`, `cari lagi? klik di bawah`, lahh, [
            {
              buttonId: `${prefix}cecan`,
              buttonText: {
                displayText: `next ➡️`,
              },
              type: 1,
            },
          ]);
        break;
      case "minato":
        anu = await fetchJson(`https://restapifull-by-rey.herokuapp.com/api/anime/minato?&apikey=administrator`, )
        min = JSON.parse(JSON.stringify(anu.result));
        ato =  min[Math.floor(Math.random() * min.length)];
        nye = await getBuffer(ato)
        sendButImage(from, `Source: https://github.com/inirey/Document-api`, `cari lagi? klik di bawah`, nye, [
            {
              buttonId: `${prefix}minato`,
              buttonText: {
                displayText: `next ➡️`,
              },
              type: 1,
            },
           ]);
        break;
      case "antihidetag":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntihidetag) return reply("Sudah aktif!!");
          antihidetg.push(from);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mengaktifkan antihidetag!");
        } else if (args[0] == "off") {
          antihidetg.splice(from, 1);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mematikan antihidetag!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIHIDETAG`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antihidetag on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antihidetag off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
      case "antiviewonce":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntiviewonce) return reply("Sudah aktif!!");
          antivo.push(from);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mengaktifkan antiviewonce!");
        } else if (args[0] == "off") {
          antivo.splice(from, 1);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mematikan antiviewonce!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIVIEWONCE`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antiviewonce on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antiviewonce off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
     case "locked":
     case "lock":
       sendButMessage(from, `sorry age is not agreed `, `ACCES DENIED ×`, [
            {
             buttonId: `${prefix}menu`,
               buttonText: {
                 displayText: `back menu`,
               },
               type: 1,
            },
          ]);
          break;
     case "hentai":
        sendButMessage(from, `sorry this feature is locked if you want to open please confirm your age `, `Made By Rey  ❤️`, [
            {
              buttonId: `${prefix}gohentai`,
                buttonText: {
                  displayText: `19-25 th`,
                },
                type: 1,
              },
              {
              buttonId: `${prefix}locked`,
                buttonText: {
                  displayText: `15-19 th`,
                },
                type: 1,
              },
              {
              buttonId: `${prefix}lock`,
              buttonText: {
                displayText: `1-15 th`,
              },
              type: 1,
            },
          ]);
         break;
     case "gohentai":
        hentai = await getBuffer(`https://h4ck3rs404-api.herokuapp.com/api/nsfw/hentai?apikey=404Api`, )
        sendButImage(from, `source: https://github.com/inirey/Document-api`, `next?`, hentai, [
            {
              buttonId: `${prefix}hentai`,
              buttonText: {
                displayText: `next ➡️`,
              },
              type: 1,
            },
           ]);
        break;
     case "asupan2":
         beff = await getBuffer(`https://erza-api.herokuapp.com/api/asupan?&apikey=apirey`, )   
         sendButVideo(from, `penyegar ngab`, `lagi?`, beff, [
            {
              buttonId: `${prefix}asupan2`,
              buttonText: {
                displayText: `next ➡️`,
              },
              type: 1,                                                                                                                                                            
            },
           ]);
         break
     case "aeshestic":
        anu = await fetchJson(`https://raw.githubusercontent.com/inirey/Document-api/main/aesthetic.json`, )
        min = JSON.parse(JSON.stringify(anu));
        ganz =  min[Math.floor(Math.random() * min.length)];
        reyganz = await getBuffer(ganz)
        sendButImage(from, `source: https://github.com/inirey/Document-api`, `lagi?`, reyganz, [
            {
              buttonId: `${prefix}aeshestic`,
              buttonText: {
                displayText: `next ➡️`,
              },
              type: 1,
            },
           ]);
        break;
      case "autojoin":
        if (!isGroup) return reply("Khusus di grup");
        if (!mek.key.fromMe) return reply("Khusus owner");
        if (args[0] == "on") {
          if (autojoin == true) return reply("Sudah aktif!!");
          autojoin = true;
          reply("Sukses mengaktifkan autojoin!");
        } else if (args[0] == "off") {
          autojoin = false;
          reply("Sukses mematikan autojoin!");
        } else if (!q) {
          sendButMessage(from, `MODE AUTOJOIN`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}autojoin on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}autojoin off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "asupan":
        anu = await fetchJson(`https://raw.githubusercontent.com/inirey/Document-api/main/asupan.json`, )
        min = JSON.parse(JSON.stringify(anu));
        ato =  min[Math.floor(Math.random() * min.length)];
        nye = await getBuffer(ato)
        sendButVideo(from, `source: https://github.com/inirey/Document-api`, `pilih di bawah kack kalau mau menglanjoed:v`, nye, [
            {
              buttonId: `${prefix}asupan`,
              buttonText: {
                displayText: `next ➡️`,
              },
              type: 1,
            },
          ]);
        break;
      case "loli":
        beff = await getBuffer(`http://docs-jojo.herokuapp.com/api/randomloli`, )
        sendButImage(from, `source: https://github.com/inirey/Document-api`, `lagi?`, beff, [
            {
              buttonId: `${prefix}loli`,
              buttonText: {
                displayText: `next ➡️`,
              },
              type: 1,
            },
           ]);
        break;
      case 'justina':
        anu = await fetchJson(`https://raw.githubusercontent.com/inirey/Document-api/main/justina.json`, )
        min = JSON.parse(JSON.stringify(anu));
        ato =  min[Math.floor(Math.random() * min.length)];
        nye = await getBuffer(ato)
        sendButImage(from, `source: https://github.com/inirey/Document-api`, `langjud kack? klik di bawah`, nye, [
            {
              buttonId: `${prefix}justina`,
              buttonText: {
                displayText: `next ➡️`,
              },
              type: 1,
            },
           ]);
         break;
      case 'naruto':
        anu = await fetchJson(`https://restapifull-by-rey.herokuapp.com/api/anime/minato?&apikey=administrator`, )
        min = JSON.parse(JSON.stringify(anu.result));
        ato =  min[Math.floor(Math.random() * min.length)];
        nye = await getBuffer(ato)
        sendButImage(from, `source: https://github.com/inirey/Document-api`, `Silahkan pilih salah satu`, nye, [
            {
              buttonId: `${prefix}naruto`,
              buttonText: {
                displayText: `next ➡️`,
              },
              type: 1,
            },
           ]);
        break;
      case "antivirtex":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntivirtex) return reply("Sudah aktif!!");
          antivirtex.push(from);
          fs.writeFileSync(
            "./database/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply("Sukses mengaktifkan antivirtex!");
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./database/antivirtex.json", JSON.stringify(ant));
          reply("Sukses mematikan antivirtex!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "kickarea":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isKickarea) return reply("Sudah aktif!!");
          kickarea.push(from);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mengaktifkan kickarea!");
        } else if (args[0] == "off") {
          kickarea.splice(from, 1);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mematikan kickarea!");
        } else if (!q) {
          sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}kickarea on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}kickarea off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;

      //------------------< Fitur Grup >-------------------
      case "listonline": //copas dari stikerinbot
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(client.chats.get(id).presences),
            client.user.jid,
          ];
          client.reply(
            m.chat,
            "┌─〔 Daftar Online 〕\n" +
              online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` +
              "\n└────",
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
        } catch (e) {
          m.reply("");
        }
        break;

      case "sider": //copas dari stikerinbot
        if (!m.quoted) throw `Balas pesan bot!`;
        let members = m.quoted.chat.endsWith("g.us")
          ? (await client.groupMetadata(m.quoted.chat)).participants.length - 1
          : m.quoted.chat.endsWith("@broadcast")
          ? -1
          : 1;
        let { reads, deliveries } = await client.messageInfo(
          m.quoted.chat,
          m.quoted.id
        );
        let txt = `
*Dibaca oleh:*
${reads
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `@${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length} tersisa` : ""}

*Terkirim ke:*
${deliveries
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length - deliveries.length} tersisa` : ""}
`.trim();
        m.reply(txt, null, {
          contextInfo: {
            mentionedJid: client.parseMention(txt),
          },
        });
        break;
      case "q":
        if (!m.quoted) return reply("reply message!");
        let qse = client.serializeM(await m.getQuotedObj());
        if (!qse.quoted)
          return reply("the message you replied does not contain a reply!");
        await qse.quoted.copyNForward(m.chat, true);
        break;
      case "kick":
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Tag target yang ingin di kick!");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          client.groupRemove(from, mentioned);
          reply(mess.success);
        } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
          client.groupRemove(from, [anu]);
          reply(mess.success);
        } else {
          client.groupRemove(from, mentioned);
          reply(mess.success);
        }
        break;
      case 'memeindo':
				memein = await fetchJson(`https://api.zeks.me/api/memeindo?apikey=administrator`, {method: 'get'})
				buffer = await getBuffer(memein.result)
				sendButImage(from, `meme indo`, `lanjut?`, buffer, [
            {
              buttonId: `${prefix}memeindo`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
			break 
			case 'meme':
				meme = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=administrator`)
				buffer = await getBuffer(meme.result)
				sendButImage(from, `meme`, `lanjut?`, buffer, [
            {
              buttonId: `${prefix}meme`,
              buttonText: {
                displayText: `again ➡️`,
              },
              type: 1,
            },
          ]);
          break;
      case "add":
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          add(from, mentioned);
          reply(mess.success);
        } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
          client.groupAdd(from, [anu]);
          reply(mess.success);
        } else {
          add(from, mentioned);
          reply(mess.success);
        }
        break;
      case "getbio":
        var yy = mek.message.extendedTextMessage.contextInfo.participant;
        var p = await client.getStatus(`${yy}`, MessageType.text);
        reply(p.status);
        if (p.status == 401) {
          reply("Status Profile Not Found");
        }
        break;
      // Get Name
      case "getname":
        var ambl = mek.message.extendedTextMessage.contextInfo.participant;
        const sname =
          client.contacts[ambl] != undefined
            ? client.contacts[ambl].sname || client.contacts[ambl].notify
            : undefined;
        reply(sname);
        break;
      case "setdesc":
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
//        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        client.groupUpdateDescription(from, `${args.join(" ")}`);
        client.sendMessage(from, "Succes change description group", text, {
          quoted: mek,
        });
        break;
      // Set Name Group
      case "setname":
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
  //      if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        client.groupUpdateSubject(from, `${args.join(" ")}`);
        client.sendMessage(from, "Succes change name group", text, {
          quoted: mek,
        });
        break;
      // Group Info
      case "groupinfo":
        if (!isGroup) return;
        ppUrl = await client.getProfilePicture(from); // leave empty to get your own
        buffergbl = await getBuffer(ppUrl);
        client.sendMessage(from, buffergbl, image, {
          quoted: mek,
          caption: `\`\`\`「 Group Info 」\`\`\`\n*•> Name* : ${groupName}\n*•> Member* : ${groupMembers.length}\n*•> Admin* : ${groupAdmins.length}\n*•> Description* : \n${groupDesc}`,
        });
        break;
      // Demote Admins
      case "demote":
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Reply members");
        mentionede = mek.message.extendedTextMessage.contextInfo.participant;
        client.groupDemoteAdmin(from, [mentionede]);
        teks = `Members @${mentionede.split("@")[0]} succes demote`;
        client.sendMessage(from, teks, text, {
          quoted: mek,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
      // Promote Members
      case "promote":
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
      //  if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Reply members");
        mentionede = mek.message.extendedTextMessage.contextInfo.participant;
        client.groupMakeAdmin(from, [mentionede]);
        teks = `Members @${mentionede.split("@")[0]} succes promote`;
        client.sendMessage(from, teks, text, {
          quoted: mek,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
      case "closegc":
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*SUCCES CLOSE GROUP*`);
        client.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break;
      case "revoke":
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        client.revokeInvite(from);
        reply("```Succes revoke link group```");
        break;
      case "opengc":
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*SUCCES OPEN GROUP*`);
        client.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break;
      case "reminder": // by Slavyan
        if (!q)
          return reply(
            `CONTOH PENGGUNANNYA:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
          );
        teks = body.slice(10);
        const messRemind = teks.split("/")[0];
        const timeRemind = teks.split("/")[1];
        typeRemind = "Text";
        if (isQuotedImage) typeRemind = "Image";
        if (isQuotedSticker) typeRemind = "Sticker";
        if (isQuotedAudio) typeRemind = "Audio";
        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
          typeRemind = "Text";
        const parsedTime = ms(toMs(timeRemind));
        reminder.addReminder(
          sender,
          messRemind,
          typeRemind,
          timeRemind,
          _reminder
        );
        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
          await client.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Text
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              client.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedSticker) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await client.downloadAndSaveMediaMessage(encmedia);
          await client.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Sticker
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              client.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              client.sendMessage(from, fs.readFileSync(media), sticker);
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedImage) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await client.downloadAndSaveMediaMessage(encmedia);
          await client.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Image
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              teks = `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`;
              client.sendMessage(from, media, image, {
                contextInfo: { mentionedJid: [sender] },
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedAudio) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await client.downloadAndSaveMediaMessage(encmedia);
          await client.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Audio
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              client.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              client.sendMessage(from, fs.readFileSync(media), audio, {
                contextInfo: { mentionedJid: [sender] },
                mimetype: "audio/mp4",
                ptt: true,
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        break;
       case "jadibot":
           sendButMessage(from, `maaf fitur di lock oleh owner silahkan hubungi owner https://github.com/inirey`, `customize by sekha`, [
            {
              buttonId: `${prefix}owner`,
              buttonText: {
                displayText: `owner`,
              },
              type: 1,
             },
           ]);
         break;
      case "stopjadibot":
        if (mek.key.fromMe)
          return reply("tidak bisa stopjadibot kecuali owner");
        stopjadibot(reply);
        break;
      case "listbot":
        let tekss = "「 *LIST JADIBOT* 」\n";
        for (let i of listjadibot) {
          tekss += `*Nomor* : ${i.jid.split("@")[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`;
        }
        reply(tekss);
        break;

      //------------------< Fitur yg pake button >-------------------
      case "setprefix":
        //if (!mek.key.fromMe) return;
        sendButMessage(
          from,
          `PREFIX : ${prefixStatus ? "Multi Prefix" : "No Prefix"}`,
          `Silahkan pilih salah satu`,
          [
            {
              buttonId: `${prefix}noprefix`,
              buttonText: {
                displayText: `NOPREFIX`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}multiprefix`,
              buttonText: {
                displayText: `MULTIPREFIX`,
              },
              type: 1,
            },
          ]
        );
        break;
      case "mode":
        //if (!mek.key.fromMe) return;
        sendButMessage(from, `MODE SELF/PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `SELF MODE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `PUBLIC MODE`,
            },
            type: 1,
          },
        ]);
        break;
      case "group":
      case "grup":
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        //if (!mek.key.fromMe) return;
        sendButMessage(from, `GROUP SETTING`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}revoke`,
            buttonText: {
              displayText: `REVOKE INVITE`,
            },
            type: 1,
          },
        ]);
        break;
      //end
      //------------------< Fitur downloader >-------------------
      case "tiktokaudio":
        if (!isUrl(args[0]) && !args[0].includes("vt.tiktok"))
        return reply(mess.Iv);
        ganz = await fetchJson(`https://hardianto-chan.herokuapp.com/api/download/tiktok?url=${args[0]}&apikey=hardianto`, )
        rey = await getBuffer(ganz.udio)
        client.sendMessage(from, rey, audio, )
        break;
      case "tiktokwm":
        if (!isUrl(args[0]) && !args[0].includes("vt.tiktok"))
        return reply(mess.Iv);
        ganz = await fetchJson(`https://hardianto-chan.herokuapp.com/api/download/tiktok?url=${args[0]}&apikey=hardianto`, )
        rey = await getBuffer(ganz.wm)
        client.sendMessage(from, rey, video, )
        break;
      case "tiktoknowm":
      case "tiktokdl":
      case "tiktok":
        if (!isUrl(args[0]) && !args[0].includes("vt.tiktok"))
        return reply(mess.Iv);
        ganz = await fetchJson(`https://hardianto-chan.herokuapp.com/api/download/tiktok?url=${args[0]}&apikey=hardianto`, )
        rey = await getBuffer(ganz.nowm)
        client.sendMessage(from, rey, video, )
        break;
      case "youtube":
        if (!isUrl(args[0]) && !args[0].includes("youtu.be"))
          return reply(mess.Iv);
        var anu = await fetchJson(
          `https://restapifull-by-rey.herokuapp.com/api/yutub/video?url=${args[0]}&apikey=administrator`
        );
        var info = anu.result
        var buffer = await getBuffer(info.thumb);
        sendButImage(
          from,
          `• *Title*: ${info.title}\n• *Resolusi*: ${info.resolution}\n• *Size*: ${info.filesize}\n• *Type*: ${info.ext}`,
          `Silahkan pilih salah satu format yg mau didownload`,
          buffer,
          [
            {
              buttonId: `${prefix}ytdl ${args[0]}|video`,
              buttonText: {
                displayText: `VIDEO`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}ytdl ${args[0]}|audio`,
              buttonText: {
                displayText: `AUDIO`,
              },
              type: 1,
            },
          ]
        );
        break;
      //JCCHCCGHTHDTRSRS
      case "twitter":
        if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("Linknya?");
        ten = args[0];
        var res = await hx.twitter(`${ten}`);
        ren = `${g.HD}`;
        sendMediaURL(from, ren, "DONE");
        break;
      case "facebook":
        if (!q) return reply("Linknya?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
      case "ig":
      case "instagram":
        if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("Linknya?");
        reply(mess.wait);
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              client.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              client.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;
      /*case "tiktok":
      case "tiktokdl":
        var gh = args.join("");
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${link}`
        );
        if (tipe == "audio") {
          sendMediaURL(from, bv.result.media_resources.music.playUrl, "");
        }
        if (tipe == "video") {
          sendMediaURL(from, bv.result.media_resources.video.videoUrl, "");
        }
        break;*/
      case "ytdl":
        var gh = args.join("");
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var rey = await fetchJson(
          `https://restapifull-by-rey.herokuapp.com/api/yutub/${tipe}?url=${link}&apikey=administrator`
        );
        if (tipe == "video") {
          sendMediaURL(from, rey.result.result, "");
        }
        if (tipe == "audio") {
          sendMediaURL(from, rey.result.result, "");
        }
        break;

      case "noprefix":
        if (!mek.key.fromMe) return;
        if (prefixStatus == false) return reply("No prefix is recently on!");
        prefixStatus = false;
        reply("Berhasil mengganti prefix menjadi noprefix");
        break;
      case "multiprefix":
        if (!mek.key.fromMe) return;
        if (prefixStatus == true) return reply("Multi prefix is recently on!");
        prefixStatus = true;
        reply("Berhasil mengganti prefix menjadi multiprefix");
        break;

      case "delvote":
        if (!mek.key.remoteJid) return;
        if (isVote) return reply("Tidak ada sesi Voting");
        delVote(from);
        reply("Sukses Menghapus sesi Voting Di Grup Ini");
        break;
      case "voting":
        if (!isGroupAdmins && !mek.key.fromMe) return;
        if (!isGroup) return reply(mess.only.group);
        if (isVote) return reply("Sesi Voting Sedang Berlangsung Di Grup Ini");
        if (!q)
          return reply(
            "*Voting*\n\n" +
              prefix +
              "voting @tag target | reason  | 1 (1 = 1 Menit)"
          );
        if (
          mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 ||
          mek.message.extendedTextMessage.contextInfo == null
        ) {
          let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
          split = args.join(" ").replace("@", "").split("|");
          if (!Number(split[2]))
            return reply(
              "masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit"
            );
          await mentions(
            "Vote " +
              "@" +
              id.split("@")[0] +
              " Di Mulai" +
              "\n\n" +
              `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,
            [id],
            true
          );
          addVote(from, split[1], split[0], split[2], reply);
        }
        break;
      case "linkwa":
        if (!q) return reply("cari group apa?");
        hx.linkwa(q).then((result) => {
          let res = "*「 _LINK WA_ 」*\n\n";
          for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`;
          }
          reply(res);
        });
        break;
      case "igstalk":
        if (!q) return reply("Usernamenya?");
        const tod = await fetchJson(
          `https://api.dhnjing.xyz/stalk/instagram?user=${q}`
        );
        buff = await getBuffer(tod.result.user_profile_hd);
        const tt = `*INSTAGRAM STALKING*
    • Username: ${tod.result.username}
    • Fullname: ${tod.result.user_fullname}
    • Bio: ${tod.result.user_bio}
    • Jumlah postingan: ${tod.result.user_post_total}
    • Following: ${tod.result.user_following}
    • Follower: ${tod.result.user_followers}`;
        client.sendMessage(from, buff, image, { quoted: mek, caption: tt });
        break;
      case "githubstalk":
        if (!q) return reply("Usernamenya?");
        const oi = await fetchJson(
          `https://api.dhnjing.xyz/stalk/github?user=dehan-j1ng`
        );
        const mm = `*GITHUB STALK*
    Username: ${oi.result.username}
    Fullname: ${oi.result.name}
    Bio: ${oi.result.user_bio}
    Jumlah repo: ${oi.result.user_repo}
    Following: ${oi.result.user_following}
    Follower: ${oi.result.user_followers}`;
        reply(mm);
        break;
      case "tiktokstalk":
        if (!q) return reply("Usernamenya? ");
        var i = await fetchJson(
          `https://api.dhnjing.xyz/stalk/tiktok?user=@${q}`
        );
        buff = await getBuffer(i.result.user.avatarLarger);
        var ii = `*TIKTOK STALK*
    Username: ${q}
    Nickname: ${i.result.user.nickname}
    Bio: ${i.result.user.signature}
    Jumlah postingan: ${i.result.stats.videoCount}
    Following: ${i.result.stats.followingCount}
    Follower: ${i.result.stats.followerCount}`;
        client.sendMessage(from, buff, image, { quoted: mek, caption: ii });
        break;
      case "igstory":
        if (!q) return reply("Usernamenya?");
        hx.igstory(q).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              client.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              client.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;
      case "colongsw": //arif
        if (!mek.key.fromMe) return;
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await client.downloadAndSaveMediaMessage(ger);
          client.sendMessage(from, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await client.downloadAndSaveMediaMessage(ger);
          client.sendMessage(from, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply sw foto / video yg mau dicolong");
        }
        break;
      case "tulis":
        if (args.length < 1)
          return reply(
            `Usage: ${prefix + command} nama&kelas&nomo&kata\n*Example*: ${
              prefix + command
            } udin&20&17&blablabla`
          );
        var bodi = args.join(" ");
        var nama = bodi.split("&")[0];
        var kelas = bodi.split("&")[1];
        var no = bodi.split("&")[2];
        var aksarane = bodi.split("&")[3];
        reply("membuat bos...");
        rakz = await getBuffer(
          `https://fdz-app.herokuapp.com/api/tulis?nama=${nama}&no=${no}&kelas=${kelas}&text=${aksarane}`
        );
        client.sendMessage(from, rakz, image, {
          quoted: mek,
          thumbnail: Buffer.alloc(0),
        });
        break;

      case "card-game":
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          //  console.log(ted)
          var bodi = args.join(" ");
          var nama = bodi.split("|")[0];
          var kelas = bodi.split("|")[1];
          reply("Loading.....");
          owgi = await client.downloadAndSaveMediaMessage(ted);
          console.log(owgi);
          anu = await imgbb("apikey imgbb lu", owgi);
          console.log(anu);
          //reply (anu)

          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/card-game?nama=${nama}&desc=${kelas}&picurl=${anu.display_url}`
          );
          client.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
          });
        } else {
          reply(
            `Kirim gambar atau tag gambar yang sudah dikirim lalu  dengan caption ${prefix}card-game nama|teks keterangan `
          );
        }
        break;

      case "sertiff1":
        pll = body.slice(10);
        if (args.length < 1) return reply(prefix);
        reply("Loading.....");
        rakz = await getBuffer(
          `https://fdz-app.herokuapp.com/api/maker/sertif-ff-v1?text=${pll}`
        );
        client.sendMessage(from, rakz, image, {
          quoted: mek,
          thumbnail: Buffer.alloc(0),
        });
        break;
      case "bpink":
        pll = body.slice(7);

        if (args.length < 1) return reply(preffk);
        reply("Loading.....");
        rakz = await getBuffer(
          `https://fdz-app.herokuapp.com/api/maker/blackpink?text=${pll}`
        );
        client.sendMessage(from, rakz, image, {
          quoted: mek,
          thumbnail: Buffer.alloc(0),
        });
        break;

      case "wanted":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          reply("Loading.....");
          owgi = await client.downloadAndSaveMediaMessage(ted);
          //	  console.log(owgi)
          anu = await imgbb("3395a377ebac7e9f744c3683b44a2a59", owgi);
          console.log(anu);
          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/wanted?picurl=${anu.display_url}`
          );
          client.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
          });
        }
        break;

      case "deltrash":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          reply("Loading.....");
          owgi = await client.downloadAndSaveMediaMessage(ted);
          //	  console.log(owgi)
          anu = await imgbb("3395a377ebac7e9f744c3683b44a2a59", owgi);
          console.log(anu);
          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/deltrash?imgurl=${anu.display_url}`
          );
          client.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
          });
        }
        break;

      case "squidrip":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          reply("Loading.....");
          owgi = await client.downloadAndSaveMediaMessage(ted);
          console.log(owgi);
          anu = await imgbb("3395a377ebac7e9f744c3683b44a2a59", owgi);
          console.log(anu);
          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/rip?picurl=${anu.display_url}`
          );
          client.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
          });
        }
        break;

      case "wasted":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          //  console.log(ted)
          reply("Loading.....");
          owgi = await client.downloadAndSaveMediaMessage(ted);
          console.log(owgi);
          anu = await imgbb("3395a377ebac7e9f744c3683b44a2a59", owgi);
          console.log(anu);
          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/wasted?imgurl=${anu.display_url}`
          );
          client.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
          });
        } /*else {
                                                                 reply('Jangan tambah kan apapun pada command')
                                                                   }*/
        break;
      /*case "waifu":
      case "loli":
      case "husbu":
      case "milf":
      case "cosplay":
      case "naruto":
      case "wibu":
      case "aeshtetic":
      case "wallpaperanime":
        let wipu = await fetchJson(
          `https://api.dhnjing.xyz/search/pinterest/image?query=${command}`
        );
        gmbr = wipu.result[Math.floor(Math.random() * wipu.result.length)];
        fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(gmbr.orig.url));
        buttons = [
          {
            buttonId: `${prefix + command}`,
            buttonText: { displayText: `➡️Next` },
            type: 1,
          },
        ];
        imageMsg = (
          await client.prepareMessage(
            from,
            fs.readFileSync(`./${sender}.jpeg`),
            "imageMessage",
            { thumbnail: Buffer.alloc(0) }
          )
        ).message.imageMessage;
        buttonsMessage = {
          footerText: "Jangan Lupa Donasi Ya Kak ☕",
          imageMessage: imageMsg,
          contentText: `klik Next untuk ke gambar selanjut nya`,
          buttons,
          headerType: 4,
        };
        prep = await client.pepareMessageFromContent(
          from,
          { buttonsMessage },
          { quoted: mek }
        );
        client.relayWAMessage(prep);
        fs.unlinkSync(`./${sender}.jpeg`);
        break;*/
      case "caripesan":
        if (!q) return reply("pesannya apa bang?");
        let v = await client.searchMessages(q, from, 10, 1);
        let s = v.messages;
        let el = s.filter((v) => v.message);
        el.shift();
        try {
          if (el[0].message.conversation == undefined) return;
          reply(`Ditemukan ${el.length} pesan`);
          await sleep(3000);
          for (let i = 0; i < el.length; i++) {
            await client.sendMessage(from, "Nih pesannya", text, {
              quoted: el[i],
            });
          }
        } catch (e) {
          reply("Pesan tidak ditemukan!");
        }
        break;
      case "lirik":
        if (!q) return reply("lagu apa?");
        let song = await hx.lirik(q);
        sendMediaURL(from, song.thumb, song.lirik);
        break;
      case "otaku":
        if (!q) return reply("judul animenya?");
        let anime = await hx.otakudesu(q);
        rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`;
        ram = await getBuffer(anime.img);
        client.sendMessage(from, ram, image, { quoted: mek, caption: rem });
        break;
      case "komiku":
        if (!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`);
        let komik = await hx.komiku(q);
        result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`;
        sendMediaURL(from, komik.image, result);
        break;
      case "chara":
        if (!q) return reply(`gambar apa?\n${prefix}chara client`);
        let im = await hx.chara(q);
        let acak = im[Math.floor(Math.random() * im.length)];
        let li = await getBuffer(acak);
        await client.sendMessage(from, li, image, { quoted: mek });
        break;
      case "pinterest":
        if (!q) return reply("gambar apa?");
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
        await client.sendMessage(from, di, image, { quoted: mek });
        break;
      case "playstore":
        if (!q) return reply("lu nyari apa?");
        let play = await hx.playstore(q);
        let store = "❉─────────────────────❉\n";
        for (let i of play) {
          store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`;
        }
        reply(store);
        break;
      case "on":
        if (!mek.key.fromMe) return;
        offline = false;
        fakestatus(" ```ANDA TELAH ONLINE``` ");
        break;
      case "status":
        fakestatus(
          `*STATUS*\n${offline ? "> OFFLINE" : "> ONLINE"}\n${
            banChats ? "> SELF-MODE" : "> PUBLIC-MODE"
          }\n${prefixStatus ? "> MULTI-PREFIX" : "> NO-PREFIX"}`
        );
        break;
      case "off":
        if (!mek.key.fromMe) return;
        offline = true;
        waktu = Date.now();
        anuu = q ? q : "-";
        alasan = anuu;
        fakestatus(" ```ANDA TELAH OFFLINE``` ");
        break;
      case "get":
        if (!q) return reply("linknya?");
        fetch(`${args[0]}`)
          .then((res) => res.text())
          .then((bu) => {
            fakestatus(bu);
          });
        break;
      case "kontag":
//        if (!mek.key.fromMe) return reply("SELF-BOT");
        pe = args.join("");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        members_ids = [];
        for (let mem of groupMembers) {
          members_ids.push(mem.jid);
        }
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        client.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact,
          { contextInfo: { mentionedJid: members_ids } }
        );
        break;
      case "sticktag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else {
          reply(`*Reply sticker yang sudah dikirim*`);
        }
        break;
      case "totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case "fitnah":
        if (args.length < 1)
          return reply(
            `Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`
          );
        var gh = args.join("");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        var replace = gh.split("|")[0];
        var target = gh.split("|")[1];
        var bot = gh.split("|")[2];
        client.sendMessage(from, `${bot}`, text, {
          quoted: {
            key: {
              fromMe: false,
              participant: `${mentioned}`,
              ...(from ? { remoteJid: from } : {}),
            },
            message: { conversation: `${target}` },
          },
        });
        break;
      case "settarget":
        if (!q) return reply(`${prefix}settarget 628xxxxx`);
        targetpc = args[0];
        fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`);
        break;
      case "fitnahpc":
        if (!q) return reply(`${prefix}fitnahpc teks target|teks lu`);
        jids = `${targetpc}@s.whatsapp.net`; // nomer target
        var split = args.join(" ").replace(/@|\d/gi, "").split("|");
        var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
        var options = {
          contextInfo: {
            quotedMessage: { extendedTextMessage: { text: split[0] } },
          },
        };
        const responye = await client.sendMessage(
          jids,
          `${split[1]}`,
          MessageType.text,
          options
        );
        await client.deleteMessage(jids, {
          id: responye.messageID,
          remoteJid: jids,
          fromMe: true,
        });
        break;
      case "tomp3":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          client.sendMessage(from, buffer453, audio, {
            mimetype: "audio/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;
      case "fast":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            client.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "slow":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            client.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "reverse":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          client.sendMessage(from, buffer453, video, {
            mimetype: "video/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;

      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                client.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
      case "kontak":
        pe = args.join(" ");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        client.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact
        );
        break;
      case "take":
      case "colong":
        if (!isQuotedSticker) return reply("Stiker aja om");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        anu = args.join(" ").split("|");
        satu = anu[0] !== "" ? anu[0] : `SELF`;
        dua = typeof anu[1] !== "undefined" ? anu[1] : `BOT`;
        require("./lib/fetcher.js").createExif(satu, dua);
        require("./lib/fetcher.js").modStick(media, client, mek, from);
        break;
      case "stikerwm":
      case "stickerwm":
      case "swm":
        pe = args.join("");
        var a = pe.split("|")[0];
        var b = pe.split("|")[1];
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await client.downloadAndSaveMediaMessage(encmedia);
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              client.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                client.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await client.downloadAndSaveMediaMessage(encmedia);
          pe = args.join("");
          var a = pe.split("|")[0];
          var b = pe.split("|")[1];
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              client.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                client.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`
          );
        }
        break;
      case "upswteks":
        if (!q) return fakestatus("Isi teksnya!");
        client.sendMessage("status@broadcast", `${q}`, extendedText);
        fakegroup(`Sukses Up story wea teks ${q}`);
        break;
      case "upswimage":
        if (isQuotedImage) {
          const swsw = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          cihcih = await client.downloadMediaMessage(swsw);
          client.sendMessage("status@broadcast", cihcih, image, {
            caption: `${q}`,
          });
          bur = `Sukses Upload Story Image dengan Caption: ${q}`;
          client.sendMessage(from, bur, text, { quoted: mek });
        } else {
          fakestatus("Reply gambarnya!");
        }
        break;
      case "upswvideo":
        if (isQuotedVideo) {
          const swsw = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          cihcih = await client.downloadMediaMessage(swsw);
          client.sendMessage("status@broadcast", cihcih, video, {
            caption: `${q}`,
          });
          bur = `Sukses Upload Story Video dengan Caption: ${q}`;
          client.sendMessage(from, bur, text, { quoted: mek });
        } else {
          fakestatus("reply videonya!");
        }
        break;
      case "fdeface":
        ge = args.join("");
        var pe = ge.split("|")[0];
        var pen = ge.split("|")[1];
        var pn = ge.split("|")[2];
        var be = ge.split("|")[3];
        const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`;
        if (args.length < 1) return reply(fde);
        const dipes =
          isQuotedSticker || isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
        const tipes = await client.downloadAndSaveMediaMessage(dipes);
        const bufer = fs.readFileSync(tipes);
        const desc = `${pn}`;
        const title = `${pen}`;
        const url = `${pe}`;
        const buu = `https://${be}`;
        var anu = {
          detectLinks: false,
        };
        var mat = await client.generateLinkPreview(url);
        mat.title = title;
        mat.description = desc;
        mat.jpegThumbnail = bufer;
        mat.canonicalUrl = buu;
        client.sendMessage(from, mat, MessageType.extendedText, anu);
        break;
      case "public":
        if (!mek.key.fromMe) return fakestatus("wayoloh mau ngapain");
        if (banChats === false) return;
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = false;
        fakestatus(`*PUBLIC-MODE*`);
        break;
      case "self":
        if (!mek.key.fromMe) return fakestatus("wayoloh mau ngapain");
        if (banChats === true) return;
        uptime = process.uptime();
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = true;
        fakestatus(`*SELF-MODE*`);
        break;
      case "hidetag":
//        if (!mek.key.fromMe) return fakestatus("SELF-BOT");
        if (!isGroupAdmins && !mek.key.fromMe) return fakegroup("Khusus admin");
        if (!isGroup) return reply(mess.only.group);
        var value = args.join(" ");
        var group = await client.groupMetadata(from);
        var member = group["participants"];
        var mem = [];
        member.map(async (adm) => {
          mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
        });
        var optionshidetag = {
          text: value,
          contextInfo: { mentionedJid: mem },
          quoted: mek,
        };
        client.sendMessage(from, optionshidetag, text);
        break;
      case "play":
        if (args.length === 0)
          return reply(
            `Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`
          );
        var srch = args.join("");
        aramas = await yts(srch);
        aramat = aramas.all;
        var mulaikah = aramat[0].url;
        try {
          yta(mulaikah).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
                if (Number(filesize) >= 100000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih terlalu panjang_`
                  );
                const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captions);
                await sendMediaURL(from, dl_link).catch(() => reply("error"));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "video":
        if (args.length === 0)
          return reply(
            `Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`
          );
        var srch = args.join("");
        aramas = await yts(srch);
        aramat = aramas.all;
        var mulaikah = aramat[0].url;
        try {
          ytv(mulaikah).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
                if (Number(filesize) >= 100000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captions);
                await sendMediaURL(from, dl_link).catch(() => reply("error"));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "sticker":
      case "stiker":
      case "sg":
      case "s":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await client.downloadAndSaveMediaMessage(encmedia);
          ran = "666.webp";
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply("error");
            })
            .on("end", function () {
              console.log("Finish");
              client.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await client.downloadAndSaveMediaMessage(encmedia);
          ran = "999.webp";
          reply(mess.wait);
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`);
            })
            .on("end", function () {
              console.log("Finish");
              client.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`
          );
        }
        break;
      case "toimg":
        if (!isQuotedSticker) return reply("𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !");
        reply(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".png");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return reply("Yah gagal, coba ulangi ^_^");
          buffer = fs.readFileSync(ran);
          fakethumb(buffer, "NIH");
          fs.unlinkSync(ran);
        });
        break;
      case "ytsearch":
        if (args.length < 1) return reply("Tolong masukan query!");
        var srch = args.join("");
        try {
          var aramas = await yts(srch);
        } catch {
          return await client.sendMessage(
            from,
            "Error!",
            MessageType.text,
            dload
          );
        }
        aramat = aramas.all;
        var tbuff = await getBuffer(aramat[0].image);
        var ytresult = "";
        ytresult += "「 *YOUTUBE SEARCH* 」";
        ytresult += "\n________________________\n\n";
        aramas.all.map((video) => {
          ytresult += "❏ Title: " + video.title + "\n";
          ytresult += "❏ Link: " + video.url + "\n";
          ytresult += "❏ Durasi: " + video.timestamp + "\n";
          ytresult +=
            "❏ Upload: " + video.ago + "\n________________________\n\n";
        });
        ytresult += "◩ *SELF-BOT*";
        await fakethumb(tbuff, ytresult);
        break;
      case "setreply":
      case "setfake":
        if (!mek.key.fromMe) return reply('*Kamu owner Erza??*')
        if (!q) return fakegroup(mess.wrongFormat);
        fake = q;
        fakegroup(`Succes Mengganti Conversation Fake : ${q}`);
        break;
      case "setfakeimg":
        if (
//        if (!mek.key.fromMe) return reply('*Kamu owner Erza??*')
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await client.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/fake.jpeg`, delb);
          fakestatus("Sukses");
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
      case "setthumb":
        if (
  //      if (!mek.key.fromMe) return reply('*Kamu owner Erza??*')
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await client.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/thumb.jpeg`, delb);
          fakestatus("Sukses");
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
      case "ytmp4":
        if (args.length === 0)
          return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`);
        let isLinks2 = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks2) return reply(mess.error.Iv);
        try {
          reply(mess.wait);
          ytv(args[0]).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 40000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captionsYtmp4);
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "emoji":
        if (!q) return fakegroup("emojinya?");
        qes = args.join(" ");
        emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);
          console.log(teks);
        });
        break;
      case "ytmp3":
        if (args.length === 0)
          return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`);
        let isLinks = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks) return reply(mess.error.Iv);
        try {
          reply(mess.wait);
          yta(args[0]).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 30000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captions);
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "image":
      case "gimage":
      case "googleimage":
        if (args.length < 1) return reply("Apa Yang Mau Dicari?");
        reply(mess.wait);
        teks = args.join(" ");
        res = await gis(teks, google);
        function google(error, result) {
          if (error) {
            return reply(
              "_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_"
            );
          } else {
            gugIm = result;
            random = gugIm[Math.floor(Math.random() * gugIm.length)].url;
            sendMediaURL(from, random);
          }
        }
        break;

      case "brainly":
        if (args.length < 1) return reply("Pertanyaan apa");
        brien = args.join(" ");
        brainly(`${brien}`).then((res) => {
          teks = "❉───────────────────────❉\n";
          for (let Y of res.data) {
            teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`;
          }
          client.sendMessage(from, teks, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
        break;

      case "igstalk":
        if (!q) return fakegroup("Usernamenya?");
        ig.fetchUser(`${args.join(" ")}`).then((Y) => {
          console.log(`${args.join(" ")}`);
          ten = `${Y.profile_pic_url_hd}`;
          teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join(
            ""
          )}\n*Full Name* : ${Y.full_name}\n*Bio* : ${
            Y.biography
          }\n*Followers* : ${Y.followers}\n*Following* : ${
            Y.following
          }\n*Private* : ${Y.is_private}\n*Verified* : ${
            Y.is_verified
          }\n\n*Link* : https://instagram.com/${args.join("")}`;
          sendMediaURL(from, ten, teks);
        });
        break;
      case "fb":
        if (!q) return reply("Linknya?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
      case "term":
        if (!mek.key.fromMe) return reply('*Kamu owner Erza??*')
        if (!q) return fakegroup(mess.wrongFormat);
        exec(q, (err, stdout) => {
          if (err) return fakegroup(`REY GANTENG:~ ${err}`);
          if (stdout) {
            fakegroup(stdout);
          }
        });
        break;
      case "join":
        try {
//          if (!mek.key.fromMe) return reply('*Kamu owner Erza??*')
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          hen = args[0];
          if (!q) return fakestatus("Masukan link group");
          var codeInvite = hen.split("https://chat.whatsapp.com/")[1];
          if (!codeInvite) return fakegroup("pastikan link sudah mekar!");
          var response = await client.acceptInvite(codeInvite);
          fakestatus("SUKSES");
        } catch {
          fakegroup("LINK ERROR!");
        }
        break;
      case "runtime":
      case "test":
        run = process.uptime();
        teks = `${kyun(run)}`;
        fakegroup(teks);
        break;
      case "speed":
      case "ping":
        const timestamp = speed();
        const latensi = speed() - timestamp;
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString("utf-8");
          const ssd = child.replace(/Memory:/, "Ram:");
          const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
          fakegroup(pingnya);
        });
        break;
      case "totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case "tomp4":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          ger = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await client.downloadAndSaveMediaMessage(ger);
          webp2mp4File(owgi).then((res) => {
            sendMediaURL(from, res.result, "Done");
          });
        } else {
          reply("reply stiker");
        }
        fs.unlinkSync(owgi);
        break;
      case "tourl":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedVideo) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedVideo
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          owgi = await client.downloadMediaMessage(boij);
          res = await upload(owgi);
          reply(res);
        } else {
          reply("kirim/reply gambar/video");
        }
        break;
      case "inspect":
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          if (!q) return reply("masukan link wa");
          cos = args[0];
          var net = cos.split("https://chat.whatsapp.com/")[1];
          if (!net) return reply("pastikan itu link https://whatsapp.com/");
          jids = [];
          let {
            id,
            owner,
            subject,
            subjectOwner,
            desc,
            descId,
            participants,
            size,
            descOwner,
            descTime,
            creation,
          } = await client.query({
            json: ["query", "invite", net],
            expect200: true,
          });
          let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split("@")[0]}` : "*Owner* : -"}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : "*Desc* : tidak ada"}
*Id desc* : ${descId}
${
  descOwner
    ? `*Desc diubah oleh* : @${descOwner.split("@")[0]}`
    : "*Desc diubah oleh* : -"
}\n*Tanggal* : ${
            descTime ? `${formatDate(descTime * 1000)}` : "-"
          }\n\n*Kontak yang tersimpan*\n`;
          for (let y of participants) {
            par += `> @${y.id.split("@")[0]}\n*Admin* : ${
              y.isAdmin ? "Ya" : "Tidak"
            }\n`;
            jids.push(`${y.id.replace(/@c.us/g, "@s.whatsapp.net")}`);
          }
          jids.push(
            `${owner ? `${owner.replace(/@c.us/g, "@s.whatsapp.net")}` : "-"}`
          );
          jids.push(
            `${
              descOwner
                ? `${descOwner.replace(/@c.us/g, "@s.whatsapp.net")}`
                : "-"
            }`
          );
          client.sendMessage(from, par, text, {
            quoted: mek,
            contextInfo: { mentionedJid: jids },
          });
        } catch {
          reply("Link error");
        }
        break;
      case "eval":
//        if (!mek.key.fromMe) return;
//        if (!isOwner) return reply('*Kamu owner Erza??*')
        client.sendMessage(
          from,
          JSON.stringify(eval(budy.slice(5)), null, "\t"),
          text,
          { quoted: mek }
        );
        break;
      default:
     if (!isGroup && !isCmd) {
                        simi = await fetchJson(`https://erzaaa.herokuapp.com/api/simsimi/?text=${budy}&apikey=Erzaa`)
                        reply(simi.result.success)
                    }
        }

//    if (isGroup && !isCmd && isSimi && budy != undefined) {
    if (isGroup && budy != undefined) {
    } else {
        console.log(
        color("[ERZA]", "green"),
        "PRIVATE",
        color(sender.split("@")[0])
      );
    }
  } catch (e) {
    e = String(e);
    if (!e.includes("c.isZero") && !e.includes("jid")) {
      console.log("Message : %s", color(e, "green"));
    }
    // console.log(e)
  }
};
