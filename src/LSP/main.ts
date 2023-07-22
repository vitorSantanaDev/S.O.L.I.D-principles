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

/*
The base class should be easily overridden by its child classes.
*/

// const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 290));
shoppingCart.addItem(new Product('Caneta', 9.9));
shoppingCart.addItem(new Product('Tênis', 399.9));

console.log(shoppingCart.items);
console.log(shoppingCart.totalPrice());

console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
