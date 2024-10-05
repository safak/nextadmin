// pages/api/postToTelegram.js
import axios from 'axios';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { message } = req.body;

    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;

    if (!telegramBotToken ) {
        return res.status(500).json({ message: 'Telegram credentials are missing' });
    }

    const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    try {
        await axios.post(telegramUrl, {
            text: message,
        });

        res.status(200).json({ message: 'Message sent to Telegram' });
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
        res.status(500).json({ message: 'Failed to send message to Telegram' });
    }
}
