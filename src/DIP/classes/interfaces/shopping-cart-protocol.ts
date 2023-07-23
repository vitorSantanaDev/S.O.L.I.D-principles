import { CartItem } from './cart-item';

export interface ShoppingCartProtocol {
  items: Readonly<CartItem[]>;
  clear(): void;
  isEmpty(): boolean;
  totalPrice(): number;
  addItem(item: CartItem): void;
  totalPriceWithDiscount(): number;
  removeItem(indexItem: number): void;
}
