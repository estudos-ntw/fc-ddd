import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {
  it("Should throw error when id is empty", () => {
    expect(() => {
      let customer = new Customer("", "Thiago Silva");
    }).toThrowError("Id is required");
  });

  it("Should throw error when name is empty", () => {
    expect(() => {
      let customer = new Customer("123", "");
    }).toThrowError("Name is required");
  });

  it("Should when change name", () => {
    const customer = new Customer("123", "Thiago Silva");

    customer.changeName("Natara Luize");

    expect(customer.name).toBe("Natara Luize");
  });

  it("Should activate customer", () => {
    const customer = new Customer("123", "Thiago Silva");
    const address = new Address("Rua 1", 123, "Bairro 1", "12345678");
    customer.Address = address;

    customer.activate();

    expect(customer.isActive()).toBe(true);
  });

  it("Should throw error when address is undefined when you activate a customer", () => {
    expect(() => {
      const customer = new Customer("123", "Thiago Silva");

      customer.activate();

      expect(customer.isActive()).toBe(true);
    }).toThrowError("Address is mandatory to activate a customer");
  });

  it("Should deactivate customer", () => {
    const customer = new Customer("123", "Thiago Silva");

    customer.deactivate();

    expect(customer.isActive()).toBe(false);
  });

  it("Should add reward points", () => {
    const customer = new Customer("123", "Thiago Silva");
    expect(customer.rewardPoints).toBe(0);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(20);
  });
});
