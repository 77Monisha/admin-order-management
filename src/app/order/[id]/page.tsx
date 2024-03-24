import Search from "@/components/Search";
import Sidebar from "@/components/Sidebar";
import OrderRecepit from "@/components/OrderRecepit";
import Image from "next/image";
import maginefineGlass from "../../../assets/maginifineGlass.svg";
import avatar from "../../../assets/avatar.svg";

interface OrderParams {
  orderId: string;
}

const Page = () => {
  return (
    <>
      <div className="w-full h-full flex flex-wrap">
        <section>
          <Sidebar />
        </section>
        <div>
          <div className="header">
            <div className="header-left">
              <h1 className="all_orders">All Orders</h1>
              <span className="text-sm underline text-[#377dff] cursor-pointer">
                All orders
              </span>
            </div>
            <div className="header-right">
              <input
                type="text"
                placeholder={`Search`}
                className="border-2 border-gray-300 rounded-md pl-6 text-sm h-[36px] gap-[16px] w-[227px] ml-8 flex flex-row mr-[24px]"
              />
              <Image
                src={maginefineGlass}
                alt="Magnifine Glass"
                className="inline m-[-252px]"
              />
              <div>
                <Image src={avatar} alt="Avatar" className="mr-[48px]" />
              </div>
            </div>
          </div>

          <Search />
          <div className="refund_button">
            <button>Refund Complete Order</button>
          </div>
          <OrderRecepit />
        </div>
      </div>
    </>
  );
};

export default Page;
