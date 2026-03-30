import type {BaseResponse} from '../baseTypes';

/**
 * Combined query for getOrders (V0) and searchOrders (2026-01-01).
 * V0 uses PascalCase params; 2026-01-01 uses camelCase params.
 */
export interface GetOrdersQuery {
  // V0
  CreatedAfter?: string;
  CreatedBefore?: string;
  LastUpdatedAfter?: string;
  LastUpdatedBefore?: string;
  OrderStatuses?: string[];
  MarketplaceIds?: string[];
  FulfillmentChannels?: string[];
  PaymentMethods?: string[];
  BuyerEmail?: string;
  SellerOrderId?: string;
  MaxResultsPerPage?: number;
  EasyShipShipmentStatuses?: string[];
  ElectronicInvoiceStatuses?: string[];
  NextToken?: string;
  AmazonOrderIds?: string[];
  ActualFulfillmentSupplySourceId?: string;
  IsISPU?: boolean;
  StoreChainStoreId?: string;
  EarliestDeliveryDateBefore?: string;
  EarliestDeliveryDateAfter?: string;
  LatestDeliveryDateBefore?: string;
  LatestDeliveryDateAfter?: string;
  // 2026-01-01
  createdAfter?: string;
  createdBefore?: string;
  lastUpdatedAfter?: string;
  lastUpdatedBefore?: string;
  fulfillmentStatuses?: string[];
  marketplaceIds?: string[];
  fulfilledBy?: string[];
  maxResultsPerPage?: number;
  paginationToken?: string;
  includedData?: string[];
}

export interface GetOrderPath {
  orderId: string;
}

/** Query for getOrder — V0 has no query params; 2026-01-01 adds includedData */
export interface GetOrderQuery {
  includedData?: string[];
}

export interface GetOrderBuyerInfoPath {
  orderId: string;
}

export interface GetOrderAddressPath {
  orderId: string;
}

export interface GetOrderItemsPath {
  orderId: string;
}

export interface GetOrderItemsQuery {
  nextToken?: string;
}

export interface GetOrderItemsBuyerInfoPath {
  orderId: string;
}

export interface GetOrderItemsBuyerInfoQuery {
  nextToken?: string;
}

export interface GetOrderItemsBuyerInfoResponse extends BaseResponse {
  payload?: OrderItemsBuyerInfoList;
}

export interface GetOrderItemsResponse extends BaseResponse {
  payload?: OrderItemsList;
}

export interface GetOrderAddressResponse extends BaseResponse {
  payload?: OrderAddress;
}

export interface GetOrderBuyerInfoResponse extends BaseResponse {
  payload?: OrderBuyerInfo;
}

export interface GetOrderResponse extends BaseResponse {
  payload?: Order; // V0
  order?: Order;   // 2026-01-01
}

export interface GetOrdersResponse extends BaseResponse {
  payload?: OrdersList;              // V0
  orders?: Order[];                  // 2026-01-01
  pagination?: OrdersPagination;     // 2026-01-01
  lastUpdatedBefore?: string;        // 2026-01-01
  createdBefore?: string;            // 2026-01-01
}

interface OrdersPagination {
  nextToken?: string;
}

export type DeemedResellerCategory = 'IOSS' | 'UOSS';
export type FulfillmentChannel = 'MFN' | 'AFN';
export type ResponsibleParty = 'Amazon Services, Inc.';
export type AddressType = 'Residential' | 'Commercial';
export type paymentMethod = 'COD' | 'CVS' | 'Other';
export type Model = 'MarketplaceFacilitator';
export type OrderType = 'StandardOrder' | 'LongLeadTimeOrder' | 'Preorder' | 'BackOrder' | 'SourcingOnDemandOrder';
export type OrderStatus =
  | 'Pending'
  | 'Unshipped'
  | 'PartialShipped'
  | 'Shipped'
  | 'Canceled'
  | 'Unfulfillable'
  | 'InvoiceUnconfirmed'
  | 'PendingAvailability';

export interface FulfillmentInstruction {
  FulfillmentSupplySourceId?: string;
}

export interface TaxCollection {
  Model?: Model;
  ResponsibleParty?: ResponsibleParty;
}

export interface BuyerCustomizedInfoDetail {
  CustomizedURL?: string;
}

export type PromotionIdList = string[];

export interface ProductInfoDetail {
  NumberOfItems?: string;
}

export interface Money {
  CurrencyCode?: string;
  Amount?: string;
}

export interface PointsGrantedDetail {
  PointsNumber?: number;
  PointsMonetaryValue?: Money;
}

export interface OrderItemBuyerInfo {
  OrderItemId: string;
  BuyerCustomizedInfo?: BuyerCustomizedInfoDetail;
  GiftWrapPrice?: Money;
  GiftWrapTax?: Money;
  GiftMessageText?: string;
  GiftWrapLevel?: string;
}

export interface OrderItemsBuyerInfoList {
  OrderItems: OrderItemBuyerInfo[];
  NextToken?: string;
  AmazonOrderId: string;
}

export interface OrderItem {
  ASIN: string;
  SellerSKU?: string;
  OrderItemId: string;
  AssociatedItems?: AssociatedItem[];
  Title?: string;
  QuantityOrdered: number;
  QuantityShipped?: number;
  ProductInfo?: ProductInfoDetail;
  PointsGranted?: PointsGrantedDetail;
  ItemPrice?: Money;
  ShippingPrice?: Money;
  ItemTax?: Money;
  ShippingTax?: Money;
  ShippingDiscount?: Money;
  ShippingDiscountTax?: Money;
  PromotionDiscount?: Money;
  PromotionDiscountTax?: Money;
  PromotionIds?: PromotionIdList;
  CODFee?: Money;
  CODFeeDiscount?: Money;
  IsGift?: string;
  ConditionNote?: string;
  ConditionId?: string;
  ConditionSubtypeId?: string;
  ScheduledDeliveryStartDate?: string;
  ScheduledDeliveryEndDate?: string;
  PriceDesignation?: string;
  TaxCollection?: TaxCollection;
  SerialNumberRequired?: boolean;
  IsTransparency?: boolean;
  IossNumber?: string;
  StoreChainStoreId?: string;
  DeemedResellerCategory?: DeemedResellerCategory;
  BuyerInfo?: ItemBuyerInfo;
  BuyerRequestedCancel?: BuyerRequestedCancel;
  SerialNumbers?: string[];
  SubstitutionPreferences?: SubstitutionPreferences;
  Measurement?: Measurement;
  ShippingConstraints?: ShippingConstraints;
  AmazonPrograms?: AmazonPrograms;
}

export interface AssociatedItem {
  OrderId?: string;
  OrderItemId?: string;
  AssociationType?: string;
}

export interface ItemBuyerInfo {
  BuyerCustomizedInfo?: BuyerCustomizedInfoDetail;
  GiftWrapPrice?: Money;
  GiftWrapTax?: Money;
  GiftMessageText?: string;
  GiftWrapLevel?: string;
}

export interface BuyerRequestedCancel {
  IsBuyerRequestedCancel?: string;
  BuyerCancelReason?: string;
}

export interface SubstitutionPreferences {
  SubstitutionType: string;
  SubstitutionOptions?: SubstitutionOption[];
}

export interface SubstitutionOption {
  ASIN?: string;
  QuantityOrdered?: number;
  SellerSKU?: string;
  Title?: string;
  Measurement?: Measurement;
}

export interface Measurement {
  Unit: string;
  Value: number;
}

export interface ShippingConstraints {
  PalletDelivery?: string;
  SignatureConfirmation?: string;
  RecipientIdentityVerification?: string;
  RecipientAgeVerification?: string;
}

export interface AmazonPrograms {
  Programs: string[];
}

export interface OrderItemsList {
  OrderItems: OrderItem[];
  NextToken?: string;
  AmazonOrderId?: string;
}

export interface TaxClassification {
  Name?: string;
  Value?: string;
}

export interface BuyerTaxInfo {
  CompanyLegalName?: string;
  TaxingRegion?: string;
  TaxClassifications?: TaxClassification[];
}

export interface PaymentExecutionDetailItem {
  Payment: Money;
  PaymentMethod: paymentMethod;
}

export type PaymentExecutionDetailItemList = PaymentExecutionDetailItem[];

export type PaymentMethodDetailItemList = string[];

export interface Address {
  Name: string;
  CompanyName?: string;
  AddressLine1?: string;
  AddressLine2?: string;
  AddressLine3?: string;
  City?: string;
  County?: string;
  District?: string;
  StateOrRegion?: string;
  Municipality?: string;
  PostalCode?: string;
  CountryCode?: string;
  Phone?: string;
  ExtendedFields?: AddressExtendedFields;
  AddressType?: AddressType;
}

export interface AddressExtendedFields {
  StreetName?: string;
  StreetNumber?: string;
  Complement?: string;
  Neighborhood?: string;
}

export interface OrderAddress {
  AmazonOrderId: string;
  BuyerCompanyName?: string;
  ShippingAddress?: Address;
  DeliveryPreferences?: DeliveryPreferences;
}

export interface DeliveryPreferences {
  DropOffLocation?: string;
  PreferredDeliveryTime?: PreferredDeliveryTime;
  OtherAttributes?: string[];
  AddressInstructions?: string;
}

export interface PreferredDeliveryTime {
  BusinessHours?: BusinessHours[];
  ExceptionDates?: ExceptionDates[];
}

export interface BusinessHours {
  DayOfWeek?: string;
  OpenIntervals?: OpenInterval[];
}

export interface ExceptionDates {
  ExceptionDate?: string;
  IsOpen?: boolean;
  OpenIntervals?: OpenInterval[];
}

export interface OpenInterval {
  StartTime?: OpenTimeInterval;
  EndTime?: OpenTimeInterval;
}

export interface OpenTimeInterval {
  Hour?: number;
  Minute?: number;
}

export interface OrderBuyerInfo {
  AmazonOrderId: string;
  BuyerEmail?: string;
  BuyerName?: string;
  BuyerCounty?: string;
  BuyerTaxInfo?: BuyerTaxInfo;
  PurchaseOrderNumber?: string;
}

export interface Order {
  AmazonOrderId: string;
  SellerOrderId?: string;
  PurchaseDate: string;
  LastUpdateDate: string;
  OrderStatus: OrderStatus;
  FulfillmentChannel?: FulfillmentChannel;
  SalesChannel?: string;
  OrderChannel?: string;
  ShipServiceLevel?: string;
  OrderTotal?: Money;
  NumberOfItemsShipped?: number;
  NumberOfItemsUnshipped?: number;
  PaymentExecutionDetail?: PaymentExecutionDetailItemList;
  PaymentMethod?: paymentMethod;
  PaymentMethodDetails?: PaymentMethodDetailItemList;
  MarketplaceId?: string;
  ShipmentServiceLevelCategory?: string;
  EasyShipShipmentStatus?: string;
  CbaDisplayableShippingLabel?: string;
  OrderType?: OrderType;
  EarliestShipDate?: string;
  LatestShipDate?: string;
  EarliestDeliveryDate?: string;
  LatestDeliveryDate?: string;
  IsBusinessOrder?: boolean;
  IsPrime?: boolean;
  IsPremiumOrder?: boolean;
  IsGlobalExpressEnabled?: boolean;
  ReplacedOrderId?: string;
  IsReplacementOrder?: boolean;
  PromiseResponseDueDate?: string;
  IsEstimatedShipDateSet?: boolean;
  IsSoldByAB?: boolean;
  IsIBA?: boolean;
  DefaultShipFromLocationAddress?: Address;
  BuyerInvoicePreference?: string;
  BuyerTaxInformation?: BuyerTaxInformation;
  FulfillmentInstruction?: FulfillmentInstruction;
  IsISPU?: boolean;
  IsAccessPointOrder?: boolean;
  MarketplaceTaxInfo?: MarketplaceTaxInfo;
  SellerDisplayName?: string;
  ShippingAddress?: Address;
  BuyerInfo?: BuyerInfo;
  AutomatedShippingSettings?: AutomatedShippingSettings;
  HasRegulatedItems?: boolean;
  ElectronicInvoiceStatus?: string;
  // 2026-01-01 fields (camelCase)
  orderId?: string;
  orderAliases?: OrderAlias[];
  createdTime?: string;
  lastUpdatedTime?: string;
  programs?: string[];
  associatedOrders?: AssociatedOrder[];
  salesChannel?: SalesChannel;
  buyer?: Buyer;
  recipient?: Recipient;
  proceeds?: OrderProceeds;
  fulfillment?: OrderFulfillment;
  orderItems?: FulfilledOrderItem[];
  packages?: OrderPackage[];
}

export interface OrderAlias {
  aliasId: string;
  aliasType: string;
}

export interface AssociatedOrder {
  orderId?: string;
  associationType?: string;
}

export interface SalesChannel {
  channelName: string;
  marketplaceId?: string;
  marketplaceName?: string;
}

export interface Buyer {
  buyerName?: string;
  buyerEmail?: string;
  buyerCompanyName?: string;
  buyerPurchaseOrderNumber?: string;
}

export interface Recipient {
  deliveryAddress?: CustomerAddress;
  deliveryPreference?: DeliveryPreference;
}

export interface CustomerAddress {
  name?: string;
  companyName?: string;
  addressLine1?: string;
  addressLine2?: string;
  addressLine3?: string;
  city?: string;
  districtOrCounty?: string;
  stateOrRegion?: string;
  municipality?: string;
  postalCode?: string;
  countryCode?: string;
  phone?: string;
  extendedFields?: CustomerAddressExtendedFields;
  addressType?: string;
}

export interface CustomerAddressExtendedFields {
  streetName?: string;
  streetNumber?: string;
  complement?: string;
  neighborhood?: string;
}

export interface DeliveryPreference {
  dropOffLocation?: string;
  addressInstruction?: string;
  deliveryTime?: DeliveryTime;
  deliveryCapabilities?: string[];
}

export interface DeliveryTime {
  businessHours?: BusinessHour[];
  exceptionDates?: ExceptionDate[];
}

export interface BusinessHour {
  dayOfWeek?: string;
  timeWindows?: TimeWindow[];
}

export interface ExceptionDate {
  exceptionDate?: string;
  exceptionDateType?: string;
  timeWindows?: TimeWindow[];
}

export interface TimeWindow {
  startTime?: HourMinute;
  endTime?: HourMinute;
}

export interface HourMinute {
  hour?: number;
  minute?: number;
}

export interface OrderProceeds {
  grandTotal?: OrderMoney;
}

export interface OrderMoney {
  amount: string;
  currencyCode: string;
}

export interface OrderFulfillment {
  fulfillmentStatus: FulfillmentStatus2026;
  fulfilledBy?: string;
  fulfillmentServiceLevel?: string;
  shipByWindow?: DateTimeRange;
  deliverByWindow?: DateTimeRange;
}

export type FulfillmentStatus2026 =
  | 'PENDING_AVAILABILITY'
  | 'PENDING'
  | 'UNSHIPPED'
  | 'PARTIALLY_SHIPPED'
  | 'SHIPPED'
  | 'CANCELLED'
  | 'UNFULFILLABLE';

export interface DateTimeRange {
  earliestDateTime?: string;
  latestDateTime?: string;
}

export interface FulfilledOrderItem {
  orderItemId: string;
  quantityOrdered: number;
  measurement?: ItemMeasurement;
  programs?: string[];
  product?: ItemProduct;
  proceeds?: ItemProceeds;
  expense?: ItemExpense;
  promotion?: ItemPromotion;
  cancellation?: ItemCancellation;
  fulfillment?: ItemFulfillment;
}

export interface ItemMeasurement {
  unit: string;
  value: number;
}

export interface ItemProduct {
  asin?: string;
  title?: string;
  sellerSku?: string;
  condition?: ItemCondition;
  price?: ItemPrice;
  serialNumbers?: string[];
  customization?: ItemCustomization;
}

export interface ItemCondition {
  conditionType?: string;
  conditionSubtype?: string;
  conditionNote?: string;
}

export interface ItemPrice {
  unitPrice?: OrderMoney;
  priceDesignation?: string;
}

export interface ItemCustomization {
  customizedUrl?: string;
}

export interface ItemProceeds {
  proceedsTotal?: OrderMoney;
  breakdowns?: ItemProceedsBreakdown[];
}

export interface ItemProceedsBreakdown {
  type?: string;
  subtotal?: OrderMoney;
  detailedBreakdowns?: ItemProceedsDetailedBreakdown[];
}

export interface ItemProceedsDetailedBreakdown {
  subtype?: string;
  value?: OrderMoney;
}

export interface ItemExpense {
  pointsCost?: ItemPointsCost;
}

export interface ItemPointsCost {
  pointsGranted?: ItemPointsGranted;
}

export interface ItemPointsGranted {
  pointsNumber?: number;
  pointsMonetaryValue?: OrderMoney;
}

export interface ItemPromotion {
  breakdowns?: ItemPromotionBreakdown[];
}

export interface ItemPromotionBreakdown {
  promotionId?: string;
}

export interface ItemCancellation {
  cancellationRequest?: ItemCancellationRequest;
}

export interface ItemCancellationRequest {
  requester?: string;
  cancelReason?: string;
}

export interface ItemFulfillment {
  quantityFulfilled?: number;
  quantityUnfulfilled?: number;
  picking?: ItemPicking;
  packing?: ItemPacking;
  shipping?: ItemShipping;
}

export interface ItemPicking {
  substitutionPreference?: ItemSubstitutionPreference;
}

export interface ItemSubstitutionPreference {
  substitutionType: string;
  substitutionOptions?: ItemSubstitutionOption[];
}

export interface ItemSubstitutionOption {
  asin?: string;
  quantityOrdered?: number;
  sellerSku?: string;
  title?: string;
  measurement?: ItemMeasurement;
}

export interface ItemPacking {
  giftOption?: GiftOption;
}

export interface GiftOption {
  giftMessage?: string;
  giftWrapLevel?: string;
}

export interface ItemShipping {
  scheduledDeliveryWindow?: DateTimeRange;
  shippingConstraints?: ItemShippingConstraints;
  internationalShipping?: ItemInternationalShipping;
}

export interface ItemShippingConstraints {
  palletDelivery?: string;
  cashOnDelivery?: string;
  signatureConfirmation?: string;
  recipientIdentityVerification?: string;
  recipientAgeVerification?: string;
}

export interface ItemInternationalShipping {
  iossNumber?: string;
}

export interface OrderPackage {
  packageReferenceId: string;
  createdTime?: string;
  packageStatus?: PackageStatus;
  carrier?: string;
  shipTime?: string;
  shippingService?: string;
  trackingNumber?: string;
  shipFromAddress?: MerchantAddress;
  packageItems?: PackageItem[];
}

export interface PackageStatus {
  status: string;
  detailedStatus?: string;
}

export interface MerchantAddress {
  name?: string;
  addressLine1?: string;
  addressLine2?: string;
  addressLine3?: string;
  city?: string;
  districtOrCounty?: string;
  stateOrRegion?: string;
  municipality?: string;
  postalCode?: string;
  countryCode?: string;
}

export interface PackageItem {
  orderItemId: string;
  quantity: number;
  transparencyCodes?: string[];
}

export interface BuyerTaxInformation {
  BuyerLegalCompanyName?: string;
  BuyerBusinessAddress?: string;
  BuyerTaxRegistrationId?: string;
  BuyerTaxOffice?: string;
}

export interface MarketplaceTaxInfo {
  TaxClassifications?: TaxClassification[];
}

export interface BuyerInfo {
  BuyerName?: string;
  BuyerCounty?: string;
  BuyerTaxInfo?: BuyerTaxInfo;
  PurchaseOrderNumber?: string;
}

export interface AutomatedShippingSettings {
  HasAutomatedShippingSettings?: boolean;
  AutomatedCarrier?: string;
  AutomatedShipMethod?: string;
}

export interface OrdersList {
  Orders: Order[];
  NextToken?: string;
  LastUpdatedBefore?: string;
  CreatedBefore?: string;
}
