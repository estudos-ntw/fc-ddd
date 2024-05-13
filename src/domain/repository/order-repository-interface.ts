import Order from "../entity/odrder";
import RepositoryInterface from "./repository-interface";

export default interface OrderRepositoryInterface
  extends RepositoryInterface<Order> {}
