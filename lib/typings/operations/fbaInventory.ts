
type GranularityType = 'Marketplace';

export interface GetInventorySummariesQuery {
  details?: boolean;
  granularityType: GranularityType;
  granularityId: string;
  startDateTime?: string;
  sellerSkus?: string[];
  nextToken?: string;
  marketplaceIds: string[];
}

export interface GetInventorySummariesResponse {
  granularity?: Granularity;
  inventorySummaries?: InventorySummary[];
  nextToken?: string;
}
export interface Granularity {
  granularityType?: GranularityType;
  granularityId?: string;
}

export interface InventorySummary {
  asin?: string;
  fnSku?: string;
  sellerSku?: string;
  condition?: string;
  inventoryDetails?: InventoryDetails;
  lastUpdatedTime?: string;
  productName?: string;
  totalQuantity?: number;
}

export interface InventoryDetails {
  fulfillableQuantity?: number;
  inboundWorkingQuantity?: number;
  inboundShippedQuantity?: number;
  inboundReceivingQuantity?: number;
  reservedQuantity?: ReservedQuantity;
  researchingQuantity?: ResearchingQuantity;
  unfulfillableQuantity?: UnfulfillableQuantity;
}

export interface ReservedQuantity {
  totalReservedQuantity?: number;
  pendingCustomerOrderQuantity?: number;
  pendingTransshipmentQuantity?: number;
  fcProcessingQuantity?: number;
}

export interface ResearchingQuantity {
  totalResearchingQuantity?: number;
  researchingQuantityBreakdown?: ResearchingQuantityEntry[];
}

export interface ResearchingQuantityEntry {
  name: Name;
  quantity: number;
}

type Name = 'researchingQuantityInShortTerm' | 'researchingQuantityInMidTerm' | 'researchingQuantityInLongTerm';

export interface UnfulfillableQuantity {
  totalUnfulfillableQuantity?: number;
  customerDamagedQuantity?: number;
  warehouseDamagedQuantity?: number;
  distributorDamagedQuantity?: number;
  carrierDamagedQuantity?: number;
  defectiveQuantity?: number;
  expiredQuantity?: number;
}
