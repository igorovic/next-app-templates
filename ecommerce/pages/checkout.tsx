import type { NextPage } from "next";
import Head from "next/head";
import { commerce } from "lib/commerce";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
//@ts-ignore
import Lightbox from "react-datatrans-light-box";

const Checkout: NextPage = () => {
  const [lightbox, showLightbox] = useState(false);
  const { data: dataCart } = useQuery(["cart", "retrieve"], async () =>
    commerce.cart.retrieve()
  );
  const { data, isLoading, refetch } = useQuery(
    ["checkout", "cart", dataCart?.id],
    async () => {
      if (dataCart?.id) {
        return commerce.checkout.generateTokenFrom("cart", dataCart.id);
      }
      return undefined;
    },
    { enabled: false }
  );
  useEffect(() => {
    if (dataCart && !data) {
      console.debug(dataCart.id);
      refetch();
    }
  }, [data]);

  return (
    <div>
      <Head>
        <title>Checkout</title>
      </Head>

      <main className="container">
        <h1>Checkout</h1>
        {isLoading ? <p>loading</p> : null}
        <button
          className="btn"
          onClick={() => {
            showLightbox(true);
          }}
        >
          pay
        </button>
      </main>
    </div>
  );
};

export default Checkout;
