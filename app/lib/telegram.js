"use server"

import TelegramBot from 'node-telegram-bot-api';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function sendTelegramMessage(message) {
    const bot = new TelegramBot(TELEGRAM_BOT_TOKEN);

    try {
        await bot.sendMessage(TELEGRAM_CHAT_ID, message);
        return { success: true, message: 'Message sent successfully' };
    } catch (error) {
        console.error('Error sending Telegram message:', error);
        return { success: false, message: 'Failed to send message' };
    }
}
