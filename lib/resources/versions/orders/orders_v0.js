const utils = require('../../../utils');

module.exports = {
  v0: {
    getOrders: (req_params) => {
      return Object.assign(req_params, {
        method: 'GET',
        api_path: '/orders/v0/orders',
        restore_rate: 60
      });
    },
    getOrder: (req_params) => {
      req_params = utils.checkAndEncodeParams(req_params, {
        path: {
          orderId: {
            type: 'string'
          }
        }
      });
      return Object.assign(req_params, {
        method: 'GET',
        api_path: '/orders/v0/orders/' + req_params.path.orderId,
        restore_rate: 2
      });
    },
    getOrderBuyerInfo: (req_params) => {
      req_params = utils.checkAndEncodeParams(req_params, {
        path: {
          orderId: {
            type: 'string'
          }
        }
      });
      return Object.assign(req_params, {
        method: 'GET',
        api_path: '/orders/v0/orders/' + req_params.path.orderId + '/buyerInfo',
        restore_rate: 2
      });
    },
    getOrderAddress: (req_params) => {
      req_params = utils.checkAndEncodeParams(req_params, {
        path: {
          orderId: {
            type: 'string'
          }
        }
      });
      return Object.assign(req_params, {
        method: 'GET',
        api_path: '/orders/v0/orders/' + req_params.path.orderId + '/address',
        restore_rate: 2
      });
    },
    getOrderItems: (req_params) => {
      req_params = utils.checkAndEncodeParams(req_params, {
        path: {
          orderId: {
            type: 'string'
          }
        }
      });
      return Object.assign(req_params, {
        method: 'GET',
        api_path: '/orders/v0/orders/' + req_params.path.orderId + '/orderItems',
        restore_rate: 2
      });
    },
    getOrderItemsBuyerInfo: (req_params) => {
      req_params = utils.checkAndEncodeParams(req_params, {
        path: {
          orderId: {
            type: 'string'
          }
        }
      });
      return Object.assign(req_params, {
        method: 'GET',
        api_path: '/orders/v0/orders/' + req_params.path.orderId + '/orderItems/buyerInfo',
        restore_rate: 2
      });
    },
    updateShipmentStatus: (req_params) => {
      req_params = utils.checkAndEncodeParams(req_params, {
        path: {
          orderId: {
            type: 'string'
          }
        }
      });
      return Object.assign(req_params, {
        method: 'POST',
        api_path: '/orders/v0/orders/' + req_params.path.orderId + '/shipment',
        restore_rate: 0.2
      });
    },
    getOrderRegulatedInfo: (req_params) => {
      req_params = utils.checkAndEncodeParams(req_params, {
        path: {
          orderId: {
            type: 'string'
          }
        }
      });
      return Object.assign(req_params, {
        method: 'GET',
        api_path: '/orders/v0/orders/' + req_params.path.orderId + '/regulatedInfo',
        restore_rate: 2
      });
    },
    updateVerificationStatus: (req_params) => {
      req_params = utils.checkAndEncodeParams(req_params, {
        path: {
          orderId: {
            type: 'string'
          }
        }
      });
      return Object.assign(req_params, {
        method: 'PATCH',
        api_path: '/orders/v0/orders/' + req_params.path.orderId + '/regulatedInfo',
        restore_rate: 2
      });
    },
    confirmShipment: (req_params) => {
      req_params = utils.checkAndEncodeParams(req_params, {
        path: {
          orderId: {
            type: 'string'
          }
        }
      });
      return Object.assign(req_params, {
        method: 'POST',
        api_path: '/orders/v0/orders/' + req_params.path.orderId + '/shipmentConfirmation',
        restore_rate: 0.5
      });
    }
  }
};
