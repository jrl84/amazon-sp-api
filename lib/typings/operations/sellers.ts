
interface MarketplaceParticipation {
  marketplace: Marketplace;
  participation: Participation;
}

interface Marketplace {
  id: string;
  name: string;
  countryCode: string;
  defaultCurrencyCode: string;
  defaultLanguageCode: string;
  domainName: string;
}

interface Participation {
  isParticipating: boolean;
  hasSuspendedListings: boolean;
}

export type GetMarketplaceParticipationsResponse = MarketplaceParticipation[];
