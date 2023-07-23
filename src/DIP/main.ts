import { Order } from './classes/order';
import { Product } from './classes/product';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { ShoppingCart } from './classes/shopping-cart';
import {
  // FiftyPercentDiscount,
  // NoDiscount,
  TenPercentDiscount,
} from './classes/discount';
import {
  // EnterpriseCustomer,
  IndividualCustomer,
} from './classes/customer';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const individualCustomer = new IndividualCustomer(
  'Vitor',
  'Santana',
  '111.111.111-11',
);

// const enterpriseCustomer = new EnterpriseCustomer(
//   'vsantana LTDA',
//   '11.111.111.00001-01',
// );

const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  individualCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 290));
shoppingCart.addItem(new Product('Caneta', 9.9));
shoppingCart.addItem(new Product('Tênis', 399.9));

console.log(shoppingCart.items);
console.log(shoppingCart.totalPrice());

console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
