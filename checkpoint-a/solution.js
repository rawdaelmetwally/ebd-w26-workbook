
import { findAllOrders, findOrderById } from "./orders-db.js";

// 1. Return every order from the database.
export async function loadOrders() {
  return await findAllOrders();
}

// 2. Return orders from Giza with cancelled status.
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Giza" && order.status === "cancelled"
  );
}

// 3. Return the highest single-item price, or 0 if empty.
export function summarize(orders) {
  if (orders.length === 0) {
    return 0;
  }

  return orders.reduce(
    (highest, order) => Math.max(highest, order.price),
    0
  );
}

// 4. Return an order description, or a message if not found.
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student} ordered ${order.quantity} x ${order.item}`;
  } catch {
    return `Could not find order ${id}`;
  }
}

// 5. Return compact JSON containing only item and price.
export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map((order) => ({
      item: order.item,
      price: order.price
    }))
  );
}
