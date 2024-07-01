const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917067575472";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "917067575472,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_27_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM2LFxuICAgICAgICA3NixcbiAgICAgICAgMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3NixcbiAgICAgICAgOTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDkwLFxuICAgICAgICA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgODksXG4gICAgICAgIDI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDg1LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzksXG4gICAgICAgIDU2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDM1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDM5LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDksXG4gICAgICAgIDg2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDU0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA4LFxuICAgICAgICA4MyxcbiAgICAgICAgOTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI3LFxuICAgICAgICA2MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM4LFxuICAgICAgICA1MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNixcbiAgICAgICAgNzAsXG4gICAgICAgIDk2LFxuICAgICAgICAyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDU1LFxuICAgICAgICA5MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAzLFxuICAgICAgICAxMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYUVQSnNrS1FTZHdFREJqNE5mSmVKRFlMYXpQQ1dDV3M2cE1OcDJNM1doYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTcwNjc1NzU0NzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI1QTkwRDc0MTIzRkVFM0FBNDIyNTgzRDg3MzZEQUU4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTgxODgyM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzA2NzU3NTQ3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzlERDRBODAzRENBMTRBNUE2ODY2OTZGQTEyODZDNDNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5ODE4ODI1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlkteER3Y0plVGJDSDhQUlBxcUhoUVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTdhMzgwNzEtMDZmMC00N2M0LTk1NmEtMzVkMzRmMjYwM2VlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MCxcbiAgICAgIDI1MSxcbiAgICAgIDE2MixcbiAgICAgIDg1LFxuICAgICAgMjMzLFxuICAgICAgMTkwLFxuICAgICAgNzIsXG4gICAgICA4NSxcbiAgICAgIDU0LFxuICAgICAgMjcsXG4gICAgICAxNzYsXG4gICAgICAyMTMsXG4gICAgICAyMzcsXG4gICAgICA0MSxcbiAgICAgIDc1LFxuICAgICAgNzgsXG4gICAgICAyMTksXG4gICAgICA4NSxcbiAgICAgIDY0LFxuICAgICAgMjEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDI4LFxuICAgICAgMTE2LFxuICAgICAgMTQ1LFxuICAgICAgNTIsXG4gICAgICA3NyxcbiAgICAgIDYwLFxuICAgICAgNTIsXG4gICAgICA5OCxcbiAgICAgIDEzOCxcbiAgICAgIDYxLFxuICAgICAgMTIzLFxuICAgICAgMjUxLFxuICAgICAgODMsXG4gICAgICAxOTcsXG4gICAgICAxNjUsXG4gICAgICAxMjMsXG4gICAgICAxNyxcbiAgICAgIDIwOSxcbiAgICAgIDIxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1MUxBRVlHTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE3MDY3NTc1NDcyOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzODgwOTY3Njg0OTE3MzoxMUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn5mCXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVg5eGI0R0VNRzBpYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5cFRMOGI4VmxUQW90cUlPaThTMTdJcmJFbkh4aERON3d4S1pJUTcvcmpvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNEYWxBbnRtQUpxUnRpbWxLamhCRVJ0QS80bTZNQTQ5L1d2STlqd2h3VXNyTEZocWxFcDV4b0NSb1gzc00zM3FYaU9uOFJUTWlyZ3AySE1SU2NLOEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIndwZjU1WWVMSUswaVFHM0xhUVlHYzNZelpnUnNidFdsMmpOZGdBeTNacUFBT1U2aW1MV25UUEhZazlZU25ZRmJZMDF1TUNBSStGSjVleDR5ZWFQY2hRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzA2NzU3NTQ3MjoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODE4ODIwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSDN5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIM3kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBREE2QjQ1MmxER3lzeldRekFRd0M3TzJ3QmFIWjU0VmR5R01sN0FLQmdJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NDE3ODI3MjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTgxODgyMTg5NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
