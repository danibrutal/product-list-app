export interface Option {
  optionCode: string;
  optionName: string;
}

export interface ChipOption {
  fmyChipType: "COLOR" | "MOBILE MEMORY";
  optionList: Option[];
}

export type StockStatus = "inStock" | "learnMore" | "outOfStock";

export interface Model {
  displayName: string;
  thumbUrl: string;
  thumbUrlAlt: string;
  largeUrl: string;
  galleryImage: string[];
  galleryImageLarge: string[];
  galleryImageAlt: string[];
  ratings: string;
  reviewCount: string;
  priceDisplay: string;
  ctaType: StockStatus;
}

export interface ApiProduct {
  productGroupId: string;
  fmyMarketingName: string;
  chipOptions: ChipOption[];
  modelList: Model[];
}
