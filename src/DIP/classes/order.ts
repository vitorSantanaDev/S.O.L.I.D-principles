import { OrderStatus } from './interfaces/order-status';
import { CustomerOrder } from './interfaces/customer-protocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'OPEN';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
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
