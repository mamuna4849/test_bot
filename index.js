const TelegramBot = require('node-telegram-bot-api');

// Replace with your bot token
const token = '7933798213:AAEmTrEReh-Wbs1DaCdM4Er_749ME33LdYc';

// Create a bot using polling
const bot = new TelegramBot(token, { polling: true });

// Handle messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Hello, ${msg.from.first_name}! You said: "${msg.text}"`);
});
