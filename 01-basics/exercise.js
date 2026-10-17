
/**
 * Says what type a value is.
 * describeValue(45) -> "45 is a number"
 * describeValue("Pen") -> "Pen is a string"
 *
 * @param {*} value any value at all
 * @returns {string}
 */
export function describeValue(value) {
  return `${value} is a ${typeof value}`;
}

/**
 * Builds a price label.
 * priceLabel("Notebook", 45) -> "Notebook costs 45 EGP"
 *
 * @param {string} product
 * @param {number} amount in EGP
 * @returns {string}
 */
export function priceLabel(product, amount) {
  return `${product} costs ${amount} EGP`;
}

/**
 * Checks whether an amount is expensive.
 *
 * @param {number} amount
 * @returns {boolean}
 */
export function isExpensive(amount) {
  return amount > 100;
}

/**
 * Calculates shipping cost.
 *
 * @param {number} orderTotal
 * @returns {number}
 */
export function shippingCost(orderTotal) {
  if (orderTotal > 500) {
    return 0;
  }
  return 50;
}

/**
 * Describes the stock level.
 *
 * @param {number} count
 * @returns {string}
 */
export function stockLabel(count) {
  if (count === 0) {
    return "Out of stock";
  } else if (count < 10) {
    return "Low stock";
  } else {
    return "In stock";
  }
}
