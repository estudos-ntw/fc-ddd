import Order from "./odrder";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
  it("Should throw error when id is empty", () => {
    expect(() => {
      let order = new Order("", "123", []);
    }).toThrowError("Id is required");
  });

  it("Should throw error when CustomerID is empty", () => {
    expect(() => {
      let order = new Order("123", "", []);
    }).toThrowError("CustomerId is required");
  });

  it("Should throw error when Item is Zero", () => {
    expect(() => {
      let order = new Order("123", "123", []);
    }).toThrowError("Items are required");
  });

  it("Should calculate total", () => {
    const item = new OrderItem("1", "Item 1", 100, "p1", 1);
    const item2 = new OrderItem("2", "Item 2", 200, "p2", 1);

    const order = new Order("123", "123", [item, item2]);

    const total = order.total();
    expect(total).toBe(300);
  });

  it("Should throw the quantity is greater than 0", () => {
    expect(() => {
      const item = new OrderItem("1", "Item 1", 100, "p1", 0);
      const order = new Order("123", "123", [item]);
    }).toThrowError("Item qtd must be greater than 0");
  });
});
