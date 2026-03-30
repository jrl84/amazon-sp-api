
interface MoneyType {
  CurrencyCode: string;
  Amount: number;
}

type FulfillmentChannel = 'Merchant' | 'Amazon';
type SubCondition = 'acceptable' | 'good' | 'mint' | 'new' | string;
type ItemConditionType = 'Used' | 'New' | 'Collectible' | 'Refurbished' | 'Club';
type Condition = 'used' | 'new';
type Status = 'Success';
type CustomerType = 'Business' | 'Customer';

interface SummaryOffers {
  condition: Condition;
  fulfillmentChannel: FulfillmentChannel;
  OfferCount: number;
}

interface SummaryPricesBase {
  condition: Condition;
  LandedPrice: MoneyType;
  ListingPrice: MoneyType;
  Shipping: MoneyType;
}

interface LowestPrices extends SummaryPricesBase {
  fulfillmentChannel: FulfillmentChannel;
}

export interface GetItemOffersQuery {
  MarketplaceId: string;
  ItemCondition: ItemConditionType;
  CustomerType?: CustomerType;
}

export interface GetItemOffersPath {
  Asin: string;
}

export interface GetItemOffersResponse {
  ASIN: string;
  status: Status;
  ItemCondition: ItemConditionType;
  Identifier: {
    MarketplaceId: string;
    ItemCondition: ItemConditionType;
    ASIN: string;
  };
  Summary: {
    LowestPrices: LowestPrices[];
    BuyBoxPrices: SummaryPricesBase[];
    NumberOfOffers: SummaryOffers[];
    BuyBoxEligibleOffers: SummaryOffers[];
    SalesRankings: {
      ProductCategoryId: string;
      Rank: number;
    }[];
    ListPrice: MoneyType;
    CompetitivePriceThreshold: MoneyType;
    TotalOfferCount: number;
  };
  Offers: {
    Shipping: MoneyType;
    ListingPrice: MoneyType;
    ShippingTime: {
      maximumHours: number;
      minimumHours: number;
      availabilityType: string;
    };
    SellerFeedbackRating: {
      FeedbackCount: number;
      SellerPositiveFeedbackRating: number;
    };
    ShipsFrom: {
      Country: string;
    };
    PrimeInformation: {
      IsPrime: boolean;
      IsNationalPrime: boolean;
    };
    SubCondition: SubCondition;
    SellerId: string;
    ConditionNotes: string;
    IsFeaturedMerchant: boolean;
    IsBuyBoxWinner: boolean;
    IsFulfilledByAmazon: boolean;
  }[];
  marketplaceId: string;
}
