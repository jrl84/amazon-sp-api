import type {Agent} from 'https';

export interface Errors {
  code: string;
  message: string;
  details?: string;
}


interface Credentials {
  SELLING_PARTNER_APP_CLIENT_ID?: string;
  SELLING_PARTNER_APP_CLIENT_SECRET?: string;
}
interface Options {
  credentials_path?: string;
  auto_request_tokens?: boolean;
  auto_request_throttled?: boolean;
  version_fallback?: boolean;
  use_sandbox?: boolean;
  only_grantless_operations?: boolean;
  user_agent?: string;
  debug_log?: boolean;
  timeouts?: Timeouts;
  retry_remote_timeout?: boolean;
  https_proxy_agent?: Agent | false;
  return_as_payload?: boolean;
}

export interface Config {
  region: 'eu' | 'na' | 'fe';
  refresh_token?: string;
  endpoints_versions?: Record<string, string>;
  access_token?: string;
  credentials?: Credentials;
  options?: Options;
}

export interface Pagination {
  nextToken?: string;
}

export interface DownloadDocument {
  url: string;
  compressionAlgorithm?: string;
  reportDocumentId?: string;
}

export interface Timeouts {
  response?: number;
  idle?: number;
  deadline?: number;
}

export interface DownloadOptions {
  json?: boolean;
  unzip?: boolean;
  file?: string;
  charset?: string;
  timeouts?: Timeouts;
}

export interface DownloadStreamOptions {
  unzip?: boolean;
}

export type Scope = 'sellingpartnerapi::notifications' | 'sellingpartnerapi::client_credential:rotation';

export interface ExchangeResponse {
  access_token: string;
  token_type: 'bearer';
  expires_in: number;
  refresh_token: string;
}
