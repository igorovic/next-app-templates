import type { NextPage } from "next";
import Head from "next/head";
import { commerce } from "lib/commerce";
import { useQuery } from "react-query";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CartItems from "components/CartItems";

const Cart: NextPage = () => {
  const { data, isLoading } = useQuery(["cart", "contents"], async () =>
    commerce.cart.contents()
  );
  useEffect(() => {
    console.debug(data);
  }, [data]);

  return (
    <div className="m-4">
      <Head>
        <title>Cart</title>
      </Head>

      <main className="container">
        <h1>Cart</h1>
        {isLoading ? <p>loading</p> : <CartItems items={data || []} />}
        <div className="mt-8">
          <Link href="/checkout" passHref>
            <a className="btn">checkout</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Cart;
