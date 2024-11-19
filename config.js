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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_18_11_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5LFxuICAgICAgICAzMixcbiAgICAgICAgMzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMCxcbiAgICAgICAgODksXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNixcbiAgICAgICAgNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyLFxuICAgICAgICA3MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgODMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY0LFxuICAgICAgICA4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMyLFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA4LFxuICAgICAgICA2OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDY4LFxuICAgICAgICA0LFxuICAgICAgICA2NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0LFxuICAgICAgICA5NixcbiAgICAgICAgMSxcbiAgICAgICAgNTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDU5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjE5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDQzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjExLFxuICAgICAgICAzNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICA2MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxODEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTksXG4gICAgICAgIDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NyxcbiAgICAgICAgODUsXG4gICAgICAgIDU3LFxuICAgICAgICA5NixcbiAgICAgICAgMTg3LFxuICAgICAgICA5NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMxLFxuICAgICAgICA2MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODksXG4gICAgICAgIDYzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDM4LFxuICAgICAgICAzMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI2LFxuICAgICAgICA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI3LFxuICAgICAgICA2NixcbiAgICAgICAgMTA2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDk5LFxuICAgICAgICA3OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4Z3RFcEVYdGZRWFBxam4xRFVMajJuQ0Y0blRubGsyWmNRU2s2dUhpUTk4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI2NzcxNzYxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTNDMEU0OTEwODVEMkUzQ0JDQ0IzNDUzM0Y4MUZFNEVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxOTg2Mjk5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFrbXZ3OUZiUmJ5cHBnVmpnMmFIeFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmFiODUxNjQtZjUxNC00OGQ5LTg1NmQtZWUwMjRkYzYxM2M3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYzLFxuICAgICAgMjI4LFxuICAgICAgMTEwLFxuICAgICAgMTI4LFxuICAgICAgODYsXG4gICAgICA1NCxcbiAgICAgIDMsXG4gICAgICAyNDYsXG4gICAgICAxMTksXG4gICAgICA3NSxcbiAgICAgIDMyLFxuICAgICAgMjUxLFxuICAgICAgMjUzLFxuICAgICAgMjUsXG4gICAgICAxOTEsXG4gICAgICAzNixcbiAgICAgIDI0MSxcbiAgICAgIDU1LFxuICAgICAgODMsXG4gICAgICAyMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODQsXG4gICAgICAxMjcsXG4gICAgICA4OCxcbiAgICAgIDE4MyxcbiAgICAgIDI1MSxcbiAgICAgIDgwLFxuICAgICAgNTIsXG4gICAgICAxNDMsXG4gICAgICAyMTYsXG4gICAgICAxMTYsXG4gICAgICA1NyxcbiAgICAgIDE4MCxcbiAgICAgIDE5MCxcbiAgICAgIDE5OCxcbiAgICAgIDE0NyxcbiAgICAgIDgyLFxuICAgICAgMTY2LFxuICAgICAgMjA5LFxuICAgICAgMjgsXG4gICAgICAyMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTkYyRlhIR1lcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI2NzcxNzYxNzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8JOGqcuQzaLwnZCT0L3hqrHwnZ20zaIg8J2QgsynybzMmvCdnbTNouC4nSDwnZCA8J2Qq/CdkKzMhPCdkK7hjZ3Wn82hzaHNnCDjg6PiuJnwk4aqICAgICAgICAgICAgICAgICAgICAgICAgICDip7zwnZ+RXCIsXG4gICAgXCJsaWRcIjogXCIyNDgwOTUwNDQ1NzkzOTk6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNbWkyTjBGRVBPRzhMa0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImpweGtRK1ZMNHhiUUliZXlrQm42cGJOZ2tKdnVHNldHdGVEVjFsdVJSQTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaVJZOVg2WFk3aEpPTkphb0h3RDlnbmluekxWZ0JvTE42TU1Ra2FiMzZFUWtUN1lDOFZFOTJyZ2txdFJmMWVrTVVqVUJ1Tmprbzc1WGdVTm1pZGxhQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicEZNdVF6ZURrNW1ycXJJQXhBMEZ1Y3JaT0dGZHJKYjVWcHZCV0pIYlRwQkZqN1F2NVA3UGlZaFl3MXcxTk5qTHBYdyt0RHBwcTYyNW9hanhxaVJjRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjY3NzE3NjE3OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTk4NjI5NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVEWVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRURZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMXhLVTR5SUVlekpwM0NmS1JLamxUeDF0ZUlDOHlPa2MwWTdWUjd1QlB6Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTM4NjU4NjMzLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE5ODI3MjE0NzRcIn0iCn0="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
