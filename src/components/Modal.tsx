"use client";
import { useState } from "react";
import orderData from "../utilis/data.json";

const Modal = ({ closeModal }: { closeModal: any }) => {
  const machines = Array.from(new Set(orderData.map((order) => order.machine)));
  const [search, setSearch] = useState("");
  const [selectedMachines, setSelectedMachines] = useState<string[]>([]);
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleApplyFilters = () => {
    // Logic to apply filters
    console.log("Search:", search);
    console.log("Selected Machines:", selectedMachines);
    console.log("Status:", status);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none ">
      <div className="fixed inset-0 bg-black opacity-70"></div>

      <div className="relative w-[890px] max-w-lg mx-auto my-6">
        <div className="relative flex flex-col bg-white border-2 border-gray-300 rounded-3xl shadow-lg outline-none focus:outline-none">
          <div className="flex items-center justify-center p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-xl font-semibold ">Filter Orders</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={closeModal}
            >
              <span className="text-black">X</span>
            </button>
          </div>

          <div className="relative p-6 flex-auto">
            <input
              type="text"
              placeholder="Search"
              className="w-full border rounded-xl py-2 px-3 mb-3"
            />
            <div className="mb-4">
              <p className="font-semibold mb-2">Select Machines:</p>
              {machines.map((machine, index) => (
                <label key={index} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-500"
                  />
                  <span className="ml-2">{machine}</span>
                </label>
              ))}
            </div>

            <div className="mb-4 space-y-2 space-x-2 ">
              <p className="font-semibold mb-2">Select Status:</p>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-indigo-500"
                  name="status"
                  value="success"
                />
                <span className="ml-2">Success</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio text-indigo-500"
                  name="status"
                  value="pending"
                />
                <span className="ml-2">Pending</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio text-indigo-500"
                  name="status"
                  value="failed"
                />
                <span className="ml-2">Failed</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio text-indigo-500"
                  name="status"
                  value="failed"
                />
                <span className="ml-2">Sent</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio text-indigo-500"
                  name="status"
                  value="failed"
                />
                <span className="ml-2">Refund Completed</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio text-indigo-500"
                  name="status"
                  value="failed"
                />
                <span className="ml-2">Refund Initiated</span>
              </label>
            </div>
            <div className="mb-4">
              <p className="font-semibold mb-2">Select Date Range:</p>
              <input type="date" className="border rounded py-2 px-3 mr-2" />
              <span className="mr-2">to</span>
              <input type="date" className="border rounded py-2 px-3" />
            </div>
          </div>
          <div className="flex items-center justify-between p-2 border-t border-solid border-gray-300 rounded-b">
            <button
              className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={closeModal}
            >
              Close
            </button>
            <button
              className="bg-[#377dff] text-white active:bg-[#377dff] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={handleApplyFilters}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
