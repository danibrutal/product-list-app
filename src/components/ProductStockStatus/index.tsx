import { StockStatus } from "@/types/types";
import styles from "./stockStatus.module.css";

interface ProductStockStatusProps {
  status: StockStatus;
  statusText: string;
}

const STATUS_CLASSNAME_MAP = {
  inStock: "product-stock-status__pill--inStock",
  outOfStock: "product-stock-status__pill--outOfStock",
  learnMore: "product-stock-status__pill--learnMore",
};

export const ProductStockStatus = ({
  status,
  statusText,
}: ProductStockStatusProps) => {
  const pillStyle = STATUS_CLASSNAME_MAP[status];
  return (
    <div className={styles["product-stock-status"]}>
      <div
        className={`${styles["product-stock-status__pill"]} ${styles[pillStyle]}`}
      ></div>
      <span>{statusText}</span>
    </div>
  );
};
