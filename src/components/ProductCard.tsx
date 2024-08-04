import styles from "./productCard.module.css";

interface ProductCardProps {
  displayName: string;
}

export const ProductCard = ({ displayName }: ProductCardProps) => {
  return (
    <div className={styles["product-card"]}>
      <span className={styles["product-card__product-name"]}>
        {displayName}
      </span>
    </div>
  );
};
