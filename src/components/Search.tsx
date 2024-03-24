"use client";
import Image from "next/image";
import maginefineGlass from "../assets/maginifineGlass.svg";
import excel from "../assets/excel.svg";
import pdf from "../assets/pdf.svg";
import jsPDF from "jspdf";

const Search = () => {
  const pdfUrl = "path/to/your/existing.pdf";

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.save("download.pdf");
  };

  return (
    <div className="search">
      <div className="search_box">
        <input
          type="text"
          placeholder={`Search`}
          className="border-2 border-gray-300 rounded-md pl-6 text-sm h-[36px] gap-[16px] w-[227px] ml-8"
        />
        <Image
          src={maginefineGlass}
          alt="Magnifine Glass"
          className="inline m-[-220px]"
        />
      </div>

      <div className="options flex flex-row-reverse">
        <div className="w-[36px] h-[36px]">
          <button onClick={handleDownloadPDF}>
            <Image src={pdf} alt="Download PDf" width={24} height={24} />
          </button>
        </div>
        <div className="w-[36px] h-[36px]">
          <button>
            <Image src={excel} alt="Download Excel" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
