import Order from "../../domain/entity/odrder";
import OrderItem from "../../domain/entity/order_item";
import OrderRepositoryInterface from "../../domain/repository/order-repository-interface";
import OrderItemModel from "../db/sequelize/model/order-items.model";
import OrderModel from "../db/sequelize/model/order.model";

export default class OrderRepository implements OrderRepositoryInterface {
  async create(entity: Order): Promise<void> {
    await OrderModel.create(
      {
        id: entity.id,
        customer_id: entity.customerId,
        total: entity.total(),
        items: entity.items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          product_id: item.productId,
          quantity: item.quantity,
        })),
      },
      {
        include: [{ model: OrderItemModel }],
      }
    );
  }

  async update(entity: Order): Promise<void> {
    await OrderModel.update(
      {
        customer_id: entity.customerId,
        total: entity.total(),
        items: entity.items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          product_id: item.productId,
          quantity: item.quantity,
        })),
      },
      {
        where: {
          id: entity.id,
        },
      }
    );
  }

  async find(id: string): Promise<Order> {
    let orderModel;
    try {
      orderModel = await OrderModel.findOne({
        where: {
          id,
        },
        include: [OrderItemModel],
        rejectOnEmpty: true,
      });
    } catch (error) {
      throw new Error("Order not found");
    }

    const order = new Order(orderModel.id, orderModel.customer_id, []);
    orderModel.items.forEach((item) => {
      const orderItem = new OrderItem(
        item.id,
        item.name,
        item.price,
        item.product_id,
        item.quantity
      );
      order.addItem(orderItem);
    });

    return order;
  }

  async findAll(): Promise<Order[]> {
    const orderModels = await OrderModel.findAll();

    const orders = orderModels.map((orderModel) => {
      let order = new Order(orderModel.id, orderModel.customer_id, []);
      orderModel.items.forEach((item) => {
        const orderItem = new OrderItem(
          item.id,
          item.name,
          item.price,
          item.product_id,
          item.quantity
        );
        order.addItem(orderItem);
      });

      return order;
    });

    return orders;
  }
}
