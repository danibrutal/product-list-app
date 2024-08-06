import { ApiProduct, Model, ProductColor } from "@/types/types";
import { getModelByColor, getProductColorVariants } from "@/utils";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

// Define the types for the context values
interface ProductContextType {
  currentModel: Model | null;
  colorVariants: ProductColor[];
  selectModelByColor: (color: ProductColor) => void;
}

interface ProductProviderProps {
  children: ReactNode;
  product: ApiProduct;
}

const ModelContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({
  children,
  product,
}: ProductProviderProps) => {
  const [currentModel, setCurrentModel] = useState<Model>({} as Model);
  const [colorVariants, setColorVariants] = useState<ProductColor[]>([]);

  useEffect(() => {
    if (product.modelList.length > 0) {
      setCurrentModel(product.modelList[0]);
    }

    setColorVariants(getProductColorVariants(product));
  }, [product]);

  const selectModelByColor = (color: ProductColor) => {
    const model: Model = getModelByColor(product.modelList, color) as Model;
    setCurrentModel(model);
  };

  return (
    <ModelContext.Provider
      value={{ currentModel, colorVariants, selectModelByColor }}
    >
      {children}
    </ModelContext.Provider>
  );
};

export const useModel = () => {
  const context = useContext(ModelContext);
  if (context === undefined) {
    throw new Error("useModel must be used within a ProductProvider");
  }
  return context;
};
