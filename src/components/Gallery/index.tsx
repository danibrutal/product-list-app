import Image from "next/image";
import { useModel } from "@/providers/ProductProvider";
import { ProductStockStatus } from "../ProductStockStatus";
import styles from "./gallery.module.css";
import { StockStatus } from "@/types/types";
import { getInitialModelGalleryImage } from "@/utils";
import { useState } from "react";

interface GalleryProps {}
export const Gallery = ({}: GalleryProps) => {
  const [isLoading, setLoading] = useState(true);
  const { currentModel } = useModel();

  const galleryImage = getInitialModelGalleryImage(currentModel);

  return (
    <>
      {isLoading && (
        <div className={styles["gallery-figure--loading"]}>
          Loading image...
        </div>
      )}
      <figure className={styles["gallery-figure"]}>
        {galleryImage.imageUrl && (
          <div style={{ display: !isLoading ? "block" : "none" }}>
            <Image
              src={`https:${galleryImage.imageUrl}`}
              alt={galleryImage.alt}
              width={768}
              height={475}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 66vw"
              style={{ width: "100%", height: "auto" }}
              priority
              onLoadingComplete={() => setLoading(false)}
            />
          </div>
        )}
        {!isLoading && (
          <figcaption>
            <div>{currentModel?.thumbUrlAlt}</div>
            <ProductStockStatus
              status={currentModel?.ctaType as StockStatus}
              statusText={currentModel?.stockStatusText ?? "Learn more"}
            />
          </figcaption>
        )}
      </figure>
    </>
  );
};
