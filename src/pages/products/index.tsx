import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { ProductList } from "@/components/ProductList";
import styles from "./products.module.css";
import { ApiProduct } from "@/types/types";

export default function ProductsPage({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main className={styles.main}>
      <h2>Maak kennis met onze nieuwste producten</h2>
      <ProductList products={products} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  const products: ApiProduct[] = data.products;

  return {
    props: {
      products,
    },
  };
};
