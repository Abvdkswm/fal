const fs = require('fs')
const chalk = require('chalk')

// Website Api Nya Bng
global.APIs = {
	zenz: 'https://api.lolhuman.xyz',
}

// Udah Free Apikey Jadi Klo Mau Ubah Silahkan azzbot
global.APIKeys = {
	'https://api.lolhuman.xyz': 'rey2k21',
}

// Other
global.namabot = ['Rel°Bot']
global.namaowner = ['FarelGanzz']
global.owner = ['6282290452317']
global.premium = ['6282290452317']
global.packname = 'RelBot-MD'
global.author = 'WhatsApp•Bot'
global.sessionName = 'Xavior'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done✓',
    admin: 'Perintah hanya dapat di gunakan oleh admin!!',
    botAdmin: 'Perintah tidak dapat di laksanakan. Jadikan bot sebagai*admin* agar perintah dapat di laksanakan!',
    owner: 'Perintah Khusus!! Hanya dapat di gunakan Owner',
    group: 'Perintah hanya dapat di gunakan di group',
    private: 'Perintah tidak dapat di gunakan di group. silakan kirim perintah di pc (personal chat)',
    bot: 'Khusus Bot!',
    wait: 'Tolong beri waktu!. Bot sedang memproses..',
    endLimit: 'Limit anda: *0*. Limit akan di riset setiap harinya.',
}
//Kalo Ngasih Limit Jangan Dikit Lah Bng
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/xavi.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
