import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "./ProductList.module.css";

function ProductList() {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get("http://localhost:4000/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  console.log(products);

  return (
    <ul>
      {products &&
        products.map((product) => {
          return (
            <li key={product.id} className={styles.item}>
              <div>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={300}
                  height={250}
                ></Image>
              </div>
              <div>{product.name}</div>
            </li>
          );
        })}
    </ul>
  );
}

export default ProductList;
