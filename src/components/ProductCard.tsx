import styles from "./productCard.module.css";
import slugify from "slugify";

interface ProductCardProps {
  displayName: string;
  thumbUrl: string;
  thumbUrlAlt: string;
}

export const ProductCard = ({
  displayName,
  thumbUrl,
  thumbUrlAlt,
}: ProductCardProps) => {
  const productUrl = `products/${slugify(displayName, { lower: true })}`;
  return (
    <a href={productUrl}>
      <div className={styles["product-card"]}>
        <span className={styles["product-card__product-name"]}>
          {displayName}
        </span>
        <figure className={styles["product-card__figure"]}>
          <img src={thumbUrl} alt={thumbUrlAlt} width={160} height={160} />
        </figure>
      </div>
    </a>
  );
};
