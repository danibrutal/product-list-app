import { ProductColor } from "@/types/types";

import styles from "./colorSelector.module.css";

interface ColorSelectorProps {
  colors: ProductColor[];
  onColorSelect: (color: ProductColor) => void;
}

/**
 * Note: simplified for time constraints,
 * in production, I would use accesible html elements
 */
export const ColorSelector = ({
  colors,
  onColorSelect,
}: ColorSelectorProps) => {
  return (
    <div className={styles["color-selector"]}>
      {colors.map((color) => (
        <div
          className={styles["color-selector__option-wrapper"]}
          key={color.colorCode}
        >
          <div
            className={styles["color-selector__option"]}
            style={{ backgroundColor: color.colorCode }}
            onClick={() => onColorSelect(color)}
          ></div>
          <label>{color.colorName}</label>
        </div>
      ))}
    </div>
  );
};
