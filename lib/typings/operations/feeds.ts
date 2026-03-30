import type {BaseResponse} from '../baseTypes';

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

export interface GetFeedsResponse extends BaseResponse {
  payload?: Feed[];
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

export interface CreateFeedResponse extends BaseResponse {
  feedId: string;
}

export interface GetFeedPath {
  feedId: string;
}

export interface GetFeedResponse extends BaseResponse {
  payload?: Feed;
}

export interface CancelFeedPath {
  feedId: string;
}

export interface CancelFeedResponse extends BaseResponse {}

export interface CreateFeedDocumentBody {
  contentType: string;
}

export interface CreateFeedDocumentResponse extends BaseResponse {
  payload?: CreateFeedDocumentResult;
}

interface CreateFeedDocumentResult {
  feedDocumentId: string;
  url: string;
}

export interface GetFeedDocumentPath {
  feedDocumentId: string;
}

export interface GetFeedDocumentResponse extends BaseResponse {
  payload?: FeedDocument;
}

export interface FeedDocument extends CreateFeedDocumentResult {
  compressionAlgorithm?: 'GZIP';
}
