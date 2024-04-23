import useSWR from "swr";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProductsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>is loading...</h1>;
  }

  if (!data) {
    return;
  }
  console.log(data);

  return (
    <>
      <h2>Product: {data.name}</h2>
      <p>Description: {data.description}</p>
      <p>Category:{data.category}</p>
      <h4>Price:{data.price}</h4>
    </>
  );
}
