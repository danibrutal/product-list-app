import { GetServerSideProps, GetServerSidePropsContext } from "next";
import styles from "./products.module.css";

import { ApiProduct } from "@/types/types";
import { Gallery } from "@/components/Gallery";
import { ProductProvider } from "@/providers/ProductProvider";
import { ProductDetails } from "@/components/ProductDetails";

interface ProductPageProps {
  product: ApiProduct;
}

export default function ProductPage({ product }: ProductPageProps) {
  return (
    <ProductProvider product={product}>
      <main className={styles.main}>
        <h1>{product.fmyMarketingName}</h1>
        <section className={styles["gallery-section"]}>
          <Gallery />
          <ProductDetails product={product} />
        </section>
      </main>
    </ProductProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const [productGroupId] = params?.slug as string[];
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  const products: ApiProduct[] = data.products;

  // in real world example, we would be querying on api side
  const product = products.find(
    (product) => product.productGroupId === productGroupId
  );

  return {
    props: {
      product,
    },
  };
};
