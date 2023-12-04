import { ADMIN_ID_1, ADMIN_ID_2 } from "../config/env.vars";

export default function errorHandler<T extends { new (...args: any[]): {} }>(constructor: T, ...args: any) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      const methods = Object.getOwnPropertyNames(constructor.prototype);

      methods.forEach((method) => {
        // @ts-ignore
        if (method !== "constructor" && typeof this[method] === "function") {
          // @ts-ignore
          const originalMethod = this[method];
          // @ts-ignore
          this[method] = async function (...args: any[]) {
            try {
              return await originalMethod.apply(this, args);
            } catch (error: any) {
              const ctx = args[0];
              ctx.telegram
                .sendMessage(ADMIN_ID_1, `Error occurred: ${JSON.stringify(error)}`)
                .then(() => {
                  console.log(`Error reported to admin: `, error.message);
                  ctx.telegram
                    .forwardMessage(
                      ADMIN_ID_2 || ADMIN_ID_1,
                      ctx?.update?.message?.chat?.id || ctx.message?.chat?.id,
                      ctx?.update?.message?.message_id || ctx.message?.message_id
                    )
                    .then((r: any) => {
                      console.log(r);
                    })
                    .catch((e: any) => {
                      console.log(e);
                      console.log("Cant forward the message that is error occured", e.message);
                    });
                })
                .catch(() => {
                  console.log("Error: Can't report to admin", error.message);
                });
            }
          };
        }
      });
    }
  };
}
