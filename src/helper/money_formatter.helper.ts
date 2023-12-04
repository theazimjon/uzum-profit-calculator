export function moneyFormatter(amount: number) {
  return amount
    .toString()
    .split("")
    .reverse()
    .map((item, index) => ((index + 1) % 3 ? item : " " + item))
    .reverse()
    .join("");
}
