import type { NextPage } from "next";
import Head from "next/head";
import { commerce } from "lib/commerce";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
//@ts-ignore
import Lightbox from "react-datatrans-light-box";
import CustomerForm from "components/CustomerForm";
import CartItems from "components/CartItems";
import { useAppSelector } from "app/hooks";
import { customer } from "app/features/customer/customerSlice";
import { initTransaction } from "app/api/payment/transaction";

const Checkout: NextPage = () => {
  const _customer = useAppSelector(customer);
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

  const { data: datatransTransaction, refetch: datatransRefetch } = useQuery(
    ["datatrans", "init", "transation"],
    async () =>
      dataCart && dataCart.id ? initTransaction(dataCart?.id, _customer) : null,
    { enabled: false }
  );

  useEffect(() => {
    if (dataCart && !data) {
      console.debug(dataCart);
      refetch();
    }
  }, [data, dataCart, refetch]);

  async function proceedPayment() {
    await datatransRefetch();
    showLightbox(true);
  }

  const onLoaded = () => console.log("Loaded");
  const onOpened = () => console.log("Opened");
  const onError = () => console.error("ERROR *****");
  const onCancelled = () => showLightbox(false);

  return (
    <div>
      <Head>
        <title>Checkout</title>
      </Head>

      <main className="container">
        <h1>Checkout</h1>
        <div className="grid grid-cols-2">
          <CustomerForm />
          {isLoading ? (
            <p>...loading</p>
          ) : (
            <div className="flex flex-col max-w-sm">
              <CartItems items={dataCart?.line_items || []} />
              <div className="mt-8 flex justify-end font-bold">
                Total:&nbsp;{dataCart?.subtotal.formatted_with_code}
              </div>
            </div>
          )}
        </div>
        <div className="mt-8">
          <button className="btn" onClick={proceedPayment}>
            pay
          </button>
        </div>
        {lightbox ? (
          <Lightbox
            transactionId={datatransTransaction?.transactionId}
            production={false}
            onLoaded={onLoaded}
            onOpened={onOpened}
            onCancelled={onCancelled}
            onError={onError}
          />
        ) : null}
      </main>
    </div>
  );
};

export default Checkout;
