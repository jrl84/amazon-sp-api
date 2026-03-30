const utils = require('../../../utils');

module.exports = {
  '2024-06-19': {
    getInvoicesAttributes: (req_params) => {
      return Object.assign(req_params, {
        method: 'GET',
        api_path: '/tax/invoices/2024-06-19/attributes',
        restore_rate: 1
      });
    },
    getInvoicesDocument: (req_params) => {
      req_params = utils.checkAndEncodeParams(req_params, {
        path: {
          invoicesDocumentId: {
            type: 'string'
          }
        }
      });
      return Object.assign(req_params, {
        method: 'GET',
        api_path: '/tax/invoices/2024-06-19/documents/' + req_params.path.invoicesDocumentId,
        restore_rate: 60
      });
    },
    getInvoicesExports: (req_params) => {
      return Object.assign(req_params, {
        method: 'GET',
        api_path: '/tax/invoices/2024-06-19/exports',
        restore_rate: 10
      });
    },
    createInvoicesExport: (req_params) => {
      return Object.assign(req_params, {
        method: 'POST',
        api_path: '/tax/invoices/2024-06-19/exports',
        restore_rate: 60
      });
    },
    getInvoicesExport: (req_params) => {
      req_params = utils.checkAndEncodeParams(req_params, {
        path: {
          exportId: {
            type: 'string'
          }
        }
      });
      return Object.assign(req_params, {
        method: 'GET',
        api_path: '/tax/invoices/2024-06-19/exports/' + req_params.path.exportId,
        restore_rate: 60
      });
    },
    createGovernmentInvoice: (req_params) => {
      return Object.assign(req_params, {
        method: 'POST',
        api_path: '/tax/invoices/2024-06-19/governmentInvoiceRequests',
        restore_rate: 60
      });
    },
    getGovernmentInvoiceStatus: (req_params) => {
      return Object.assign(req_params, {
        method: 'GET',
        api_path: '/tax/invoices/2024-06-19/governmentInvoiceRequests',
        restore_rate: 60
      });
    },
    getGovernmentInvoiceDocument: (req_params) => {
      req_params = utils.checkAndEncodeParams(req_params, {
        path: {
          shipmentId: {
            type: 'string'
          }
        }
      });
      return Object.assign(req_params, {
        method: 'GET',
        api_path: '/tax/invoices/2024-06-19/governmentInvoiceRequests/' + req_params.path.shipmentId,
        restore_rate: 60
      });
    }
  }
};
