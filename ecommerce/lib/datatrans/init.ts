import client from "./client";

export interface InitTransaction {
  currency: "CHF" | "EUR";
  refno: string;
  [k: string]: any;
}

/**
 * @see {@link https://api-reference.datatrans.ch/#tag/v1transactions}
 * @param transaction
 * @returns
 */
export async function initTransaction(transaction: InitTransaction) {
  const response = await client.post("/v1/transactions", transaction, {
    auth: {
      username: String(process.env.DATATRANS_MARCHANT_ID),
      password: String(process.env.DATATRANS_MARCHANT_PWD),
    },
  });
  const { data } = response;
  return data;
}
