import { BOT_TOKEN } from "./config/env.vars";
import { Telegraf } from "telegraf";
import MainController from "./controller/main.controller";
import session from "telegraf-session-local";
import { MainService } from "./service/main.service";

const mainController = new MainController(new MainService());
const bot = new Telegraf(BOT_TOKEN as string);

bot.use(new session());
bot.start(mainController.start.bind(mainController));
bot.on("message", mainController.message.bind(mainController));

// start
(async () => {
  console.log("bot launched");
  await bot.launch();
})();

// @ts-ignore
bot.catch((err, ctx) => {
  console.log(`Oops, encountered an error for ${ctx.updateType}`, err);
});

// process.once('SIGINT', () => bot.stop('SIGINT'));
// process.once('SIGTERM', () => bot.stop('SIGTERM'));
