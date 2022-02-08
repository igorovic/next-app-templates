import { commerce } from "lib/commerce";
import type { Product } from "@chec/commerce.js/types/product";
import Image from "next/image";

interface Props {
  products: Product[];
}
export default function ProductsGrid({ products }: Props) {
  function addToCart(id: string) {
    commerce.cart.add(id, 1);
  }
  return (
    <div className="grid grid-cols-12 m-4">
      {products.map((product, index) => {
        return (
          <div key={`product-${index}`} className="card  col-span-4 p-2 border">
            {product && product.image ? (
              <figure>
                <Image
                  layout="responsive"
                  objectFit="cover"
                  key={`image-${index}`}
                  width={400}
                  height={400}
                  src={product.image.url}
                />
              </figure>
            ) : null}
            <div className="card-body relative">
              <p key={`product-${index}`}>{product.name}</p>
              <p>{product.price.formatted_with_code}</p>
              <details
                className="absolute bottom-0 left-0 ml-8 z-50 bg-white px-2 cursor-pointer"
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></details>
            </div>
            <div className="justify-end card-actions">
              <button
                className="btn"
                onClick={() => {
                  addToCart(product.id);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
