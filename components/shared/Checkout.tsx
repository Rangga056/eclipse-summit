import { IEvent } from "@/lib/database/models/event.model"
import { Button } from "../ui/button"

const Checkout = ({ event, userId }: { event: IEvent, userId: string }) => {
  const onCheckout = async() => {
    console.log("CHECKOUT")
  }

  return (
    <form action={onCheckout} method="post">
      <Button>

      </Button>
    </form>
  )
}

export default Checkout