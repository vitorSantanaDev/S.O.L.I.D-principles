import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';

export class ShoppingCart {
  private readonly _items: Array<CartItem> = [];
  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(indexItem: number): void {
    this._items.splice(indexItem, 1);
  }

  totalPrice(): number {
    return +this._items.reduce((acc, i) => (acc += i.price), 0).toFixed(2);
  }

  totalPriceWithDiscount(): number {
    return +this.discount.calculate(this.totalPrice()).toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
    console.log('Seu carrinho de compras foi limpo!');
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }
}
