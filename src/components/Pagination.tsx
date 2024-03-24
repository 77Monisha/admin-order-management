import doubleLeftArrow from "../assets/chevrons-left.svg";
import singleLeftArrow from "../assets/chevron-left.svg";
import doubleRightArrow from "../assets/chevron-right.svg";
import singleRightArrow from "../assets/chevrons-right.svg";
import Image from "next/image";

interface PaginationProps {
  page: number;
}

const Pagination: React.FC<PaginationProps> = ({ page }) => {
  return (
    <div className="pagination">
      <div className="w-[180px] h-[32px] gap-[133px] flex justify-center items-center pl-8">
        <p className="current_page">Showing {page} to 10 of 10 entries</p>
      </div>
      <div className="h-[32px] w-[154px] gap-[8px] flex justify-center items-center">
        <p className="current_page">Rows per page: 10</p>
      </div>
      <div className="w-[188px] h-[32px] gap-[5px] flex flex-row space-x-2 ml-4 ">
        <button>
          <Image src={doubleLeftArrow} alt="Double left arrow" />
        </button>
        <button>
          <Image src={singleLeftArrow} alt="Double left arrow" />
        </button>
        <button className=" h-[32px] w-[32px] rounded-lg bg-[#377dff] text-white">
          {page}
        </button>
        <button>
          <Image src={singleRightArrow} alt="Double left arrow" />
        </button>
        <button>
          <Image src={doubleRightArrow} alt="Double left arrow" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
