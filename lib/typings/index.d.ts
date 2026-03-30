import {
  GetOrderAddressPath,
  GetOrderAddressResponse,
  GetOrderBuyerInfoPath,
  GetOrderBuyerInfoResponse,
  GetOrderItemsResponse,
  GetOrderItemsBuyerInfoPath,
  GetOrderItemsBuyerInfoQuery,
  GetOrderItemsBuyerInfoResponse,
  GetOrderItemsPath,
  GetOrderItemsQuery,
  GetOrderPath,
  GetOrderQuery,
  GetOrderResponse,
  GetOrdersQuery,
  GetOrdersResponse
} from './operations/orders';

import {
  CancelFeedPath,
  CancelFeedResponse,
  CreateFeedBody,
  CreateFeedDocumentBody,
  CreateFeedDocumentResponse,
  CreateFeedResponse,
  GetFeedDocumentPath,
  GetFeedDocumentResponse,
  GetFeedPath,
  GetFeedResponse,
  GetFeedsQuery,
  GetFeedsResponse
} from './operations/feeds';
import {Config, DownloadDocument, DownloadOptions, Scope, ExchangeResponse} from './baseTypes';
import {
  ConfirmPreorderPath,
  ConfirmPreorderQuery,
  ConfirmPreorderResponse,
  ConfirmTransportPath,
  ConfirmTransportResponse,
  CreateInboundShipmentPath,
  CreateInboundShipmentBody,
  CreateInboundShipmentResponse,
  CreateInboundShipmentPlanBody,
  CreateInboundShipmentPlanResponse,
  EstimateTransportPath,
  EstimateTransportResponse,
  GetBillOfLadingPath,
  GetBillOfLadingResponse,
  GetLabelsPath,
  GetLabelsQuery,
  GetLabelsResponse,
  GetPreorderInfoPath,
  GetPreorderInfoQuery,
  GetPreorderInfoResponse,
  GetPrepInstructionsQuery,
  GetPrepInstructionsResponse,
  GetShipmentsQuery,
  GetShipmentsResponse,
  GetShipmentItemsByShipmentIdPath,
  GetShipmentItemsByShipmentIdQuery,
  GetShipmentItemsByShipmentIdResponse,
  GetShipmentItemsQuery,
  GetShipmentItemsResponse,
  GetTransportDetailsPath,
  GetTransportDetailsResponse,
  PutTransportDetailsBody,
  PutTransportDetailsPath,
  PutTransportDetailsResponse,
  UpdateInboundShipmentBody,
  UpdateInboundShipmentPath,
  UpdateInboundShipmentResponse,
  VoidTransportPath,
  VoidTransportResponse
} from './operations/fulfillmentInbound';
import {
  CreateReportBody,
  CreateReportResponse,
  GetReportDocumentPath,
  GetReportDocumentResponse,
  GetReportPath,
  GetReportResponse,
  ReportDocument
} from './operations/reports';
import {
  GetCatalogItemPath,
  GetCatalogItemQuery,
  GetCatalogItemResponse,
  ListCatalogCategoriesQuery,
  ListCatalogCategoriesResponse
} from './operations/catalogItems';
import {GetInventorySummariesQuery, GetInventorySummariesResponse} from './operations/fbaInventory';
import {GetItemEligibilityPreviewQuery, GetItemEligibilityPreviewResponse} from './operations/fbaInboundEligibility';
import {
  ListFinancialEventGroupsByGroupIdPath,
  ListFinancialEventGroupsByGroupIdQuery,
  ListFinancialEventGroupsByGroupIdResponse,
  ListFinancialEventGroupsQuery,
  ListFinancialEventGroupsResponse,
  ListFinancialEventsByOrderIdPath,
  ListFinancialEventsByOrderIdQuery,
  ListFinancialEventsByOrderIdResponse,
  ListFinancialEventsQuery,
  ListFinancialEventsResponse,
  ListTransactionsQuery,
  ListTransactionsResponse
} from './operations/finances';
import {CreateRestrictedDataTokenBody, CreateRestrictedDataTokenResponse} from './operations/tokens';
import {IReqOptions} from './IReqOptions';

import {ReportDocumentType} from './download';
import {GetItemOffersPath, GetItemOffersQuery, GetItemOffersResponse} from './operations/productPricing';
import {GetMarketplaceParticipationsResponse} from './operations/sellers';
import {
  SearchProductTypesQuery,
  SearchProductTypesResponse,
  SearchDefinitionsProductTypesQuery,
  SearchDefinitionsProductTypesResponse
} from './operations/productTypeDefinitions';

declare module 'amazon-sp-api' {
  export class SellingPartner {
    constructor(config: Config);

    refreshAccessToken(scope?: Scope): Promise<void>;

    exchange(auth_code: string): Promise<ExchangeResponse>;

    get access_token(): string;

    callAPI<TOperation extends Operation>(req_params: ReqParams<TOperation>): Promise<ObjectType<TOperation>>;

    download<T extends ReportDocumentType>(details: DownloadDocument, options?: DownloadOptions): T;

    upload<T>(
      details: {
        url: string;
      },
      feed: {
        content?: string;
        file?: string;
        contentType?: string;
      }
    ): T;

    downloadReport<T extends ReportDocumentType>(body: {
      body: CreateReportBody;
      version?: string;
      interval?: number;
      cancel_after?: number;
      download?: DownloadOptions;
    }): T;
  }

  type Operation =
    | 'getCatalogItem'
    | 'listCatalogCategories'
    | 'getItemEligibilityPreview'
    | 'getInventorySummaries'
    | 'getFeeds'
    | 'createFeed'
    | 'getFeed'
    | 'cancelFeed'
    | 'createFeedDocument'
    | 'getFeedDocument'
    | 'listFinancialEventGroups'
    | 'listFinancialEventsByGroupId'
    | 'listFinancialEventsByOrderId'
    | 'listFinancialEvents'
    | 'listTransactions'
    | 'updateInboundShipment'
    | 'createInboundShipment'
    | 'getPreorderInfo'
    | 'confirmPreorder'
    | 'getPrepInstructions'
    | 'getReport'
    | 'getReportDocument'
    | 'getOrders'
    | 'searchOrders'
    | 'getOrder'
    | 'getOrderBuyerInfo'
    | 'getOrderAddress'
    | 'getOrderItems'
    | 'getOrderItemsBuyerInfo'
    | 'getTransportDetails'
    | 'putTransportDetails'
    | 'voidTransport'
    | 'estimateTransport'
    | 'confirmTransport'
    | 'createRestrictedDataToken'
    | 'getLabels'
    | 'getBillOfLading'
    | 'getShipments'
    | 'getShipmentItemsByShipmentId'
    | 'getShipmentItems'
    | 'getItemOffers'
    | 'productPricing.getItemOffers'
    | 'getMarketplaceParticipations'
    | 'searchProductTypes'
    | 'searchDefinitionsProductTypes'
    | string;

  type ObjectType<TOperation> = TOperation extends 'getCatalogItem'
    ? GetCatalogItemResponse
    : TOperation extends 'listCatalogCategories'
      ? ListCatalogCategoriesResponse
      : TOperation extends 'getItemEligibilityPreview'
        ? GetItemEligibilityPreviewResponse
        : TOperation extends 'getInventorySummaries'
          ? GetInventorySummariesResponse
          : TOperation extends 'getFeeds'
            ? GetFeedsResponse
            : TOperation extends 'createFeed'
              ? CreateFeedResponse
              : TOperation extends 'getFeed'
                ? GetFeedResponse
                : TOperation extends 'cancelFeed'
                  ? CancelFeedResponse
                  : TOperation extends 'createFeedDocument'
                    ? CreateFeedDocumentResponse
                    : TOperation extends 'getFeedDocument'
                      ? GetFeedDocumentResponse
                      : TOperation extends 'listFinancialEventGroups'
                        ? ListFinancialEventGroupsResponse
                        : TOperation extends 'listFinancialEventsByGroupId'
                          ? ListFinancialEventGroupsByGroupIdResponse
                          : TOperation extends 'listFinancialEventsByOrderId'
                            ? ListFinancialEventsByOrderIdResponse
                            : TOperation extends 'listFinancialEvents'
                              ? ListFinancialEventsResponse
                              : TOperation extends 'listTransactions'
                                ? ListTransactionsResponse
                                : TOperation extends 'updateInboundShipment'
                                  ? UpdateInboundShipmentResponse
                                  : TOperation extends 'createInboundShipment'
                                    ? CreateInboundShipmentResponse
                                    : TOperation extends 'getPreorderInfo'
                                      ? GetPreorderInfoResponse
                                      : TOperation extends 'confirmPreorder'
                                        ? ConfirmPreorderResponse
                                        : TOperation extends 'getPrepInstructions'
                                          ? GetPrepInstructionsResponse
                                          : TOperation extends 'getReport'
                                            ? GetReportResponse
                                            : TOperation extends 'getReportDocument'
                                              ? GetReportDocumentResponse
                                              : TOperation extends 'getOrders'
                                                ? GetOrdersResponse
                                                : TOperation extends 'searchOrders'
                                                  ? GetOrdersResponse
                                                  : TOperation extends 'getOrder'
                                                  ? GetOrderResponse
                                                  : TOperation extends 'getOrderBuyerInfo'
                                                    ? GetOrderBuyerInfoResponse
                                                    : TOperation extends 'getOrderAddress'
                                                      ? GetOrderAddressResponse
                                                      : TOperation extends 'getOrderItem'
                                                        ? GetOrderItemsResponse
                                                        : TOperation extends 'getOrderItemsBuyerInfo'
                                                          ? GetOrderItemsBuyerInfoResponse
                                                          : TOperation extends 'createInboundShipmentPlan'
                                                            ? CreateInboundShipmentPlanResponse
                                                            : TOperation extends 'putTransportDetails'
                                                              ? PutTransportDetailsResponse
                                                              : TOperation extends 'getTransportDetails'
                                                                ? GetTransportDetailsResponse
                                                                : TOperation extends 'voidTransport'
                                                                  ? VoidTransportResponse
                                                                  : TOperation extends 'estimateTransport'
                                                                    ? EstimateTransportResponse
                                                                    : TOperation extends 'confirmTransport'
                                                                      ? ConfirmTransportResponse
                                                                      : TOperation extends 'createRestrictedDataToken'
                                                                        ? CreateRestrictedDataTokenResponse
                                                                        : TOperation extends 'getLabels'
                                                                          ? GetLabelsResponse
                                                                          : TOperation extends 'getBillOfLading'
                                                                            ? GetBillOfLadingResponse
                                                                            : TOperation extends 'getShipments'
                                                                              ? GetShipmentsResponse
                                                                              : TOperation extends 'getShipmentItemsByShipmentId'
                                                                                ? GetShipmentItemsByShipmentIdResponse
                                                                                : TOperation extends 'getShipmentItems'
                                                                                  ? GetShipmentItemsResponse
                                                                                  : // ProductPricing
                                                                                    TOperation extends 'getItemOffers'
                                                                                    ? GetItemOffersResponse
                                                                                    : TOperation extends 'productPricing.getItemOffers'
                                                                                      ? GetItemOffersResponse
                                                                                      : TOperation extends 'createReport'
                                                                                        ? CreateReportResponse
                                                                                        : TOperation extends 'getMarketplaceParticipations'
                                                                                          ? GetMarketplaceParticipationsResponse
                                                                                          : TOperation extends 'searchProductTypes'
                                                                                            ? SearchProductTypesResponse
                                                                                            : TOperation extends 'searchDefinitionsProductTypes'
                                                                                              ? SearchDefinitionsProductTypesResponse
                                                                                              : any;

  type QueryType<TOperation extends Operation> = TOperation extends 'getCatalogItem'
    ? GetCatalogItemQuery
    : TOperation extends 'listCatalogCategories'
      ? ListCatalogCategoriesQuery
      : TOperation extends 'getItemEligibilityPreview'
        ? GetItemEligibilityPreviewQuery
        : TOperation extends 'getInventorySummaries'
          ? GetInventorySummariesQuery
          : TOperation extends 'getFeeds'
            ? GetFeedsQuery
            : TOperation extends 'listFinancialEventGroups'
              ? ListFinancialEventGroupsQuery
              : TOperation extends 'listFinancialEventsByGroupId'
                ? ListFinancialEventGroupsByGroupIdQuery
                : TOperation extends 'listFinancialEventsByOrderId'
                  ? ListFinancialEventsByOrderIdQuery
                  : TOperation extends 'listFinancialEvents'
                    ? ListFinancialEventsQuery
                    : TOperation extends 'listTransactions'
                      ? ListTransactionsQuery
                      : TOperation extends 'getPreorderInfo'
                        ? GetPreorderInfoQuery
                        : TOperation extends 'confirmPreorder'
                          ? ConfirmPreorderQuery
                          : TOperation extends 'getPrepInstructions'
                            ? GetPrepInstructionsQuery
                            : TOperation extends 'createReport'
                              ? CreateReportResponse
                              : TOperation extends 'getOrders'
                                ? GetOrdersQuery
                                : TOperation extends 'searchOrders'
                                  ? GetOrdersQuery
                                  : TOperation extends 'getOrder'
                                    ? GetOrderQuery
                                    : TOperation extends 'getOrderItems'
                                  ? GetOrderItemsQuery
                                  : TOperation extends 'getOrderItemsBuyerInfo'
                                    ? GetOrderItemsBuyerInfoQuery
                                    : TOperation extends 'getLabels'
                                      ? GetLabelsQuery
                                      : TOperation extends 'getShipments'
                                        ? GetShipmentsQuery
                                        : TOperation extends 'getShipmentItemsByShipmentId'
                                          ? GetShipmentItemsByShipmentIdQuery
                                          : TOperation extends 'getShipmentItems'
                                            ? GetShipmentItemsQuery
                                            : // ProductPricing
                                              TOperation extends 'getItemOffers'
                                              ? GetItemOffersQuery
                                              : TOperation extends 'productPricing.getItemOffers'
                                                ? GetItemOffersQuery
                                                : TOperation extends 'searchProductTypes'
                                                  ? SearchProductTypesQuery
                                                  : TOperation extends 'searchDefinitionsProductTypes'
                                                    ? SearchDefinitionsProductTypesQuery
                                                    : any;

  type PathType<TOperation extends Operation> = TOperation extends 'getCatalogItem'
    ? GetCatalogItemPath
    : TOperation extends 'getFeed'
      ? GetFeedPath
      : TOperation extends 'cancelFeed'
        ? CancelFeedPath
        : TOperation extends 'getFeedDocument'
          ? GetFeedDocumentPath
          : TOperation extends 'listFinancialEventsByGroupId'
            ? ListFinancialEventGroupsByGroupIdPath
            : TOperation extends 'listFinancialEventsByOrderId'
              ? ListFinancialEventsByOrderIdPath
              : TOperation extends 'updateInboundShipment'
                ? UpdateInboundShipmentPath
                : TOperation extends 'createInboundShipment'
                  ? CreateInboundShipmentPath
                  : TOperation extends 'getPreorderInfo'
                    ? GetPreorderInfoPath
                    : TOperation extends 'confirmPreorder'
                      ? ConfirmPreorderPath
                      : TOperation extends 'getReport'
                        ? GetReportPath
                        : TOperation extends 'getReportDocument'
                          ? GetReportDocumentPath
                          : TOperation extends 'getOrder'
                            ? GetOrderPath
                            : TOperation extends 'getOrderAddress'
                              ? GetOrderAddressPath
                              : TOperation extends 'getOrderItems'
                                ? GetOrderItemsPath
                                : TOperation extends 'getOrderItemsBuyerInfo'
                                  ? GetOrderItemsBuyerInfoPath
                                  : TOperation extends 'getOrderBuyerInfo'
                                    ? GetOrderBuyerInfoPath
                                    : TOperation extends 'putTransportDetails'
                                      ? PutTransportDetailsPath
                                      : TOperation extends 'getTransportDetails'
                                        ? GetTransportDetailsPath
                                        : TOperation extends 'voidTransport'
                                          ? VoidTransportPath
                                          : TOperation extends 'estimateTransport'
                                            ? EstimateTransportPath
                                            : TOperation extends 'confirmTransport'
                                              ? ConfirmTransportPath
                                              : TOperation extends 'getLabels'
                                                ? GetLabelsPath
                                                : TOperation extends 'getBillOfLading'
                                                  ? GetBillOfLadingPath
                                                  : TOperation extends 'getShipmentItemsByShipmentId'
                                                    ? GetShipmentItemsByShipmentIdPath
                                                    : // ProductPricing
                                                      TOperation extends 'getItemOffers'
                                                      ? GetItemOffersPath
                                                      : TOperation extends 'productPricing.getItemOffers'
                                                        ? GetItemOffersPath
                                                        : any;

  type BodyType<TOperation extends Operation> = TOperation extends 'createFeed'
    ? CreateFeedBody
    : TOperation extends 'createFeedDocument'
      ? CreateFeedDocumentBody
      : TOperation extends 'createInboundShipmentPlan'
        ? CreateInboundShipmentPlanBody
        : TOperation extends 'updateInboundShipment'
          ? UpdateInboundShipmentBody
          : TOperation extends 'createInboundShipment'
            ? CreateInboundShipmentBody
            : TOperation extends 'createReport'
              ? CreateReportBody
              : TOperation extends 'putTransportDetails'
                ? PutTransportDetailsBody
                : TOperation extends 'createRestrictedDataToken'
                  ? CreateRestrictedDataTokenBody
                  : any;

  type ReqOptions = IReqOptions;

  export interface ReqParams<TOperation extends Operation> {
    operation: TOperation;
    endpoint?: string;
    restricted_data_token?: string;
    path?: PathType<TOperation>;
    query?: QueryType<TOperation>;
    body?: BodyType<TOperation>;
    options?: ReqOptions;
    scope?: Scope;
    api_path?: string;
    method?: HttpMethod;
  }

  type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
}
