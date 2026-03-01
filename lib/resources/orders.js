module.exports = {
  orders: {
    __versions: ['v0', '2026-01-01'],
    __operations: [
      'getOrders',
      'getOrder',
      'getOrderBuyerInfo',
      'getOrderAddress',
      'getOrderItems',
      'getOrderItemsBuyerInfo',
      'updateShipmentStatus',
      'getOrderRegulatedInfo',
      'updateVerificationStatus',
      'confirmShipment',
      "searchOrders"
    ],
    ...require('./versions/orders/orders_v0'),
    ...require('./versions/orders/orders_2026-01-01')
  }
};
