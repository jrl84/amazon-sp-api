
export interface CreateInboundShipmentPlanBody {
  ShipFromAddress: Address;
  LabelPrepPreference: LabelPrepPreference;
  ShipToCountryCode?: string;
  ShipToCountrySubdivisionCode?: string;
  InboundShipmentPlanRequestItems: InboundShipmentPlanRequestItem[];
}

export interface CreateInboundShipmentPlanResponse {
  InboundShipmentPlans: InboundShipmentPlan[];
}

interface BasePath {
  shipmentId: string;
}

export interface UpdateInboundShipmentPath extends BasePath {}

export interface UpdateInboundShipmentResponse {
  ShipmentId: string;
}

export interface CreateInboundShipmentPath extends BasePath {}

export type CreateInboundShipmentResponse = UpdateInboundShipmentResponse;

export interface GetPreorderInfoPath extends BasePath {}

export interface GetPreorderInfoQuery {
  MarketplaceId: string;
}

export type GetPreorderInfoResponse = GetPreorderInfoResult;

export interface ConfirmPreorderPath {
  shipmentId: string;
}

export interface ConfirmPreorderQuery {
  NeedByDate: string;
  MarketplaceId: string;
}

export type ConfirmPreorderResponse = ConfirmPreorderResult;

export interface GetPrepInstructionsQuery {
  ShipToCountryCode: string;
  SellerSKUList?: string[];
  ASINList?: string[];
}

export type GetPrepInstructionsResponse = GetPrepInstructionsResult;

interface GetPrepInstructionsResult {
  SKUPrepInstructionsList?: SKUPrepInstructions[];
  InvalidSKUList?: InvalidSKU[];
  ASINPrepInstructionsList?: ASINPrepInstructions[];
  InvalidASINList?: InvalidASIN[];
}

interface InvalidASIN {
  ASIN?: string;
  ErrorReason?: ErrorReason;
}

interface SKUPrepInstructions {
  SellerSKU?: string;
  ASIN?: string;
  BarcodeInstruction?: BarcodeInstruction;
  PrepGuidance?: PrepGuidance;
  PrepInstructionList?: PrepInstruction[];
  AmazonPrepFeesDetailsList?: AmazonPrepFeesDetails[];
}

interface AmazonPrepFeesDetails {
  PrepInstruction?: PrepInstruction;
  FeePerUnit?: Amount;
}

interface ASINPrepInstructions {
  ASIN?: string;
  BarcodeInstruction?: BarcodeInstruction;
  PrepGuidance?: PrepGuidance;
  PrepInstructionList?: PrepInstruction[];
}

type BarcodeInstruction = 'RequiresFNSKULabel' | 'CanUseOriginalBarcode' | 'MustProvideSellerSKU';
type PrepGuidance = 'ConsultHelpDocuments' | 'NoAdditionalPrepRequired' | 'SeePrepInstructionsList';

type SellerFreightClass =
  | '50'
  | '55'
  | '60'
  | '65'
  | '77.5'
  | '85'
  | '92.5'
  | '100'
  | '110'
  | '125'
  | '150'
  | '175'
  | '200'
  | '250'
  | '300'
  | '400'
  | '500';

interface ConfirmPreorderResult {
  ConfirmedNeedByDate?: string;
  ConfirmedFulfillableDate?: string;
}

interface GetPreorderInfoResult {
  ShipmentContainsPreorderableItems?: boolean;
  ShipmentConfirmedForPreorder?: boolean;
  NeedByDate?: string;
  ConfirmedFulfillableDate?: string;
}

type ErrorReason = 'DoesNotExist' | 'InvalidASIN';

interface InvalidSKU {
  SellerSKU?: string;
  ErrorReason?: ErrorReason;
}

interface InvalidASIN {
  ASIN?: string;
  ErrorReason?: ErrorReason;
}

interface Address {
  Name: string;
  AddressLine1: string;
  AddressLine2?: string;
  DistrictOrCounty?: string;
  City: string;
  StateOrProvinceCode: string;
  CountryCode: string;
  PostalCode: string;
}

type LabelPrepPreference = 'SELLER_LABEL' | 'AMAZON_LABEL_ONLY' | 'AMAZON_LABEL_PREFERRED';

interface InboundShipmentPlanRequestItem {
  SellerSKU: string;
  ASIN: string;
  Condition: Condition;
  Quantity: number;
  QuantityInCase: number;
  PrepDetailsList: PrepDetails[];
}

type Condition =
  | 'NewItem'
  | 'NewWithWarranty'
  | 'NewOEM'
  | 'NewOpenBox'
  | 'UsedLikeNew'
  | 'UsedVeryGood'
  | 'UsedGood'
  | 'UsedAcceptable'
  | 'UsedPoor'
  | 'UsedRefurbished'
  | 'CollectibleLikeNew'
  | 'CollectibleVeryGood'
  | 'CollectibleGood'
  | 'CollectibleAcceptable'
  | 'CollectiblePoor'
  | 'RefurbishedWithWarranty'
  | 'Refurbished'
  | 'Club';

interface PrepDetails {
  PrepInstruction: PrepInstruction;
  PrepOwner: PrepOwner;
}

type PrepInstruction = 'Polybagging' | 'BubbleWrapping' | 'Taping' | 'BlackShrinkWrapping' | 'Labeling' | 'HangGarment';

type PrepOwner = 'AMAZON' | 'SELLER';

interface InboundShipmentPlan {
  ShipmentId: string;
  DestinationFulfillmentCenterId: string;
  ShipToAddress: Address;
  LabelPrepType: LabelPrepType;
  Items: InboundShipmentPlanItem[];
  EstimatedBoxContentsFee?: BoxContentsFeeDetails;
}

type LabelPrepType = 'NO_LABEL' | 'SELER_LABEL' | 'AMAZON_LABEL';

interface InboundShipmentPlanItem {
  SellerSKU: string;
  FulfillmentNetworkSKU: string;
  Quantity: number;
  PrepDetailsList?: PrepDetails[];
}

interface BoxContentsFeeDetails {
  TotalUnits?: number;
  FeePerUnit?: Amount;
  TotalFee?: Amount;
}

interface Amount {
  CurrencyCode: 'USD' | 'GBP';
  Value: number;
}

export interface CreateInboundShipmentBody {
  InboundShipmentHeader: InboundShipmentHeader;
  InboundShipmentItems: InboundShipmentItem[];
  MarketplaceId: string;
}

export interface UpdateInboundShipmentBody {
  InboundShipmentHeader: InboundShipmentHeader;
  InboundShipmentItems: InboundShipmentItem[];
  MarketplaceId: string;
}

interface InboundShipmentHeader {
  ShipmentName: string;
  ShipFromAddress: Address;
  DestinationFulfillmentCenterId: string;
  AreCasesRequired?: boolean;
  ShipmentStatus: ShipmentStatus;
  LabelPrepPreference: LabelPrepPreference;
  IntendedBoxContentsSource?: IntendedBoxContentsSource;
}

type ShipmentStatus =
  | 'WORKING'
  | 'SHIPPED'
  | 'RECEIVING'
  | 'CANCELLED'
  | 'DELETED'
  | 'CLOSED'
  | 'ERROR'
  | 'IN_TRANSIT'
  | 'DELIVERED'
  | 'CHECKED_IN';

type IntendedBoxContentsSource = 'NONE' | 'FEED' | '2D_BARCODE';

interface InboundShipmentItem {
  ShipmentId?: string;
  SellerSKU: string;
  FulfillmentNetworkSKU?: string;
  QuantityShipped?: number;
  QuantityReceived?: number;
  QuantityInCase?: number;
  ReleaseDate?: string;
  PrepDetailsList?: PrepDetails[];
}

export interface PutTransportDetailsPath extends BasePath {}

export interface PutTransportDetailsBody {
  IsPartnered: boolean;
  ShipmentType: ShipmentType;
  TransportDetails: TransportDetailInput;
}

type ShipmentType = 'SP' | 'LTL';

interface TransportDetailInput {
  PartneredSmallParcelData?: PartneredSmallParcelDataInput;
  NonPartneredSmallParcelData?: NonPartneredSmallParcelDataInput;
  PartneredLtlData?: PartneredLtlDataInput;
  NonPartneredLtlData?: NonPartneredLtlDataInput;
}

interface PartneredSmallParcelDataInput {
  PackageList?: PartneredSmallParcelPackageInput[];
  CarrierName?: string;
}

interface PartneredSmallParcelPackageInput {
  Dimensions: Dimensions;
  Weight: Weight;
}

interface NonPartneredSmallParcelDataInput {
  CarrierName: string;
  PackageList: NonPartneredSmallParcelPackageInput[];
}

interface NonPartneredSmallParcelPackageInput {
  TrackingId: string;
}

interface PartneredLtlDataInput {
  Contact?: Contact;
  BoxCount?: number;
  SellerFreightClass?: SellerFreightClass;
  FreightReadyDate?: string;
  PalletList?: Pallet[];
  TotalWeight?: Weight;
  SellerDeclaredValue: Amount;
}

interface NonPartneredLtlDataInput {
  CarrierName: string;
  ProNumber: string;
}

interface Dimensions {
  Length: number;
  Width: number;
  Height: number;
  Unit: UnitOfMeasurement;
}

type UnitOfMeasurement = 'inches' | 'centimeters';

interface Weight {
  Value: number;
  Unit: UnitOfWeight;
}

type UnitOfWeight = 'pounds' | 'kilograms';

interface Contact {
  Name: string;
  Phone: string;
  Email: string;
  Fax?: string;
}

interface Pallet {
  Dimensions: Dimensions;
  Weight?: Weight;
  IsStacked: boolean;
}

export type PutTransportDetailsResponse = CommonTransportResult;

interface CommonTransportResult {
  TransportResult?: TransportResult;
}

interface TransportResult {
  TransportStatus: TransportStatus;
  ErrorCode?: string;
  ErrorDescription?: string;
}

type TransportStatus =
  | 'WORKING'
  | 'ESTIMATING'
  | 'ESTIMATED'
  | 'ERROR_ON_ESTIMATING'
  | 'CONFIRMING'
  | 'CONFIRMED'
  | 'ERROR_ON_CONFIRMING'
  | 'VOIDING'
  | 'VOIDED'
  | 'ERROR_IN_VOIDING'
  | 'ERROR';

export interface GetTransportDetailsPath extends BasePath {}

export type GetTransportDetailsResponse = GetTransportDetailsResult;

interface GetTransportDetailsResult {
  TransportContent?: TransportContent;
}

interface TransportContent {
  TransportHeader: TransportHeader;
  TransportDetails: TransportDetailOutput;
  TransportResult: TransportResult;
}

interface TransportHeader {
  SellerId: string;
  ShipmentId: string;
  IsPartnered: string;
  ShipmentType: ShipmentType;
}

interface TransportDetailOutput {
  PartneredSmallParcelData?: PartneredSmallParcelDataOutput;
  NonPartneredSmallParcelData?: NonPartneredSmallParcelDataOutput;
  PartneredLtlData?: PartneredLtlDataOutput;
  NonPartneredLtlData?: NonPartneredLtlDataOutput;
}

interface PartneredSmallParcelDataOutput {
  PackageList: PartneredSmallParcelPackageOutput[];
  PartneredEstimate?: PartneredEstimate;
}

interface PartneredSmallParcelPackageOutput {
  Dimensions: Dimensions;
  Weight: Weight;
  CarrierName: string;
  TrackingId: string;
  PackageStatus: PackageStatus;
}

interface PartneredEstimate {
  Amount: Amount;
  ConfirmDeadline?: string;
  VoidDeadline?: string;
}

interface NonPartneredSmallParcelDataOutput {
  PackageList: NonPartneredSmallParcelPackageOutput[];
}

interface NonPartneredSmallParcelPackageOutput {
  CarrierName: string;
  TrackingId: string;
  PackageStatus: PackageStatus;
}

interface PartneredLtlDataOutput {
  Contact: Contact;
  BoxCount: number;
  SellerFreightClass?: SellerFreightClass;
  FreightReadyDate: string;
  PalletList: Pallet[];
  TotalWeight: Weight;
  SellerDeclaredValue?: Amount;
  AmazonCalculatedValue?: Amount;
  PreviewPickupDate: string;
  PreviewDeliveryDate: string;
  PreviewFreightClass: SellerFreightClass;
  AmazonReferenceId: string;
  IsBillOfLadingAvailable: boolean;
  PartneredEstimate?: PartneredEstimate;
  CarrierName: string;
}

interface NonPartneredLtlDataOutput {
  CarrierName: string;
  ProNumber: string;
}

type PackageStatus = 'SHIPPED' | 'IN_TRANSIT' | 'DELIVERED' | 'CHECKED_IN' | 'RECEIVING' | 'CLOSED' | 'DELETED';

export interface VoidTransportPath extends BasePath {}

export type VoidTransportResponse = CommonTransportResult;

export interface EstimateTransportPath extends BasePath {}

export type EstimateTransportResponse = CommonTransportResult;

export interface ConfirmTransportPath extends BasePath {}

export type ConfirmTransportResponse = CommonTransportResult;

export interface GetLabelsPath extends BasePath {}

export interface GetLabelsQuery {
  PageType: PageType;
  LabelType: LabelType;
  NumberOfPackages?: number;
  PackageLabelsToPrint?: string[];
  NumberOfPallets?: number;
  PageSize?: number;
  PageStartIndex?: number;
}

type PageType =
  | 'PackageLabel_Letter_2'
  | 'PackageLabel_Letter_4'
  | 'PackageLabel_Letter_6'
  | 'PackageLabel_Letter_6_CarrierLeft'
  | 'PackageLabel_A4_2'
  | 'PackageLabel_A4_4'
  | 'PackageLabel_Plain_Paper'
  | 'PackageLabel_Plain_Paper_CarrierBottom'
  | 'PackageLabel_Thermal'
  | 'PackageLabel_Thermal_Unified'
  | 'PackageLabel_Thermal_NonPCP'
  | 'PackageLabel_Thermal_No_Carrier_Rotation';

type LabelType = 'BARCODE_2D' | 'UNIQUE' | 'PALLET';

export type GetLabelsResponse = LabelDownloadURL;

interface LabelDownloadURL {
  DownloadURL?: string;
}

export interface GetBillOfLadingPath extends BasePath {}

export type GetBillOfLadingResponse = BillOfLadingDownloadURL;

interface BillOfLadingDownloadURL {
  DownloadURL?: string;
}

export interface GetShipmentsQuery {
  ShipmentStatusList?: ShipmentStatusList[];
  ShipmentIdList?: string[];
  LastUpdatedAfter?: string;
  LastUpdatedBefore?: string;
  QueryType: GetShipmentsQueryType;
  NextToken?: string;
  MarketplaceId: string;
}

export type GetShipmentsResponse = GetShipmentsResult;

type ShipmentStatusList =
  | 'WORKING'
  | 'SHIPPED'
  | 'RECEIVING'
  | 'CANCELLED'
  | 'DELETED'
  | 'CLOSED'
  | 'ERROR'
  | 'IN_TRANSIT'
  | 'DELIVERED'
  | 'CHECKED_IN';

type GetShipmentsQueryType = 'SHIPMENT' | 'DATE_RANGE' | 'NEXT_TOKEN';

interface GetShipmentsResult {
  ShipmentData?: InboundShipmentInfo[];
  NextToken?: string;
}

interface InboundShipmentInfo {
  ShipmentId?: string;
  ShipmentName?: string;
  ShipFromAddress: Address;
  DestinationFulfillmentCenterId?: string;
  ShipmentStatus?: ShipmentStatus;
  LabelPrepType?: LabelPrepType;
  AreCasesRequired: boolean;
  ConfirmedNeedByDate?: string;
  BoxContentsSource?: BoxContentsSource;
  EstimatedBoxContentsFee?: BoxContentsFeeDetails;
}

type BoxContentsSource = 'NONE' | 'FEED' | '2D_BARCODE' | 'INTERACTIVE';

interface BoxContentsFeeDetails {
  TotalUnits?: number;
  FeePerUnit?: Amount;
  TotalFee?: Amount;
}

export interface GetShipmentItemsByShipmentIdPath extends BasePath {}

export interface GetShipmentItemsByShipmentIdQuery {
  MarketplaceId: string;
}

export type GetShipmentItemsByShipmentIdResponse = GetShipmentItemsResult;

interface GetShipmentItemsResult {
  ItemData?: InboundShipmentItem[];
  NextToken?: string;
}

export interface GetShipmentItemsQuery {
  LastUpdatedAfter?: string;
  LastUpdatedBefore?: string;
  QueryType: GetShipmentItemsQueryType;
  NextToken?: string;
  MarketplaceId: string;
}

export type GetShipmentItemsResponse = GetShipmentItemsResult;

type GetShipmentItemsQueryType = 'DATE_RANGE' | 'NEXT_TOKEN';
