const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
const cors = require("cors");

// ❗ TOKENNI O'ZING QO'YASAN
const bot = new TelegramBot("8551941256:AAEzhM0cPSLneGr8ZHIs3n0bIgrSoD4PB4M", {
  polling: true,
});

// Web App URL
const WEB_APP_URL = "https://effervescent-ptarmigan-99.convex.app/";

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Assalomu alaykum, Xush Kelibsiz! 👋", {
    reply_markup: {
      keyboard: [
        [
          {
            text: "Ochish",
            web_app: { url: WEB_APP_URL },
          },
        ],
      ],
      resize_keyboard: true,
    },
  });
});

// EXPRESS SERVER (Web App uchun)
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Telegram WebApp ishlayapti!");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server ${PORT} portda ishladi`));

