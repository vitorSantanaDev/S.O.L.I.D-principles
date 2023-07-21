type CartItem = { name: string; price: number };
type OrderStatus = 'OPEN' | 'CLOSED';

export class ShoppingCartLegacy {
  private readonly _items: Array<CartItem> = [];
  private _orderStatus: OrderStatus = 'OPEN';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(indexItem: number): void {
    this._items.splice(indexItem, 1);
  }

  totalPrice(): number {
    return +this._items.reduce((acc, i) => (acc += i.price), 0).toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(message: string): void {
    console.log(message);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }

  clear(): void {
    this._items.length = 0;
    console.log('Seu carrinho de compras foi limpo!');
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio!');
      return;
    }

    this._orderStatus = 'CLOSED';

    this.sendMessage(
      `Seu pedido com total de R$ ${this.totalPrice()} foi recebido!`,
    );
    this.saveOrder();
    this.clear();
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }
}

const shoppingCartLegacy = new ShoppingCartLegacy();

shoppingCartLegacy.addItem({ name: 'Camiseta', price: 290 });
shoppingCartLegacy.addItem({ name: 'Caneta', price: 11.9 });
shoppingCartLegacy.addItem({ name: 'Caneca', price: 29.9 });

console.log(shoppingCartLegacy.items);
console.log(shoppingCartLegacy.totalPrice());
console.log(shoppingCartLegacy.orderStatus);

shoppingCartLegacy.checkout();

console.log(shoppingCartLegacy.orderStatus);
