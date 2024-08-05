import { ProductStockStatus } from "../ProductStockStatus";
import styles from "./gallery.module.css";

interface GalleryProps {
  galleryImageLarge: string;
  galleryImageAlt: string;
}
export const Gallery = ({
  galleryImageLarge,
  galleryImageAlt,
}: GalleryProps) => {
  return (
    <figure className={styles["gallery-figure"]}>
      <img src={galleryImageLarge} alt={galleryImageAlt} />
      <figcaption>
        <div>{galleryImageAlt}</div>
        <ProductStockStatus status="inStock" statusText="In Stock" />
      </figcaption>
    </figure>
  );
};
