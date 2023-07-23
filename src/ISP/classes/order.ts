import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { CustomerOrder } from './interfaces/customer-protocol';
import { OrderStatus } from './interfaces/order-status';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'OPEN';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio!');
      return;
    }

    this._orderStatus = 'CLOSED';

    console.log(
      `Dados do cliente:
      name: ${this.customer.getName()}
      IDN: ${this.customer.getIDN()}
      `,
    );
    this.messaging.sendMessage(
      `Olá, ${this.customer.getName()}, seu pedido com total de R$ ${this.cart.totalPriceWithDiscount()} foi recebido!`,
    );

    this.persistency.saveOrder();
    this.cart.clear();
  }
}
