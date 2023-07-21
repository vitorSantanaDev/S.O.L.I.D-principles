import { Order } from './entities/order';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';

const shoppingCart = new ShoppingCart();
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
