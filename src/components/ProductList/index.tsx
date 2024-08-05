import { ApiProduct } from "@/types/types";
import styles from "./productList.module.css";
import { ProductCard } from "@/components/ProductCard";

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
          <ProductCard
            productGroupId={product.productGroupId}
            displayName={product.fmyMarketingName}
            thumbUrl={product.modelList[0].thumbUrl}
            thumbUrlAlt={product.modelList[0].thumbUrlAlt}
          />
        </li>
      ))}
    </ul>
  );
};
