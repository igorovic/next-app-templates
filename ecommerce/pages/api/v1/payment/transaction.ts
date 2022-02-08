// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { initTransaction } from "lib/datatrans/init";

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const payload = req.body;
  let transaction;
  try {
    transaction = await initTransaction({
      ...payload,
      redirect: {
        successUrl: "http://localhost:3000/payment/result",
        cancelUrl: "http://localhost:3000/payment/result",
        errorUrl: "http://localhost:3000/payment/result",
      },
    });
  } catch (e) {
    console.error(e);
  }
  res.status(200).json(transaction);
};
