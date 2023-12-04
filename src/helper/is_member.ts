import { BOT_TOKEN, CHANNEL_ID_1 } from "../config/env.vars";
import methodErrorHandler from "../decorator/method_error_handler.decorator";

const LEFT_CHANNEL = "left";

export default async function isMember(ctx: any, userId: any) {
  // add channel ids
  return [CHANNEL_ID_1].every(
    async (id) => (await ctx.telegram.getChatMember(id, userId)).status !== LEFT_CHANNEL
  );
}
