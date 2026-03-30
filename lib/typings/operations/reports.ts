
type BrandAnalyticsReportType =
  | 'GET_BRAND_ANALYTICS_MARKET_BASKET_REPORT'
  | 'GET_BRAND_ANALYTICS_SEARCH_TERMS_REPORT'
  | 'GET_BRAND_ANALYTICS_REPEAT_PURCHASE_REPORT'
  | 'GET_BRAND_ANALYTICS_SEARCH_CATALOG_PERFORMANCE_REPORT'
  | 'GET_BRAND_ANALYTICS_SEARCH_QUERY_PERFORMANCE_REPORT';

type VendorRetailAnalyticsReportType =
  | 'GET_VENDOR_REAL_TIME_INVENTORY_REPORT'
  | 'GET_VENDOR_REAL_TIME_TRAFFIC_REPORT'
  | 'GET_VENDOR_REAL_TIME_SALES_REPORT'
  | 'GET_VENDOR_SALES_REPORT'
  | 'GET_VENDOR_NET_PURE_PRODUCT_MARGIN_REPORT'
  | 'GET_VENDOR_TRAFFIC_REPORT'
  | 'GET_VENDOR_FORECASTING_REPORT'
  | 'GET_VENDOR_INVENTORY_REPORT';

type SellerRetailAnalyticsReportType = 'GET_SALES_AND_TRAFFIC_REPORT';

type AnalyticsReportType = BrandAnalyticsReportType | VendorRetailAnalyticsReportType | SellerRetailAnalyticsReportType;

type InventoryReportType =
  | 'GET_FLAT_FILE_OPEN_LISTINGS_DATA'
  | 'GET_MERCHANT_LISTINGS_ALL_DATA'
  | 'GET_MERCHANT_LISTINGS_DATA'
  | 'GET_MERCHANT_LISTINGS_INACTIVE_DATA'
  | 'GET_MERCHANT_LISTINGS_DATA_BACK_COMPAT'
  | 'GET_MERCHANT_LISTINGS_DATA_LITE'
  | 'GET_MERCHANT_LISTINGS_DATA_LITER'
  | 'GET_MERCHANT_CANCELLED_LISTINGS_DATA'
  | 'GET_MERCHANTS_LISTINGS_FYP_REPORT'
  | 'GET_PAN_EU_OFFER_STATUS'
  | 'GET_MFN_PANEU_OFFER_STATUS'
  | 'GET_REFERRAL_FEE_PREVIEW_REPORT';

type OrdersReportType =
  | 'GET_FLAT_FILE_ACTIONABLE_ORDER_DATA_SHIPPING'
  | 'GET_ORDER_REPORT_DATA_INVOICING'
  | 'GET_ORDER_REPORT_DATA_TAX'
  | 'GET_ORDER_REPORT_DATA_SHIPPING'
  | 'GET_FLAT_FILE_ORDER_REPORT_DATA_INVOICING'
  | 'GET_FLAT_FILE_ORDER_REPORT_DATA_SHIPPING'
  | 'GET_FLAT_FILE_ORDER_REPORT_DATA_TAX';

type OrderTrackingReportType =
  | 'GET_FLAT_FILE_ALL_ORDERS_DATA_BY_LAST_UPDATE_GENERAL'
  | 'GET_FLAT_FILE_ALL_ORDERS_DATA_BY_ORDER_DATE_GENERAL'
  | 'GET_FLAT_FILE_ARCHIVED_ORDERS_DATA_BY_ORDER_DATE'
  | 'GET_XML_ALL_ORDERS_DATA_BY_LAST_UPDATE_GENERAL'
  | 'GET_XML_ALL_ORDERS_DATA_BY_ORDER_DATE_GENERAL';

type PendingOrderReturnType =
  | 'GET_FLAT_FILE_PENDING_ORDERS_DATA'
  | 'GET_PENDING_ORDERS_DATA'
  | 'GET_CONVERGED_FLAT_FILE_PENDING_ORDERS_DATA';

type ReturnsReportType =
  | 'GET_XML_RETURNS_DATA_BY_RETURN_DATE'
  | 'GET_FLAT_FILE_RETURNS_DATA_BY_RETURN_DATE'
  | 'GET_XML_MFN_PRIME_RETURNS_REPORT'
  | 'GET_CSV_MFN_PRIME_RETURNS_REPORT'
  | 'GET_XML_MFN_SKU_RETURN_ATTRIBUTES_REPORT'
  | 'GET_FLAT_FILE_MFN_SKU_RETURN_ATTRIBUTES_REPORT';

type PerformanceReportType =
  | 'GET_SELLER_FEEDBACK_DATA'
  | 'GET_V1_SELLER_PERFORMANCE_REPORT'
  | 'GET_V2_SELLER_PERFORMANCE_REPORT'
  | 'GET_PROMOTION_PERFORMANCE_REPORT'
  | 'GET_COUPON_PERFORMANCE_REPORT';

type SettlementReportType =
  | 'GET_V2_SETTLEMENT_REPORT_DATA_FLAT_FILE'
  | 'GET_V2_SETTLEMENT_REPORT_DATA_XML'
  | 'GET_V2_SETTLEMENT_REPORT_DATA_FLAT_FILE_V2';

type OrderReportType =
  | OrdersReportType
  | OrderTrackingReportType
  | PendingOrderReturnType
  | ReturnsReportType
  | PerformanceReportType
  | SettlementReportType;

type FBASalesReportsType =
  | 'GET_AMAZON_FULFILLED_SHIPMENTS_DATA_GENERAL'
  | 'GET_AMAZON_FULFILLED_SHIPMENTS_DATA_INVOICING'
  | 'GET_AMAZON_FULFILLED_SHIPMENTS_DATA_TAX'
  | 'GET_FLAT_FILE_ALL_ORDERS_DATA_BY_LAST_UPDATE_GENERAL'
  | 'GET_FLAT_FILE_ALL_ORDERS_DATA_BY_ORDER_DATE_GENERAL'
  | 'GET_XML_ALL_ORDERS_DATA_BY_LAST_UPDATE_GENERAL'
  | 'GET_XML_ALL_ORDERS_DATA_BY_ORDER_DATE_GENERAL'
  | 'GET_FBA_FULFILLMENT_CUSTOMER_SHIPMENT_SALES_DATA'
  | 'GET_FBA_FULFILLMENT_CUSTOMER_SHIPMENT_PROMOTION_DATA'
  | 'GET_FBA_FULFILLMENT_CUSTOMER_TAXES_DATA'
  | 'GET_REMOTE_FULFILLMENT_ELIGIBILITY';

type FBAInventoryReportsType =
  | 'GET_AFN_INVENTORY_DATA'
  | 'GET_AFN_INVENTORY_DATA_BY_COUNTRY'
  | 'GET_LEDGER_SUMMARY_VIEW_DATA'
  | 'GET_LEDGER_DETAIL_VIEW_DATA'
  | 'GET_RESERVED_INVENTORY_DATA'
  | 'GET_FBA_MYI_UNSUPPRESSED_INVENTORY_DATA'
  | 'GET_FBA_MYI_ALL_INVENTORY_DATA'
  | 'GET_RESTOCK_INVENTORY_RECOMMENDATIONS_REPORT'
  | 'GET_FBA_FULFILLMENT_INBOUND_NONCOMPLIANCE_DATA'
  | 'GET_STRANDED_INVENTORY_UI_DATA'
  | 'GET_STRANDED_INVENTORY_LOADER_DATA'
  | 'GET_FBA_STORAGE_FEE_CHARGES_DATA'
  | 'GET_PRODUCT_EXCHANGE_DATA'
  | 'GET_FBA_INVENTORY_PLANNING_DATA'
  | 'GET_FBA_OVERAGE_FEE_CHARGES_DATA';

type FBAPaymentsReportsType =
  | 'GET_FBA_ESTIMATED_FBA_FEES_TXT_DATA'
  | 'GET_FBA_REIMBURSEMENTS_DATA'
  | 'GET_FBA_FULFILLMENT_LONGTERM_STORAGE_FEE_CHARGES_DATA';

type FBAConcessionsReportsType =
  | 'GET_FBA_FULFILLMENT_CUSTOMER_RETURNS_DATA'
  | 'GET_FBA_FULFILLMENT_CUSTOMER_SHIPMENT_REPLACEMENT_DATA';

type FBARemovalsReportsType =
  | 'GET_FBA_RECOMMENDED_REMOVAL_DATA'
  | 'GET_FBA_FULFILLMENT_REMOVAL_ORDER_DETAIL_DATA'
  | 'GET_FBA_FULFILLMENT_REMOVAL_SHIPMENT_DETAIL_DATA';

type FBAReportType =
  | FBASalesReportsType
  | FBAInventoryReportsType
  | FBAPaymentsReportsType
  | FBAConcessionsReportsType
  | FBARemovalsReportsType;

type TaxReportType =
  | 'GST_MTR_STOCK_TRANSFER_REPORT'
  | 'GST_MTR_B2B'
  | 'GST_MTR_B2C'
  | 'GET_FLAT_FILE_SALES_TAX_DATA'
  | 'SC_VAT_TAX_REPORT'
  | 'GET_VAT_TRANSACTION_DATA'
  | 'GET_GST_MTR_B2B_CUSTOM'
  | 'GET_GST_MTR_B2C_CUSTOM'
  | 'GET_GST_STR_ADHOC';

type InvoiceDataReportType = 'GET_FLAT_FILE_VAT_INVOICE_DATA_REPORT' | 'GET_XML_VAT_INVOICE_DATA_REPORT';

type BrowseTreeReportType = 'GET_XML_BROWSE_TREE_DATA';

type EasyShipReportType = 'GET_EASYSHIP_DOCUMENTS' | 'GET_EASYSHIP_PICKEDUP' | 'GET_EASYSHIP_WAITING_FOR_PICKUP';

type AmazonBusinessReportType = 'RFQD_BULK_DOWNLOAD' | 'FEE_DISCOUNTS_REPORT';

type B2BProductOpportunitiesReportType =
  | 'GET_B2B_PRODUCT_OPPORTUNITIES_RECOMMENDED_FOR_YOU'
  | 'GET_B2B_PRODUCT_OPPORTUNITIES_NOT_YET_ON_AMAZON';

type RegulatoryComplianceReportType =
  | 'END_USER_DATA_REPORT'
  | 'FBA_BULK_INVOICE'
  | 'MARKETPLACE_ASIN_PAGE_VIEW_METRICS'
  | 'GET_EPR_MONTHLY_REPORTS'
  | 'GET_EPR_QUARTERLY_REPORTS'
  | 'GET_EPR_ANNUAL_REPORTS';

export type ProcessingStatus = 'IN_QUEUE' | 'IN_PROGRESS' | 'DONE' | 'CANCELLED' | 'FATAL';

export type ReportType =
  | AnalyticsReportType
  | InventoryReportType
  | OrderReportType
  | FBAReportType
  | TaxReportType
  | InvoiceDataReportType
  | BrowseTreeReportType
  | EasyShipReportType
  | AmazonBusinessReportType
  | B2BProductOpportunitiesReportType
  | RegulatoryComplianceReportType;

export interface CreateReportResponse {
  reportId: string;
}

export interface GetReportsQuery {
  reportTypes: ReportType[];
  processingStatuses?: ProcessingStatus[];
  marketplaceIds?: string[];
  pageSize?: number;
  createdSince?: string;
  createdUntil?: string;
  nextToken?: string;
}

export type GetReportsResponse = Report[];

export interface GetReportPath {
  reportId: string;
}

export type GetReportResponse = Report;

export interface GetReportDocumentPath {
  reportDocumentId: string;
}

export type GetReportDocumentResponse = ReportDocument;

export interface CreateReportBody {
  reportOptions?: ReportOptions;
  reportType: ReportType;
  dataStartTime?: string;
  dataEndTime?: string;
  marketplaceIds: string[];
}

interface ReportOptions {
  [key: string]: string;
}

export interface Report {
  marketplaceIds?: string[];
  reportId: string;
  reportType: ReportType;
  dataStartTime?: string;
  dataEndTime?: string;
  reportScheduleId?: string;
  createdTime: string;
  processingStatus: ProcessingStatus;
  processingStartTime?: string;
  processingEndTime?: string;
  reportDocumentId?: string;
}

export interface ReportDocument {
  reportDocumentId: string;
  url: string;
  compressionAlgorithm: 'GZIP';
}
