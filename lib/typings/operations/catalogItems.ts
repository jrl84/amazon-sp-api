import type {BaseResponse} from '../baseTypes';

/**
 * Catalog Items API
 * - 2022-04-01: searchCatalogItems, getCatalogItem
 * - 2020-12-01: searchCatalogItems, getCatalogItem
 * - V0 (deprecated, still in use): listCatalogCategories
 *
 * SearchCatalogItemsQuery/Response and GetCatalogItemQuery/Response are
 * compatible across both 2022-04-01 and 2020-12-01.
 */

export interface SearchCatalogItemsQuery {
  /** Product identifiers to search by. Mutually exclusive with `keywords`. 2022-04-01 only. */
  identifiers?: string[];
  /** Required when `identifiers` is set. 2022-04-01 only. */
  identifiersType?: IdentifiersType;
  marketplaceIds: string[];
  includedData?: IncludedData[];
  locale?: string;
  /** Required when `identifiersType` is `SKU`. 2022-04-01 only. */
  sellerId?: string;
  /** Required in 2020-12-01. Mutually exclusive with `identifiers` in 2022-04-01. */
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

/** Combined includedData values across 2022-04-01 and 2020-12-01 */
type IncludedData =
  | 'attributes'
  | 'classifications' // 2022-04-01 only
  | 'dimensions'      // 2022-04-01 only
  | 'identifiers'
  | 'images'
  | 'productTypes'
  | 'relationships'   // 2022-04-01 only
  | 'salesRanks'
  | 'summaries'
  | 'variations'      // 2020-12-01 only
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
  classifications?: ItemBrowseClassifications[]; // 2022-04-01
  dimensions?: ItemDimensions[];                  // 2022-04-01
  identifiers?: ItemIdentifiers[];
  images?: ItemImages[];
  productTypes?: ItemProductTypes[];
  relationships?: ItemRelationships[];  // 2022-04-01
  variations?: ItemVariationsByMarketplace[];      // 2020-12-01
  salesRanks?: ItemSalesRanks[];
  summaries?: ItemSummaries[];
  vendorDetails?: ItemVendorDetails[];
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

/** Free-form JSON object keyed by attribute name (additionalProperties: true) */
type ItemAttributes = Record<string, unknown>;

/** Per-marketplace browse classifications (2022-04-01) */
interface ItemBrowseClassifications {
  marketplaceId: string;
  classifications?: ItemBrowseClassification[];
}

/** Per-marketplace dimensions (2022-04-01) */
interface ItemDimensions {
  marketplaceId: string;
  item?: Dimensions;
  package?: Dimensions;
}

interface Dimensions {
  height?: Dimension;
  length?: Dimension;
  weight?: Dimension;
  width?: Dimension;
}

interface Dimension {
  unit?: string;
  value?: number;
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

/** Per-marketplace variation data (2020-12-01) */
interface ItemVariationsByMarketplace {
  marketplaceId: string;
  asins: string[];
  variationType: 'PARENT' | 'CHILD';
}

interface ItemSalesRanks {
  marketplaceId: string;
  classificationRanks?: ItemClassificationSalesRank[]; // 2022-04-01
  displayGroupRanks?: ItemDisplayGroupSalesRank[];      // 2022-04-01
  ranks?: ItemSalesRank[];                              // 2020-12-01
}

interface ItemClassificationSalesRank {
  classificationId: string;
  title: string;
  link?: string;
  rank: number;
}

interface ItemDisplayGroupSalesRank {
  websiteDisplayGroup: string;
  title: string;
  link?: string;
  rank: number;
}

interface ItemSalesRank {
  title: string;
  link?: string;
  rank: number;
}

interface ItemSummaries {
  marketplaceId: string;
  // 2022-04-01
  adultProduct?: boolean;
  autographed?: boolean;
  brand?: string;
  browseClassification?: ItemBrowseClassification;
  color?: string;
  contributors?: ItemContributor[];
  itemClassification?: ItemClassification;
  itemName?: string;
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
  // 2020-12-01
  brandName?: string;
  browseNode?: string;
  colorName?: string;
  sizeName?: string;
  styleName?: string;
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
  productGroup?: string;
  replenishmentCategory?: ReplenishmentCategory;
  // 2022-04-01: category as objects
  productCategory?: ItemVendorDetailsCategory;
  productSubcategory?: ItemVendorDetailsCategory;
  // 2020-12-01: category as flat strings
  categoryCode?: string;
  subcategoryCode?: string;
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

