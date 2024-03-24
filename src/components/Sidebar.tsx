"use client";
import Image from "next/image";
import home from "../assets/home.svg";
import location from "../assets/location.svg";
import firm from "../assets/firm.svg";
import food from "../assets/food.svg";
import tabs from "../assets/tabs.svg";
import user from "../assets/user.svg";
import discount from "../assets/discount.svg";
import settings from "../assets/settings.svg";
import bills from "../assets/bills.svg";
import { useRouter } from "next/navigation";

const Sidebar = async () => {
  const router = useRouter();

  return (
    <div className="h-[1105px] w-[80px] border-2 border-gray-300 sidebar">
      <div>
        <button onClick={() => router.push(`/`)}>
          <Image
            src="https://s3-alpha-sig.figma.com/img/b21c/8759/5394a13e5ebff15cc92349cfc30ad6ea?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gSthAwWVWdo3tnKxUsrTA6fp8p4E7oOOhWM82RYhCstGS1C3jTV3b1~Le-3bU0~Otz1zIQsUm8oxa-K35~co5-ZH7H8oMZeUPtasoPCsb8jWaW8i52oWuqpo31cCmfIBQz7r8cM7CMAwci5a4uELOKlfArJ51bCG0DTGED7kmrXnV-QlGSho7EgwXCq6wvDfHrQazfuLSlFONmGkGQ76E4JAiGYPJcMcrsVrqU39w8p4RwPj70Oe0plimBFB~i8BfDhDJ0iAbquyHxCnqFw9C4xArTUn2vGO1XvPUqW6hTP8hm8Qm8ni3UyQFMTxKQuvMOo5bSduvsBW1CbU7KTwTw__"
            alt="Basil"
            width={32}
            height={32}
            className="cursor-pointer"
          />
        </button>
      </div>

      <div className="mt-10">
        <div className="w-full h-[406px] logo ">
          <div className="w-[36px] h-[36px]">
            <Image src={home} alt="Home" width={24} height={24} />
          </div>
          <div className="w-[36px] h-[36px]">
            <Image src={location} alt="Home" width={24} height={24} />
          </div>
          <div className="w-[36px] h-[36px] ">
            <Image src={firm} alt="Home" width={24} height={24} />
          </div>
          <div className="w-[36px] h-[36px]">
            <Image src={user} alt="Home" width={24} height={24} />
          </div>
          <div className="w-[36px] h-[36px]">
            <Image src={food} alt="Home" width={24} height={24} />
          </div>
          <div className="w-[36px] h-[36px]">
            <Image src={bills} alt="Home" width={24} height={24} />
          </div>
          <div className="w-[36px] h-[36px]">
            <Image src={discount} alt="Home" width={24} height={24} />
          </div>
        </div>
        <div className="settings flex flex-wrap">
          <div className="w-[36px] h-[36px]">
            <Image src={settings} alt="Home" width={24} height={24} />
          </div>
          <div className="w-[36px] h-[36px]">
            <Image src={tabs} alt="Home" width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
