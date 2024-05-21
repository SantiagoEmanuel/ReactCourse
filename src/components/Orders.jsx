import { OrdersContainer } from "./containers/OrdersContainer";
import { OrdersEmpty } from "./ui/order/OrderEmpty";

export function Orders({ orders }) {
  const ShowOrders = ({ orders }) => {
    if (orders.length == 0) {
      return <OrdersEmpty />;
    } else {
      return <OrdersContainer orders={orders} />;
    }
  };

  return <ShowOrders orders={orders} />;
}
