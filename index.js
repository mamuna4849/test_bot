import TelegramBot from 'node-telegram-bot-api';

const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: false });

// This endpoint will receive updates from Telegram
export default async function handler(req, res) {
  if (req.method === 'POST') {
    await bot.processUpdate(req.body);
    res.status(200).send('OK');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Hello from webhook! You said: "${msg.text}"`);
});
