"use client";
import { useParams } from "next/navigation";
import OrderChart from "./OrderChart";
import orderData from "../utilis/data.json";
import { useEffect, useState } from "react";

const OrderRecepit = () => {
  const [order, setOrder] = useState<any>({});
  const { id } = useParams();

  useEffect(() => {
    setOrder(orderData.find((order) => order.orderId === id));
  }, []);

  return (
    <div className="order_recepit">
      <div className="order_bill space-y-10">
        <div className="flex justify-between p-2">
          <p className="text-[#377dff] font-extrabold">{order.orderId}</p>
          <button
            className={`status_button status_${order?.status?.toLowerCase()}`}
          >
            {order.status}
          </button>
        </div>
        <div className="space-y-4">
          <h1 className="order_headings">BASIC INFORMATION</h1>
          <div className="flex flex-row justify-between space-x-16">
            <div>
              <p className="info_head">Date and Time</p>
              <p className="info_data">{order.date && order.date[1]}</p>
            </div>
            <div>
              <p className="info_head">Machine</p>
              <p className="info_data">{order.machine && order.machine[0]}</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="order_headings">ORDER SUMMARY</h1>
          <div className="flex flex-row justify-between space-x-16">
            <div>
              <p className="info_head">Payment ID</p>
              <p className="info_data">TX1042480129481</p>
            </div>
            <div>
              <p className="info_head">Total Amount</p>
              <p className="info_data">{order.totalAmount}</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="order_headings">CUSTOMER INFORMATION</h1>
          <div className="flex flex-row flex-nowrap justify-between space-y-4">
            <div>
              <p className="info_head">Name</p>
              <p className="info_data">
                {order.customer && order.customer.name}
              </p>
            </div>
            <div>
              <p className="info_head">Contact Number</p>
              <p className="info_data">
                {order.customer && order.customer.contactNumber}
              </p>
            </div>
            <br />
          </div>
          <div className="">
            <p className="info_head">Email</p>
            <p className="info_data">simranjeet.kaur@basil.health</p>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="order_headings">REFUND INFORMATION</h1>
          <div className="flex flex-row space-x-4">
            <div>
              <p className="info_head">Refund Transaction ID</p>
              <p className="info_data">TX1042480129481</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <OrderChart />
      </div>
    </div>
  );
};

export default OrderRecepit;
