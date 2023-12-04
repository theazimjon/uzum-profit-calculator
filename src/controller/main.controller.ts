import _isMember from "../helper/is_member";
import errorHandler from "../decorator/error_handler.decorator";
import uz from "../localization/uz";
import { moneyFormatter } from "../helper/money_formatter.helper";

@errorHandler
export default class MainController {
  constructor(private service: any) {
    this.service = service;
  }

  async start(ctx: any) {
    const userId: number = ctx?.update?.message?.from?.id || ctx.message?.from?.id;

    if (ctx.update?.message.text === "/start") {
      await ctx.replyWithHTML(uz.welcome);
    }

    ctx.replyWithHTML(uz.sendMoneyAmount);
  }

  async message(ctx: any) {
    let amount = parseInt(ctx.message?.text.split(" ").join(""));
    const userId: number = ctx?.update?.message?.from?.id || ctx.message?.from?.id;

    if (amount.toString().length < 5) {
      amount = amount * 1000;
    }
    if (isNaN(amount)) {
      return ctx.replyWithHTML(uz.wrongInput);
    }
    console.log(amount);
    const result =
      uz.profitPrefix +
      "<b>" +
      moneyFormatter(Math.round(await this.service.profitCalculator(amount))) +
      "</b>";
    console.log(result);

    return ctx.replyWithHTML(result);
  }
}
