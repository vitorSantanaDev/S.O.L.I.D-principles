export abstract class Discount {
  protected discount = 0;
  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}

export class NoDiscount extends Discount {
  /*
  Here we are hurting the LSP, because we are overwriting
  the calculate method of the base class, causing it not to behave as expected.
  */
  calculate(price: number): number {
    return price;
  }
}
