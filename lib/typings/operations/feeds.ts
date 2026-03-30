
type ProcessingStatus = 'IN_QUEUE' | 'IN_PROGRESS' | 'DONE' | 'CANCELLED' | 'FATAL';

export interface GetFeedsQuery {
  feedTypes?: string[];
  marketplaceIds?: string[];
  pageSize?: number;
  processingStatuses?: ProcessingStatus[];
  createdSince?: string;
  createdUntil?: string;
  nextToken?: string;
}

export interface GetFeedsResponse {
  feeds?: Feed[];
  nextToken?: string;
}

interface Feed {
  feedId: string;
  feedType: string;
  marketplaceIds?: string[];
  createdTime: string;
  processingStatus: ProcessingStatus;
  processingStartTime?: string;
  processingEndTime?: string;
  resultFeedDocumentId?: string;
}

export interface CreateFeedBody {
  feedType: string;
  marketplaceIds: string[];
  inputFeedDocumentId: string;
  feedOptions?: FeedOptions[];
}

interface FeedOptions {
  [key: string]: string;
}

export interface CreateFeedResponse {
  feedId: string;
}

export interface GetFeedPath {
  feedId: string;
}

export type GetFeedResponse = Feed;

export interface CancelFeedPath {
  feedId: string;
}

export type CancelFeedResponse = Record<string, never>;

export interface CreateFeedDocumentBody {
  contentType: string;
}

export type CreateFeedDocumentResponse = CreateFeedDocumentResult;

interface CreateFeedDocumentResult {
  feedDocumentId: string;
  url: string;
}

export interface GetFeedDocumentPath {
  feedDocumentId: string;
}

export type GetFeedDocumentResponse = FeedDocument;

export interface FeedDocument extends CreateFeedDocumentResult {
  compressionAlgorithm?: 'GZIP';
}
