const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923267717617";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SESSION_ID="SUHAIL_12_42_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NixcbiAgICAgICAgOCxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQwLFxuICAgICAgICAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjExLFxuICAgICAgICA1MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICA3OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICA4NixcbiAgICAgICAgMTUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDksXG4gICAgICAgIDU3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MixcbiAgICAgICAgODYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg2LFxuICAgICAgICA2NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNixcbiAgICAgICAgNDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTksXG4gICAgICAgIDg5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA3OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzksXG4gICAgICAgIDgyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDkxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODksXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDcxLFxuICAgICAgICA2OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTksXG4gICAgICAgIDcwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTExLFxuICAgICAgICA2NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMyLFxuICAgICAgICAzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAg"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ARsii",
  ownername:process.env.OWNER_NAME|| "ARsii",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
