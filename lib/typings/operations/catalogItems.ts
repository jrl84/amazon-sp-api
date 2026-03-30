
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

export type SearchCatalogItemsResponse = ItemSearchResults;

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

export type GetCatalogItemResponse = Item;

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

interface ItemBase {
  asin: string;
  attributes?: ItemAttributes;
  identifiers?: ItemIdentifiers[];
  images?: ItemImages[];
  productTypes?: ItemProductTypes[];
  salesRanks?: ItemSalesRanks[];
  summaries?: ItemSummaries[];
  vendorDetails?: ItemVendorDetails[];
}

export interface Item_2022_04_01 extends ItemBase {
  classifications?: ItemBrowseClassifications[];
  dimensions?: ItemDimensions[];
  relationships?: ItemRelationships[];
}

export interface Item_2020_12_01 extends ItemBase {
  variations?: ItemVariationsByMarketplace[];
}

/** Union of both API versions. Use `'classifications' in item` to discriminate. */
type Item = Item_2022_04_01 | Item_2020_12_01;

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

export interface ItemSalesRanks_2022_04_01 {
  marketplaceId: string;
  classificationRanks?: ItemClassificationSalesRank[];
  displayGroupRanks?: ItemDisplayGroupSalesRank[];
}

export interface ItemSalesRanks_2020_12_01 {
  marketplaceId: string;
  ranks?: ItemSalesRank[];
}

type ItemSalesRanks = ItemSalesRanks_2022_04_01 | ItemSalesRanks_2020_12_01;

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

interface ItemSummariesBase {
  marketplaceId: string;
}

export interface ItemSummaries_2022_04_01 extends ItemSummariesBase {
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
}

export interface ItemSummaries_2020_12_01 extends ItemSummariesBase {
  brandName?: string;
  browseNode?: string;
  colorName?: string;
  itemName?: string;
  sizeName?: string;
  styleName?: string;
}

type ItemSummaries = ItemSummaries_2022_04_01 | ItemSummaries_2020_12_01;

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

interface ItemVendorDetailsBase {
  marketplaceId: string;
  brandCode?: string;
  manufacturerCode?: string;
  manufacturerCodeParent?: string;
  productGroup?: string;
  replenishmentCategory?: ReplenishmentCategory;
}

export interface ItemVendorDetails_2022_04_01 extends ItemVendorDetailsBase {
  productCategory?: ItemVendorDetailsCategory;
  productSubcategory?: ItemVendorDetailsCategory;
}

export interface ItemVendorDetails_2020_12_01 extends ItemVendorDetailsBase {
  categoryCode?: string;
  subcategoryCode?: string;
}

type ItemVendorDetails = ItemVendorDetails_2022_04_01 | ItemVendorDetails_2020_12_01;

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

export type ListCatalogCategoriesResponse = Category[];

interface Category {
  ProductCategoryId?: string;
  ProductCategoryName?: string;
  parent?: object;
}

