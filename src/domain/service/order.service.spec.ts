import Customer from "../entity/customer";
import Order from "../entity/odrder";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";

describe("Order Service Unit Tests", () => {
  it("Should place an order", () => {
    const customer = new Customer("c1", "Customer 1");
    const item1 = new OrderItem("1", "Item 1", 10, 1, "p1");

    const order = OrderService.placeOrder(customer, [item1]);

    expect(customer.rewardPoints).toBe(5);
    expect(order.total()).toBe(10);
  });

  it("Should get total of all orders", () => {
    const item1 = new OrderItem("1", "Item 1", 100, 1, "p1");
    const item2 = new OrderItem("2", "Item 2", 200, 2, "p2");

    const order = new Order("o1", "Order 1", [item1]);
    const order2 = new Order("o2", "Order 2", [item2]);

    const total = OrderService.total([order, order2]);

    expect(total).toBe(500);
  });
});
