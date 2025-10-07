
import type { Gem, Auction, Seller } from '../types';

export const featuredGemsData: Gem[] = [
    { id: 1, name: { en: "Royal Blue Sapphire", ar: "ياقوت أزرق ملكي" }, price: 12500, country: { en: "Sri Lanka", ar: "سريلانكا" }, image: "https://picsum.photos/seed/gem1/400/400", rating: 4.9 },
    { id: 2, name: { en: "Emerald Cut Diamond", ar: "ألماس بقطع الزمرد" }, price: 28000, country: { en: "South Africa", ar: "جنوب أفريقيا" }, image: "https://picsum.photos/seed/gem2/400/400", rating: 5.0 },
    { id: 3, name: { en: "Pigeon Blood Ruby", ar: "ياقوت دم الحمام" }, price: 19800, country: { en: "Myanmar", ar: "ميانمار" }, image: "https://picsum.photos/seed/gem3/400/400", rating: 4.8 },
    { id: 4, name: { en: "Black Opal", ar: "أوبال أسود" }, price: 9500, country: { en: "Australia", ar: "أستراليا" }, image: "https://picsum.photos/seed/gem4/400/400", rating: 4.9 },
    { id: 5, name: { en: "Fire Citrine", ar: "سيترين ناري" }, price: 4500, country: { en: "Brazil", ar: "البرازيل" }, image: "https://picsum.photos/seed/gem5/400/400", rating: 4.7 },
    { id: 6, name: { en: "Ocean Aquamarine", ar: "أكوامارين محيطي" }, price: 7800, country: { en: "Madagascar", ar: "مدغشقر" }, image: "https://picsum.photos/seed/gem6/400/400", rating: 4.8 },
    { id: 7, name: { en: "Sunstone Crystal", ar: "كريستال حجر الشمس" }, price: 3200, country: { en: "USA", ar: "الولايات المتحدة" }, image: "https://picsum.photos/seed/gem7/400/400", rating: 4.6 },
    { id: 8, name: { en: "Purple Amethyst", ar: "جمشت أرجواني" }, price: 1200, country: { en: "Uruguay", ar: "الأوروغواي" }, image: "https://picsum.photos/seed/gem8/400/400", rating: 4.7 },
];

const threeDaysFromNow = new Date();
threeDaysFromNow.setDate(threeDaysFromNow.getDate() + 3);
threeDaysFromNow.setHours(threeDaysFromNow.getHours() + 17);

const oneDayFromNow = new Date();
oneDayFromNow.setDate(oneDayFromNow.getDate() + 1);

const fiveDaysFromNow = new Date();
fiveDaysFromNow.setDate(fiveDaysFromNow.getDate() + 5);

const soon = new Date();
soon.setHours(soon.getHours() + 2);

export const liveAuctionsData: Auction[] = [
    { id: 1, gem: featuredGemsData[4], endDate: threeDaysFromNow, bidders: 12, lastPrice: 6200 },
    { id: 2, gem: featuredGemsData[5], endDate: oneDayFromNow, bidders: 25, lastPrice: 11500 },
    { id: 3, gem: featuredGemsData[6], endDate: fiveDaysFromNow, bidders: 8, lastPrice: 4100 },
    { id: 4, gem: featuredGemsData[3], endDate: soon, bidders: 42, lastPrice: 24500 },
];

export const sellersData: Seller[] = [
    { id: 1, name: "Gemstone Emporium", country: { en: "Geneva", ar: "جنيف" }, products: 45, rating: 4.9, image: "https://picsum.photos/seed/seller1/100/100" },
    { id: 2, name: "Crystal Caverns", country: { en: "New York", ar: "نيويورك" }, products: 72, rating: 4.8, image: "https://picsum.photos/seed/seller2/100/100" },
    { id: 3, name: "The Ruby Mine", country: { en: "Bangkok", ar: "بانكوك" }, products: 30, rating: 5.0, image: "https://picsum.photos/seed/seller3/100/100" },
    { id: 4, name: "Opal Oasis", country: { en: "Sydney", ar: "سيدني" }, products: 25, rating: 4.7, image: "https://picsum.photos/seed/seller4/100/100" },
];