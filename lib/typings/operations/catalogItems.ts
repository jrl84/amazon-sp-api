import type {BaseResponse} from '../baseTypes';

/**
 *  2022-04-01 searchCatalogItems and getCatalogItem
 *  V0 listCatalogItems (deprecated in 2022 but still in use)
 */

export interface SearchCatalogItemsQuery {
  identifiers?: string;
  identifiersType?: IdentifiersType;
  marketplaceIds: string[];
  includedData?: IncludedData[];
  locale?: string;
  sellerId?: string;
  keywords?: string[];
  brandNames?: string[];
  classificationIds?: string[];
  pageSize?: number;
  pageToken?: string;
  keywordsLocale?: string;
}

export interface SearchCatalogItemsResponse extends BaseResponse {
  payload: ItemSearchResults;
}

type IdentifiersType = 'ASIN' | 'EAN' | 'GTIN' | 'ISBN' | 'JAN' | 'MINSAN' | 'SKU' | 'UPC';

export interface GetCatalogItemQuery {
  marketplaceIds: string[];
  includedData?: IncludedData[];
  locale?: string;
}

type IncludedData =
  | 'attributes'
  | 'classifications'
  | 'dimensions'
  | 'identifiers'
  | 'images'
  | 'productTypes'
  | 'relationships'
  | 'salesRanks'
  | 'summaries'
  | 'vendorDetails';

export interface GetCatalogItemPath {
  asin: string;
}

export interface GetCatalogItemResponse extends BaseResponse {
  payload?: Item;
}

/**
 * The response schema for the searchCatalogItems operation.
 * GET /catalog/2022-04-01/items
 * Operation: searchCatalogItems
 */
export interface ItemSearchResults {
  numberOfResults: number;
  pagination: Pagination;
  refinements: Refinements;
  items: Item[];
}

// !== from Pagination baseTypes
interface Pagination {
  nextToken?: string;
  previousToken?: string;
}

interface Refinements {
  brands: BrandRefinement[];
  classifications: ClassificationRefinement[];
}

interface Item {
  asin: string;
  attributes?: ItemAttributes;
  classifications?: ItemBrowseClassifications;
  dimensions?: ItemDimensions;
  identifiers?: ItemIdentifiers[];
  images?: ItemImages[];
  productTypes?: ItemProductTypes[];
  relationships?: ItemRelationships[];
  salesRanks: ItemSalesRanks[];
  summaries: ItemSummaries[];
  vendorDetails?: ItemVendorDetails;
}

interface BrandRefinement {
  numberOfResults: number;
  brandName: string;
}

interface ClassificationRefinement {
  numberOfResults: number;
  displayName: string;
  classificationId: string;
}

interface ItemAttributes {
  displayName: string;
  classificationId: string;
  parent?: ItemBrowseClassifications;
}

interface ItemBrowseClassifications {
  displayName: string;
  classificationId: string;
  parent?: ItemBrowseClassifications;
}

interface ItemDimensions {
  marketplaceId: string;
  item: Dimensions;
  package: Dimensions;
}

interface Dimensions {
  height: Dimension;
  length: Dimension;
  weight: Dimension;
  width: Dimension;
}

interface Dimension {
  unit: string;
  value: number;
}

interface ItemIdentifiers {
  marketplaceId: string;
  identifiers: ItemIdentifier[];
}

interface ItemIdentifier {
  identifierType: string;
  identifier: string;
}

interface ItemImages {
  marketplaceId: string;
  images: ItemImage[];
}

interface ItemImage {
  variant: Variant;
  link: string;
  height: number;
  width: number;
}

type Variant = 'MAIN' | 'PT01' | 'PT02' | 'PT03' | 'PT04' | 'PT05' | 'PT06' | 'PT07' | 'PT08' | 'SWCH';

interface ItemProductTypes {
  marketplaceId?: string;
  productType?: string;
}

interface ItemRelationships {
  marketplaceId: string;
  relationships: ItemRelationship[];
}

interface ItemRelationship {
  childAsins?: string[];
  parentAsins?: string[];
  variationTheme?: ItemVariationTheme;
  type: Type;
}

interface ItemVariationTheme {
  attributes?: string[];
  theme?: string;
}

type Type = 'VARIATION' | 'PACKAGE_HIERARCHY';

interface ItemSalesRanks {
  marketplaceId: string;
  classificationRanks: ItemClassificationSalesRank[];
  displayGroupRanks: ItemDisplayGroupSalesRank[];
}

interface ItemClassificationSalesRank {
  classificationId: string;
  title: string;
  link: string;
  rank: number;
}

interface ItemDisplayGroupSalesRank {
  websiteDisplayGroup: string;
  title: string;
  link: string;
  rank: number;
}

interface ItemSummaries {
  marketplaceId: string;
  adultProduct?: boolean;
  autographed?: boolean;
  brand?: string;
  browseClassification?: ItemBrowseClassification;
  color?: string;
  contributors?: ItemContributor[];
  itemClassification?: ItemClassification[];
  itemName: string;
  manufacturer?: string;
  memorabilia?: boolean;
  modelNumber?: string;
  packageQuantity?: number;
  partNumber?: string;
  releaseDate?: string;
  size?: string;
  style?: string;
  tradeInEligible?: boolean;
  websiteDisplayGroup?: string;
  websiteDisplayGroupName?: string;
}

interface ItemBrowseClassification {
  displayName: string;
  classificationId: string;
  parent?: ItemBrowseClassification;
}

interface ItemContributor {
  role: ItemContributorRole;
  value: string;
}

interface ItemContributorRole {
  displayName?: string;
  value: string;
}

type ItemClassification = 'BASE_PRODUCT' | 'OTHER' | 'PRODUCT_BUNDLE' | 'VARIATION_PARENT';

interface ItemVendorDetails {
  marketplaceId: string;
  brandCode?: string;
  manufacturerCode?: string;
  manufacturerCodeParent?: string;
  productCategory?: ItemVendorDetailsCategory;
  productGroup?: string;
  productSubcategory?: ItemVendorDetailsCategory;
  replenishmentCategory?: ReplenishmentCategory;
}

interface ItemVendorDetailsCategory {
  displayName?: string;
  value?: string;
}

type ReplenishmentCategory =
  | 'ALLOCATED'
  | 'BASIC_REPLENISHMENT'
  | 'IN_SEASON'
  | 'LIMITED_REPLENISHMENT'
  | 'MANUFACTURER_OUT_OF_STOCK'
  | 'NEW_PRODUCT'
  | 'NON_REPLENISHABLE'
  | 'NON_STOCKUPABLE'
  | 'OBSOLETE'
  | 'PLANNED_REPLENISHMENT';

/**
 *
 *
 *  V0 DEPRECATED BY AMAZON BUT STILL IN USE
 *
 *
 */

export interface ListCatalogCategoriesQuery {
  MarketplaceId: string;
  ASIN?: string;
  SellerSKU?: string;
}

export interface ListCatalogCategoriesResponse extends BaseResponse {
  payload?: Category[];
}

interface Category {
  ProductCategoryId?: string;
  ProductCategoryName?: string;
  parent?: object;
}

interface ASINIdentifier {
  MarketplaceId: string;
  ASIN: string;
}

interface SellerSKUIdentifier {
  MarketplaceId: string;
  SellerId: string;
  SellerSKU: string;
}

interface IdentifierType {
  MarketplaceASIN?: ASINIdentifier;
  SKUIdentifier?: SellerSKUIdentifier;
}

interface DecimalWithUnits {
  value?: number;
  Units?: string;
}

interface Creator {
  value?: string;
  Role?: string;
}

interface DimensionType {
  Height?: DecimalWithUnits;
  Length?: DecimalWithUnits;
  Width?: DecimalWithUnits;
  Weight?: DecimalWithUnits;
}

interface LanguageType {
  Name?: string;
  Type?: string;
  AudioFormat?: string;
}

interface Price {
  Amount?: number;
  CurrencyCode?: string;
}

interface Image {
  URL?: string;
  Height?: DecimalWithUnits;
  Width?: DecimalWithUnits;
}

interface AttributeSet {
  Actor?: string[];
  Artist?: string[];
  AspectRatio?: string;
  AudienceRating?: string;
  Author?: string[];
  BackFinding?: string;
  BandMaterialType?: string;
  Binding?: string;
  BlurayRegion?: string;
  Brand?: string;
  CeroAgeRating?: string;
  ChainType?: string;
  ClaspType?: string;
  Color?: string;
  CpuManufacturer?: string;
  CpuSpeed?: DecimalWithUnits;
  CpuType?: string;
  Creator?: Creator[];
  Department?: string;
  Director?: string[];
  DisplaySize?: DecimalWithUnits[];
  Edition?: string;
  EpisodeSequence?: string;
  EsrbAgeRating?: string;
  Feature?: string[];
  Flavor?: string;
  Format?: string[];
  GemType?: string[];
  Genre?: string;
  GolfClubFlex?: string;
  GolfClubLoft?: DecimalWithUnits[];
  HandOrientation?: string;
  HardDisInterface?: string;
  HardDiskSize?: DecimalWithUnits;
  HardwarePlatform?: string;
  HazardousMaterialType?: string;
  ItemDimensions?: DimensionType;
  IsAdultProduct?: boolean;
  IsAutographed?: boolean;
  IsEligibleForTradeIn?: boolean;
  IsMemorabilia?: boolean;
  IssuesPerYear?: string;
  ItemPartNumber?: string;
  Label?: string;
  Languages?: LanguageType[];
  LegalDisclaimer?: string;
  ListPrice?: Price;
  Manufacturer?: string;
  ManufacturerMaximumAge?: DecimalWithUnits;
  ManufacturerMinimumAge?: DecimalWithUnits;
  ManufacturerPartsWarrantyDescription?: string;
  MaterialType?: string[];
  MaximumResolution?: DecimalWithUnits;
  MediaType?: string[];
  MetalStamp?: string;
  MetalType?: string;
  Model?: string;
  NumberOfDiscs?: number;
  NumberOfIssues?: number;
  NumberOfItems?: number;
  NumberOfPages?: number;
  NumberOfTracks?: number;
  OperatingSystem?: string[];
  OpticalZoom?: DecimalWithUnits;
  PackageDimensions?: DimensionType;
  PackageQuantity?: number;
  PartNumber?: string;
  PegiRating?: string;
  Platform?: string[];
  ProcessorCount?: number;
  ProductGroup?: string;
  ProductTypeName?: string;
  ProductTypeSubcategory?: string;
  PublicationDate?: string;
  Publisher?: string;
  RegionCode?: string;
  ReleaseDate?: string;
  RingSize?: string;
  RunningTime?: DecimalWithUnits;
  ShaftMaterial?: string;
  Scent?: string;
  SeasonSequence?: string;
  SeikodoProductCode?: string;
  Size?: string;
  SizePerPearl?: string;
  SmallImage?: Image;
  Studio?: string;
  SubscriptionLength?: DecimalWithUnits;
  SystemMemorySize?: DecimalWithUnits;
  SystemMemoryType?: string;
  TheatricalReleaseDate?: string;
  Title?: string;
  TotalDiamondWeight?: DecimalWithUnits;
  TotalGemWeight?: DecimalWithUnits;
  Warranty?: string;
  WeeeTaxValue?: Price;
}

interface Relationship {
  Color?: string;
  Edition?: string;
  Flavor?: string;
  GemType?: string[];
  GolfClubFlex?: string;
  HandOrientation?: string;
  HardwarePlatform?: string;
  MaterialType?: string[];
  MetalType?: string;
  Model?: string;
  OperatingSystem?: string[];
  ProductTypeSubcategory?: string;
  RingSize?: string;
  ShaftMaterial?: string;
  Scent?: string;
  Size?: string;
  SizePerPearl?: string;
  GolfClubLoft?: DecimalWithUnits;
  TotalDiamondWeight?: DecimalWithUnits;
  TotalGemWeight?: DecimalWithUnits;
  PackageQuantity?: number;
  ItemDimensions?: DimensionType;
}

interface SalesRank {
  ProductCategoryId?: string;
  Rank?: number;
}
