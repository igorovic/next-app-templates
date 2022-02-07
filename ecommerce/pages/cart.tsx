import { Counter } from "components/Counter";
import type { NextPage } from "next";
import Head from "next/head";
import { commerce } from "lib/commerce";
import { useQuery } from "react-query";
import { useEffect } from "react";
import Image from "next/image";

const Cart: NextPage = () => {
  const { data, isLoading } = useQuery(["cart"], async () =>
    commerce.cart.contents()
  );
  useEffect(() => {
    console.debug(data);
  }, [data]);

  return (
    <div>
      <Head>
        <title>Cart</title>
      </Head>

      <main className="container">
        <h1>Cart</h1>
        {isLoading ? <p>loading</p> : null}
      </main>
    </div>
  );
};

export default Cart;
