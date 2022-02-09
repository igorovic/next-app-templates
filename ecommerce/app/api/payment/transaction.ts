import ky from "ky";
import { commerce } from "lib/commerce";
import { product2Article } from "lib/commerce/product2Article";
import { CustomerRequest } from "types/CustomerRequest";

export async function initTransaction(
  refno: string,
  customer: CustomerRequest
): Promise<{ transactionId: string }> {
  const cart = await commerce.cart.retrieve(refno);

  return ky
    .post("/api/v1/payment/transaction", {
      json: {
        refno,
        currency: cart.currency.code,
        customer: customer,
        order: {
          articles: product2Article(cart.line_items),
        },
      },
    })
    .json();
}
