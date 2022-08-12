const express = require('express');
const router = express.Router()
const { getQr } = require('../controllers/web')
const { Client,LocalAuth  } = require('whatsapp-web.js');
const { sendMessage} = require('../controllers/send.js')
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: true }
});

router.use('/qr', getQr)
router.use('/post', async (req, res)=>{
    console.log('vamos bien', req.body)
    const turn = req.body.turn
    const phone = req.body.phone
    client.sendMessage(phone, turn); 
 })

module.exports = router