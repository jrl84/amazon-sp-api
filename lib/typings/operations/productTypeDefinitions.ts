// SearchProductTypes
export interface ProductType {
  name: string;
  displayName: string;
  marketplaceIds: string[];
}
export interface SearchProductTypesQuery {
  locale?: string;
  itemName?: string;
  searchLocale?: string;
  keywords?: string;
}

export interface SearchProductTypesResponse {
  productTypes: ProductType[];
  productTypeVersion: string;
}

// SearchDefinitionsProductTypes
export interface Link {
  resource: string;
  verb: string; // HTTP method
}
export interface SchemaLink {
  link: Link;
  checksum: string;
}
export interface PropertyGroup {
  title?: string;
  description?: string;
  propertyNames?: string[];
}
export interface ProductTypeVersion {
  version: string;
  latest: boolean;
  releaseCandidate?: boolean;
}

export interface SearchDefinitionsProductTypesQuery {
  productType: string;
  sellerId?: string;
  marketplaceIds: string[];
  productTypeVersion: string;
  requirements: string;
  requirementsEnforced: 'ENFORCED' | 'NOT_ENFORCED';
  locale: string;
}

export interface SearchDefinitionsProductTypesResponse {
  metaSchema: SchemaLink;
  schema: SchemaLink;
  requirements: 'ENFORCED' | 'NOT_ENFORCED';
  requirementsEnforced: 'ENFORCED' | 'NOT_ENFORCED';
  propertyGroups: {
    [key: string]: PropertyGroup;
  };
  locale: string;
  marketplaceIds: string[];
  productType: string;
  displayName: string;
  productTypeVersion: ProductTypeVersion;
}
