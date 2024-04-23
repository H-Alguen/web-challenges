import useSWR from "swr";
import Link from "next/link";

export default function ProductsPage() {
  const { data, isLoading } = useSWR("/api/products");

  if (isLoading) {
    return <h1>is loading...</h1>;
  }

  if (!data) {
    return;
  }
  console.log(data);

  return (
    <ul>
      {data.map((product) => {
        return (
          <li key={product.name}>
            <h2>Product: {product.name}</h2>
            <p>Description: {product.description}</p>
            <p>Category:{product.category}</p>
            <h4>Price:{product.price}</h4>
          </li>
        );
      })}
    </ul>
  );
}
