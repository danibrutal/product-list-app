import { ApiProduct, GalleryImage, ProductColor } from "@/types/types";

/**
 * @param product
 * Returns the list of color variants for this product
 */
export const getProductColorVariants = (
  product: ApiProduct
): ProductColor[] => {
  const colors: ProductColor[] = product.chipOptions.reduce((acc, option) => {
    if (option.fmyChipType === "COLOR") {
      const colorCodes = option.optionList.map((colorOption) => {
        return {
          colorCode: colorOption.optionCode,
          colorName: colorOption.optionName,
        };
      });
      return [...acc, ...colorCodes];
    }
    return acc;
  }, [] as ProductColor[]);

  return colors;
};

/**
 * @param product
 * Returns the list of color variants for this product
 */
export const getProductGalleryImage = (product: ApiProduct): GalleryImage => {
  return {
    imageUrl: product.modelList[0].galleryImageLarge[0],
    alt: product.modelList[0].galleryImageAlt[0],
  };
};
