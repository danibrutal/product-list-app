import { ApiProduct, ProductColor } from "@/types/types";
import { ColorSelector } from "../ColorSelector";
import { useModel } from "@/providers/ProductProvider";
import styles from "./productDetails.module.css";

interface ProductDetailsProps {
  product: ApiProduct;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { currentModel, colorVariants, selectModelByColor } = useModel();

  return (
    <div className={styles["product-details"]}>
      {currentModel?.priceDisplay && (
        <div className={styles["product-details__price"]}>
          Total: {currentModel?.priceDisplay}
        </div>
      )}
      <ColorSelector
        colors={colorVariants}
        onColorSelect={selectModelByColor}
      />
    </div>
  );
};
