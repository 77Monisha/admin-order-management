import { useState } from "react";
import orderData from "../utilis/data.json";

const Modal = ({
  closeModal,
  onApplyFilters,
}: {
  closeModal: any;
  onApplyFilters: any;
}) => {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedMachines, setSelectedMachines] = useState<string[]>([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleApplyFilters = () => {
    // Pass the selected values to the parent component
    onApplyFilters({ selectedMachines, selectedStatus, startDate, endDate });
    closeModal();
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="fixed inset-0 bg-black opacity-70"></div>

      <div className="relative w-[890px] max-w-lg mx-auto my-6">
        <div className="relative flex flex-col bg-white border-2 border-gray-300 rounded-3xl shadow-lg outline-none focus:outline-none">
          <div className="flex items-center justify-center p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-xl font-semibold ml-[200px]">FILTER</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-[#D92D20] opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={closeModal}
            >
              <span>X</span>
            </button>
          </div>

          <div className="relative p-10 flex-auto w-full text-[14px] text-[#333333] ">
            <div className="w-[400px]">
              <input
                type="text"
                placeholder="Search"
                className="filter-filter border-2 rounded-xl py-4 px-4 mb-8 text-[#377dff]"
              />
            </div>
            <div className="mb-8 space-y-8 space-x-4 border-2 border-gray-300 rounded-xl p-4">
              <p className="font-semibold mb-2 text-[#377dff] ">
                Machines Names:
              </p>
              <div className="flex flex-col space-y-4">
                <label className="inline-flex ">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-500"
                  />
                  <span className="ml-2">"Aahaar Stall 3", "WH01"</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-500"
                  />
                  <span className="ml-2">"Aahaar Stall 5", "WH03"</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-500"
                  />
                  <span className="ml-2">"Aahaar Stall 2", "WH03"</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-500"
                  />
                  <span className="ml-2">"Aahaar Stall 4", "WH01"</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-500"
                  />
                  <span className="ml-2">"Aahaar Stall 5", "WH02"</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-500"
                  />
                  <span className="ml-2">"Aahaar Stall 3", "WH04"</span>
                </label>
              </div>
            </div>

            <div className="mb-4 space-y-2 space-x-2 border-2 border-gray-300 rounded-xl p-4">
              <p className="font-semibold mb-2 text-[#377dff]">
                Select Status:
              </p>
              <div className="flex flex-row space-x-6 flex-wrap space-y-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-indigo-500"
                    name="status"
                    value="success"
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  />
                  <span className="ml-2">Success</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-indigo-500"
                    name="status"
                    value="success"
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  />
                  <span className="ml-2">Pending</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-indigo-500"
                    name="status"
                    value="Pending"
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  />
                  <span className="ml-2">Sent</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-indigo-500"
                    name="status"
                    value="Sent"
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  />
                  <span className="ml-2">Failure</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-indigo-500"
                    name="status"
                    value="Failure"
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  />
                  <span className="ml-2">Refund Completed</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-indigo-500"
                    name="status"
                    value="Refund Completed"
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  />
                  <span className="ml-2">Refund Initiated</span>
                </label>
              </div>
            </div>
            <div className="mb-4 border-2 border-gray-300 rounded-xl p-4">
              <p className="font-semibold mb-2 text-[rgb(55,125,255)] p-2">
                Select Date Range:
              </p>
              <div className="flex flex-row justify-center ic">
                <input
                  type="date"
                  className="border rounded py-2 px-6 mr-2"
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <span className="m-4 mt-2">to</span>
                <input
                  type="date"
                  className="border rounded py-2 px-6 mr-4"
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
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
