
type Program = 'INBOUND' | 'COMMINGLING';
type IneligibilityReasonList =
  | 'FBA_INB_0004'
  | 'FBA_INB_0006'
  | 'FBA_INB_0007'
  | 'FBA_INB_0008'
  | 'FBA_INB_0009'
  | 'FBA_INB_0010'
  | 'FBA_INB_0011'
  | 'FBA_INB_0012'
  | 'FBA_INB_0013'
  | 'FBA_INB_0014'
  | 'FBA_INB_0015'
  | 'FBA_INB_0016'
  | 'FBA_INB_0017'
  | 'FBA_INB_0018'
  | 'FBA_INB_0019'
  | 'FBA_INB_0034'
  | 'FBA_INB_0035'
  | 'FBA_INB_0036'
  | 'FBA_INB_0037'
  | 'FBA_INB_0038'
  | 'FBA_INB_0050'
  | 'FBA_INB_0051'
  | 'FBA_INB_0053'
  | 'FBA_INB_0055'
  | 'FBA_INB_0056'
  | 'FBA_INB_0059'
  | 'FBA_INB_0065'
  | 'FBA_INB_0066'
  | 'FBA_INB_0067'
  | 'FBA_INB_0068'
  | 'FBA_INB_0095'
  | 'FBA_INB_0097'
  | 'FBA_INB_0098'
  | 'FBA_INB_0099'
  | 'FBA_INB_0100'
  | 'FBA_INB_0103'
  | 'FBA_INB_0104'
  | 'UNKNOWN_INB_ERROR_CODE';

export interface GetItemEligibilityPreviewQuery {
  marketplaceIds?: string[];
  asin: string;
  program: Program;
}

export type GetItemEligibilityPreviewResponse = ItemEligibilityPreview;

interface ItemEligibilityPreview {
  asin: string;
  marketplaceId?: string;
  program: Program;
  isEligibleForProgram: boolean;
  ineligibilityReasonList: IneligibilityReasonList[];
}
