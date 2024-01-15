"use client"
import { IEvent } from "@/lib/database/models/event.model"
import { Button } from "../ui/button"
import { useEffect } from "react";

const Checkout = ({ event }: {event: IEvent}) => {
  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.Client_Key ?? "";
    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;
    
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  const onCheckout = async () => {
    const data = {
      id: ~~(Math.random() * 100) + 1,
      productName: event.title,
      price: Number(event.price) * 15000 ,
      quantity: 1,
    }

    const response = await fetch("/api/tokenizer", {
      method: "POST",
      body: JSON.stringify(data)
    })

    const requestData = await response.json()
    window.snap.pay(requestData.token)
  }

  return (
    <form action={onCheckout}>
      <Button type="submit" role="link" size="lg" className="button sm:w-fit">
        {event.isFree ? "Get Ticket" : "Buy Ticket"}
      </Button>
    </form>
  )
}

export default Checkout