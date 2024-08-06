export interface ApiProduct {
  productGroupId: string;
  fmyMarketingName: string;
  chipOptions: ChipOption[];
  modelList: Model[];
}
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
  stockStatusText: string;
  fmyChipList: FmiChipOption[];
}

export interface ProductColor {
  colorCode: string;
  colorName: string;
}
export interface Option {
  optionCode: string;
  optionName: string;
}

export interface ChipOption {
  fmyChipType: FmyChipType;
  optionList: Option[];
}

export interface FmiChipOption {
  fmyChipType: FmyChipType;
  fmyChipCode: string;
  fmyChipName: string;
}

export interface GalleryImage {
  imageUrl: string;
  alt: string;
}

export type StockStatus = "inStock" | "learnMore" | "outOfStock";
export type FmyChipType = "COLOR" | "MOBILE MEMORY"; // probably more options
