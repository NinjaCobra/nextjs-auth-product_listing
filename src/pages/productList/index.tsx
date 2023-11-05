import ProductCard from "@/components/ProductCard";
import { useProductList } from "@/context/useProductList";
import { Product } from "@/types";

// interface Props {
//   products: Product[];
// }

const ProductListPage = () => {
  const { productList } = useProductList();

  return (
    <div className="product-list-page">
      <div className="container">
        {productList.map((product: Product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default ProductListPage;
