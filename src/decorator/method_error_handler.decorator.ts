import { ADMIN_ID_1 } from "../config/env.vars";

export default function methodErrorHandler(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = async function (...args: any[]) {
    try {
      return await originalMethod.apply(this, args);
    } catch (error: any) {
      const ctx = args[0];
      ctx.telegram
        .sendMessage(ADMIN_ID_1, `Error occurred: ${error.message}`)
        .then(() => {
          console.log("Error reported to admin:", error.message);
        })
        .catch(() => {
          console.log("Error: Can't report to admin");
        });
    }
  };
  return descriptor;
}
