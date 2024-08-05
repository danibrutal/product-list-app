import { StockStatus } from "@/types/types";
import styles from "./stockStatus.module.css";

interface ProductStockStatusProps {
  status: StockStatus;
  statusText: string;
}
export const ProductStockStatus = ({
  status,
  statusText,
}: ProductStockStatusProps) => {
  const pillStyle =
    status === "inStock"
      ? styles["product-stock-status__pill--inStock"]
      : styles["product-stock-status__pill--outOfStock"];
  return (
    <div className={styles["product-stock-status"]}>
      <div
        className={`${styles["product-stock-status__pill"]} ${pillStyle}`}
      ></div>
      <span>{statusText}</span>
    </div>
  );
};
