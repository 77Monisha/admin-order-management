"use client";
import { useState } from "react";
import Modal from "./Modal";

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
          {showModal && <Modal closeModal={closeModal} />}
          <button className="border border_clear" onClick={handleClearAll}>
            Clear All
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
