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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_34_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDkyLFxuICAgICAgICA1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDIxLFxuICAgICAgICA1NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDg1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk0LFxuICAgICAgICA1LFxuICAgICAgICAyMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgODAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTczLFxuICAgICAgICA4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDMwLFxuICAgICAgICA3OCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUzLFxuICAgICAgICA5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQyLFxuICAgICAgICAzOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODgsXG4gICAgICAgIDUyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc4LFxuICAgICAgICAzOCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDYxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzcsXG4gICAgICAgIDg0LFxuICAgICAgICAxODYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDEsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICA0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDkxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzMCxcbiAgICAgICAgMixcbiAgICAgICAgMTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAzLFxuICAgICAgICA5NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTksXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYaVljTjAzSUZLTEJqeE5ITkp0ajlJN1JIVEYvR0EwWUpIWW9UblgwWjM4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI2NzcxNzYxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTI0MjAzQzE2MDg0NUM0NjdFM0EwMEQxMDg2QTdBRjZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNTQwMDUyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkNmd1BZZU1ZU2JHUkg4TmdlcmdTcVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmE5NDBjZDUtNGZmNC00NzM2LWE5MTUtMWM4NmZjMjdiYTdhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNixcbiAgICAgIDE4NCxcbiAgICAgIDI0MSxcbiAgICAgIDIyNixcbiAgICAgIDEzMCxcbiAgICAgIDI1LFxuICAgICAgNzksXG4gICAgICA0MSxcbiAgICAgIDUzLFxuICAgICAgOTcsXG4gICAgICAzMyxcbiAgICAgIDI1MCxcbiAgICAgIDEzOCxcbiAgICAgIDI1MixcbiAgICAgIDM5LFxuICAgICAgODQsXG4gICAgICA3NCxcbiAgICAgIDE3OSxcbiAgICAgIDE2OSxcbiAgICAgIDE4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzgsXG4gICAgICAxMTEsXG4gICAgICAxOTcsXG4gICAgICAyNTUsXG4gICAgICAyMTUsXG4gICAgICA1MixcbiAgICAgIDIsXG4gICAgICAxNzgsXG4gICAgICAxNjYsXG4gICAgICA1MCxcbiAgICAgIDIwOSxcbiAgICAgIDIzNSxcbiAgICAgIDE2MyxcbiAgICAgIDE0MSxcbiAgICAgIDI1MSxcbiAgICAgIDEwNCxcbiAgICAgIDExMCxcbiAgICAgIDIwMSxcbiAgICAgIDksXG4gICAgICAxNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNFY2VkdDN0NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI2NzcxNzYxNzoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuKkucKzIEJMYc2hzZxjSyBIxJNhzaHNnHJ0IFxcbuKLhlxcbuKLhlxcblxcbuKLhlxcblxcbuKLhlxcblxcbuKLhlxcblxcbuKLhlxcblxcbuKLhlxcblxcbuKLhlxcblxcbuKLhlxcblxcblxcbvCThqnwnZCMybXNnM2hc8qIIOGPh8mRzZzNoc63yojJnsmXIPCdkILJvdi5ybHJqs2czaHYuc63yZHJrVwiLFxuICAgIFwibGlkXCI6IFwiMTcxMzA5NTY4OTMzOTU5OjI3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01TaTJOMEZFSXZrbDdrR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ3pNbE9EVTRqbk9BMGVNcnFEMWFyQ01CTVFBNUcweHg5M2lkeEh0SnMzST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoY3g3bXNFVm1CMUNGQ0dRT3d2WHZjVEdiZ3BLT1Z3SmJBN0FTVjRuMjZhbUR5TlRCUG14OVI1eGphZnR5YWFic2ZSWVc1UjFPQzdYRTBxQlpwYVREQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoOUc5RndEUE10WTUrOVhOWW8xYkFOWnI2UjBja0hNVEFHZG9RZFg2Rzc3d3lzVGp1c0JUNy9NTHlnc1lHNlFUZU9GdksxQzB0Zkt1M3RXMXRRR1dDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNjc3MTc2MTc6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA1NDAwNDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHNUlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUc1SS5qc29uIjogIntcImtleURhdGFcIjpcIldGODhjRGtNZ1Q3WS8yWTQwbkVGM3o2Rm9VY09NSzZUL2RJeUgwN0h6a1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUzODY1ODYyNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMDQ3NTg3MzE5OVwifSIKfQ=="  // PUT your SESSION_ID 


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
