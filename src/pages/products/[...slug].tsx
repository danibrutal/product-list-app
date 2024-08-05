import { GetServerSideProps, GetServerSidePropsContext } from "next";
import styles from "./products.module.css";

import { ApiProduct, GalleryImage, ProductColor } from "@/types/types";
import { getProductColorVariants, getProductGalleryImage } from "@/utils";
import { ColorSelector } from "@/components/ColorSelector";
import { useState } from "react";
import { Gallery } from "@/components/Gallery";
import { ProductStockStatus } from "@/components/ProductStockStatus";

interface ProductPageProps {
  product: ApiProduct;
}

export default function ProductPage({ product }: ProductPageProps) {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<GalleryImage>(
    getProductGalleryImage(product)
  );

  const colorVariants = getProductColorVariants(product);

  const handleOnSelectColor = (color: ProductColor) => {
    console.log(color);
  };

  return (
    <main className={styles.main}>
      <h1>{product.fmyMarketingName}</h1>
      <section className={styles["gallery-section"]}>
        <Gallery
          galleryImageLarge={selectedImage.imageUrl}
          galleryImageAlt={selectedImage.alt}
        />
        <div>
          <ColorSelector
            colors={colorVariants}
            onColorSelect={handleOnSelectColor}
          />
        </div>
      </section>
    </main>
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
