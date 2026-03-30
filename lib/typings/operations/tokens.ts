export interface CreateRestrictedDataTokenBody {
  targetApplication?: string;
  restrictedResources: RestrictedResource[];
}

export interface RestrictedResource {
  method: Method;
  path: string;
  dataElements?: string[];
}

type Method = 'GET' | 'PUT' | 'POST' | 'DELETE';

export interface CreateRestrictedDataTokenResponse {
  restrictedDataToken?: string;
  expiresIn?: string;
}
