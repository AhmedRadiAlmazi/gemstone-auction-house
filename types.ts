
export type Language = 'en' | 'ar';
export type Theme = 'light' | 'dark';
export type Page = 'home' | 'store' | 'auctions' | 'sellers' | 'support' | 'profile';


export interface Gem {
    id: number;
    name: { en: string; ar: string };
    price: number;
    country: { en: string; ar: string };
    image: string;
    rating?: number;
}

export interface Auction {
    id: number;
    gem: Gem;
    endDate: Date;
    bidders: number;
    lastPrice: number;
}

export interface Seller {
    id: number;
    name: string;
    country: { en: string; ar: string };
    products: number;
    rating: number;
    image: string;
}