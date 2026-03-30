// Invoices API v2024-06-19

// Shared types

export type ExportStatus = 'REQUESTED' | 'PROCESSING' | 'DONE' | 'ERROR';
export type FileFormat = 'XML';
export type GovernmentInvoiceCreationStatus = 'PROCESSING' | 'SUCCESS' | 'ERROR';

export interface TransactionIdentifier {
  name?: string;
  id?: string;
}

export interface AttributeOption {
  description?: string;
  value?: string;
}

export interface InvoicesAttributes {
  invoiceStatusOptions?: AttributeOption[];
  invoiceTypeOptions?: AttributeOption[];
  transactionIdentifierNameOptions?: AttributeOption[];
  transactionTypeOptions?: AttributeOption[];
}

export interface InvoicesDocument {
  invoicesDocumentId?: string;
  /** Pre-signed ZIP URL, expires after 30 seconds. */
  invoicesDocumentUrl?: string;
}

export interface InvoiceDocument {
  /** Pre-signed URL, expires after 30 seconds. */
  invoiceDocumentUrl?: string;
}

export interface Invoice {
  date?: string;
  errorCode?: string;
  externalInvoiceId?: string;
  govResponse?: string;
  id?: string;
  invoiceType?: string;
  series?: string;
  status?: string;
  transactionIds?: TransactionIdentifier[];
  transactionType?: string;
}

export interface Export {
  errorMessage?: string;
  exportId?: string;
  generateExportFinishedAt?: string;
  generateExportStartedAt?: string;
  invoicesDocumentIds?: string[];
  status?: ExportStatus;
}

export interface InvoiceError {
  description?: string;
  errorCode?: string;
}

export interface CarrierDetailsContext {
  name?: string;
  address?: string;
  contextType?: string;
  federalTaxId?: string;
  regionCode?: string;
  regionTaxId?: string;
  vehicleLicensePlate?: string;
  vehicleRegistrationRegionCode?: string;
}

// getInvoicesAttributes

export interface GetInvoicesAttributesQuery {
  marketplaceId: string;
}

export interface GetInvoicesAttributesResponse {
  invoicesAttributes?: InvoicesAttributes;
}

// getInvoicesDocument

export interface GetInvoicesDocumentPath {
  invoicesDocumentId: string;
}

export interface GetInvoicesDocumentResponse {
  invoicesDocument?: InvoicesDocument;
}

// getInvoicesExports

export interface GetInvoicesExportsQuery {
  marketplaceId: string;
  dateStart?: string;
  dateEnd?: string;
  status?: ExportStatus;
  pageSize?: number;
  nextToken?: string;
}

export interface GetInvoicesExportsResponse {
  exports?: Export[];
  nextToken?: string;
}

// createInvoicesExport

export interface CreateInvoicesExportBody {
  marketplaceId: string;
  dateStart?: string;
  dateEnd?: string;
  invoiceType?: string;
  transactionType?: string;
  transactionIdentifier?: TransactionIdentifier;
  externalInvoiceId?: string;
  series?: string;
  statuses?: string[];
  fileFormat?: FileFormat;
}

export interface CreateInvoicesExportResponse {
  exportId?: string;
}

// getInvoicesExport

export interface GetInvoicesExportPath {
  exportId: string;
}

export interface GetInvoicesExportResponse {
  export?: Export;
}

// getInvoices

export interface GetInvoicesQuery {
  marketplaceId: string;
  transactionIdentifierName?: string;
  transactionIdentifierId?: string;
  transactionType?: string;
  invoiceType?: string;
  statuses?: string[];
  externalInvoiceId?: string;
  series?: string;
  dateStart?: string;
  dateEnd?: string;
  sortBy?: 'START_DATE_TIME';
  sortOrder?: 'ASC' | 'DESC';
  pageSize?: number;
  nextToken?: string;
}

export interface GetInvoicesResponse {
  invoices?: Invoice[];
  nextToken?: string;
}

// getInvoice

export interface GetInvoicePath {
  invoiceId: string;
}

export interface GetInvoiceQuery {
  marketplaceId: string;
}

export interface GetInvoiceResponse {
  invoice?: Invoice;
}

// createGovernmentInvoice (Brazil FBA only — added 2026-01-28)

export interface CreateGovernmentInvoiceBody {
  marketplaceId: string;
  shipmentId: string;
  transactionType: string;
  invoiceType: string;
  inboundPlanId?: string;
  contexts?: CarrierDetailsContext[];
}

export type CreateGovernmentInvoiceResponse = Record<string, never>;

// getGovernmentInvoiceStatus (Brazil FBA only — added 2026-01-28)

export interface GetGovernmentInvoiceStatusQuery {
  marketplaceId: string;
  transactionType: string;
  shipmentId: string;
  invoiceType: string;
  inboundPlanId?: string;
}

export interface GetGovernmentInvoiceStatusResponse {
  status?: GovernmentInvoiceCreationStatus;
  invoiceExternalDocumentId?: string;
  invoiceErrors?: InvoiceError[];
}

// getGovernmentInvoiceDocument (Brazil FBA only — added 2026-01-28)

export interface GetGovernmentInvoiceDocumentPath {
  shipmentId: string;
}

export interface GetGovernmentInvoiceDocumentQuery {
  marketplaceId: string;
  transactionType: string;
  invoiceType: string;
  inboundPlanId?: string;
  fileFormat?: string;
}

export interface GetGovernmentInvoiceDocumentResponse {
  invoiceDocument?: InvoiceDocument;
}
