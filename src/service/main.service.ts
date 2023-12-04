import errorHandler from "../decorator/error_handler.decorator";
import _isMember from "../helper/is_member";
import { percentCalculator } from "../helper/percent_calculator.helper";

@errorHandler
export class MainService {
  constructor() {}
  profitCalculator(amountMoney: number): number {
    switch (true) {
      case amountMoney >= 4998900: {
        return percentCalculator(amountMoney, 5);
      }
      case amountMoney >= 2998900 && amountMoney < 4998800: {
        return percentCalculator(amountMoney, 6);
      }
      case amountMoney >= 1998900 && amountMoney < 2998800: {
        return percentCalculator(amountMoney, 8);
      }
      case amountMoney >= 998900 && amountMoney < 1998800: {
        return percentCalculator(amountMoney, 10);
      }
      case amountMoney >= 698900 && amountMoney < 998800: {
        return percentCalculator(amountMoney, 15);
      }
      case amountMoney >= 398900 && amountMoney < 698800: {
        return percentCalculator(amountMoney, 18);
      }
      case amountMoney >= 298900 && amountMoney < 398800: {
        return percentCalculator(amountMoney, 21);
      }
      case amountMoney >= 198900 && amountMoney < 298800: {
        return percentCalculator(amountMoney, 25);
      }
      case amountMoney >= 148900 && amountMoney < 198800: {
        return percentCalculator(amountMoney, 30);
      }
      case amountMoney >= 98800 && amountMoney < 148800: {
        return percentCalculator(amountMoney, 32);
      }
      case amountMoney >= 48899 && amountMoney < 98800: {
        return percentCalculator(amountMoney, 35);
      }
      case amountMoney < 48899: {
        return percentCalculator(amountMoney, 40);
      }
    }
    return 0;
  }
}
