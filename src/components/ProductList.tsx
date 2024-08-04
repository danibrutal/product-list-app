import { ApiProduct } from "@/types/types";
import { ProductCard } from "./ProductCard";
import styles from "./productList.module.css";

interface ProductListProps {
  products: ApiProduct[];
}
export const ProductList = ({ products }: ProductListProps) => {
  return (
    <ul className={styles["product-list"]}>
      {products.map((product) => (
        <li
          key={product.productGroupId}
          className={styles["product-list-item"]}
        >
          <ProductCard displayName={product.fmyMarketingName} />
        </li>
      ))}
    </ul>
  );
};
