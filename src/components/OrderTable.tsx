"use client";
import { ChangeEventHandler, useState } from "react";
import order from "../utilis/data.json";
import Pagination from "./Pagination";
import { useRouter } from "next/navigation";

type PageNumber = number;
interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: ChangeEventHandler<HTMLInputElement>;
}

const OrderTable = () => {
  const router = useRouter();
  const [page, setPage] = useState<PageNumber>(1);
  1;

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th className="table_heading">S. No.</th>
            <th className="table_heading">DATE</th>
            <th className="table_heading">ORDER ID</th>
            <th className="table_heading">MACHINE NAME</th>
            <th className="table_heading">CUSTOMER NAME</th>
            <th className="table_heading">CONTACT NUMBER</th>
            <th className="table_heading">TOTAL AMOUNT</th>
            <th className="table_heading">STATUS</th>
          </tr>
        </thead>
        <tbody className="mr-4">
          {order.slice(page * 10 - 10, page * 10).map((order, index) => {
            return (
              <tr key={order.orderId}>
                <td className="table_body">{index + 1}.</td>
                <td className="table_body">
                  <div className="flex flex-col justify-start mr-4 mt-2">
                    <span>{order.date[0]}</span>
                    <span className="text-xs text-[#5d6679]">
                      {order.date[1]}
                    </span>
                  </div>
                </td>
                <td className="table_body">{order.orderId}</td>
                <td className="table_body">
                  <div className="flex flex-col justify-start mr-4 mt-2">
                    <span>{order.machine[0]}</span>
                    <span className="text-xs text-[#5d6679]">
                      {order.machine[1]}
                    </span>
                  </div>
                </td>
                <td className="table_body">{order.customer.name}</td>
                <td className="table_body">{order.customer.contactNumber}</td>
                <td className="table_body">{order.totalAmount}</td>
                <td className="table_body btn">
                  <button
                    className={`status_button status_${order.status.toLowerCase()}`}
                    onClick={() => router.push(`/order/${order.orderId}`)}
                  >
                    {order.status}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <Pagination page={page} />
      </div>
    </div>
  );
};

export default OrderTable;
