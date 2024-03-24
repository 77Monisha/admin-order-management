import OrderTable from "./OrderTable";
import orderData from "../utilis/data.json";

const OrdersList = () => {
  const totalMachines = new Set(orderData.map((order) => order.machine)).size;
  const totalOrders = orderData.length;
  const totalCustomers = orderData.length; // Assuming one customer per order
  const totalDrinks = orderData.reduce(
    (sum, order) => sum + order.totalAmount,
    0
  );
  const totalFailedEntries = orderData.filter(
    (order) => order.status === "REFUND_INITIATED"
  ).length;
  const totalAmount = orderData.reduce(
    (sum, order) => sum + order.totalAmount,
    0
  );

  return (
    <div className="orderlist">
      <div className="order_items ">
        <div className="single_header ">
          <span className="item_name">Machine: {totalMachines}</span>
        </div>
        <div className="single_header">
          <span className="item_name">Order: {totalOrders}</span>
        </div>
        <div className="single_header">
          <span className="item_name">Customer: {totalCustomers}</span>
        </div>
        <div className="single_header">
          <span className="item_name">Drinks: {totalCustomers}</span>
        </div>
        <div className="single_header">
          <div className="item_name">Total Amount: {totalAmount}</div>
        </div>
        <div className="single_header">
          <span className="item_name">
            Refund Initiated: {totalFailedEntries}
          </span>
        </div>
      </div>

      <div className="order_table">
        <OrderTable />
      </div>
    </div>
  );
};

export default OrdersList;
