import { ApiProduct, GalleryImage, Model, ProductColor } from "@/types/types";

/**
 * @param product
 * Returns the list of color variants for this product
 */
export const getProductColorVariants = (
  product: ApiProduct
): ProductColor[] => {
  if (!product?.chipOptions) {
    return [];
  }
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
 * @param Model
 * Returns the a gallery image for this model
 */
export const getInitialModelGalleryImage = (
  model: Model | null
): GalleryImage => {
  if (!model || typeof model.galleryImageLarge === "undefined") {
    return { imageUrl: "", alt: "No image available" };
  }
  return {
    imageUrl: model.galleryImageLarge[0],
    alt: model.galleryImageAlt[0],
  };
};

export const getModelByColor = (models: Model[], color: ProductColor) => {
  for (const model of models) {
    for (let fmyChipOption of model.fmyChipList) {
      if (fmyChipOption.fmyChipCode === color.colorCode) {
        return model;
      }
    }
  }

  return null;
};
