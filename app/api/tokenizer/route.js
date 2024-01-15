import Midtrans from "midtrans-client";
import { NextResponse } from "next/server";

let snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.Server_Key,
  clientKey: process.env.Client_Key,
});

export async function POST(request) {
  const { id, productName, price, quantity, email, username } =
    await request.json();
  let parameter = {
    item_details: {
      name: productName,
      price: price,
      quantity: quantity,
    },
    transaction_details: {
      order_id: id,
      gross_amount: price,
    }
  };

  const token = await snap.createTransactionToken(parameter);
  console.log(token);
  return NextResponse.json({ token });
}
