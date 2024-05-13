import Address from "./domain/entity/address";
import Customer from "./domain/entity/customer";
import Order from "./domain/entity/odrder";
import OrderItem from "./domain/entity/order_item";
import Product from "./domain/entity/product";
import CustomerRepository from "./infrastructure/repository/customer.repository";
import OrderRepository from "./infrastructure/repository/order.repository";
import ProductRepository from "./infrastructure/repository/product.repository";

const customerRepository = new CustomerRepository();
const customer = new Customer("123", "Customer 1");
const address = new Address("Street 1", 1, "Zipcode 1", "City 1");

customer.changeAddress(address);
customerRepository.create(customer);

const productRepository = new ProductRepository();
const product = new Product("123", "Product 1", 10);
productRepository.create(product);

const orderItem = new OrderItem(
  "1",
  product.name,
  product.price,
  product.id,
  2
);

const order = new Order("123", "123", [orderItem]);

const orderRepository = new OrderRepository();
orderRepository.create(order);

console.log(orderRepository.find("123"));
