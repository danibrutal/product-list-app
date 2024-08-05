import { ProductColor } from "@/types/types";
import { ColorSelector } from "../ColorSelector";

interface ProductDetailsProps {
  colorVariants: ProductColor[];
  onColorSelect: (color: ProductColor) => void;
}

export const ProductDetails = ({
  colorVariants,
  onColorSelect,
}: ProductDetailsProps) => {
  return (
    <div>
      <ColorSelector
        colors={colorVariants}
        onColorSelect={handleOnSelectColor}
      />
    </div>
  );
};
