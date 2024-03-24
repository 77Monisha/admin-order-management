"use client";
import { useState } from "react";
import Modal from "../components/Modal";

const Filter = () => {
  const [showModal, setShowModal] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState<any>({
    search: "",
    selectedMachines: [],
    status: "",
    startDate: "",
    endDate: "",
  });

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleClearAll = () => {
    setAppliedFilters({
      search: "",
      selectedMachines: [],
      status: "",
      startDate: "",
      endDate: "",
    });
  };

  const handleApplyFilters = (filters: any) => {
    setAppliedFilters(filters);
  };

  return (
    <>
      <div className="filter">
        <div className="filter_box">
          <h1 className="filter_heading">FILTERS</h1>
        </div>
        <div className="filter_settings space-x-2 ">
          <button className="border" onClick={openModal}>
            Select Filter
          </button>
          {showModal && (
            <Modal
              closeModal={closeModal}
              onApplyFilters={handleApplyFilters}
            />
          )}
          <button className="border border_clear" onClick={handleClearAll}>
            Clear All
          </button>
        </div>

        <div className="flex flex-col space-y-4 mt-4 text-[14px] text-[#333333] ">
          <h2 className="text-lg font-extrabold">Applied Filters:</h2>
          <p>Selected Machines: {appliedFilters.selectedMachines.join(", ")}</p>
          <p>Status: {appliedFilters.status}</p>
          <p>Start Date: {appliedFilters.startDate}</p>
          <p>End Date: {appliedFilters.endDate}</p>
        </div>
      </div>
    </>
  );
};

export default Filter;
