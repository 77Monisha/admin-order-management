import Image from "next/image";
import orders from "../assets/orders.svg";
import headerright from "../assets/headerright.svg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <Image src={orders} alt="Orders Heading" />
        </div>
        <div className="header-right">
          <Image src={headerright} alt="Orders Heading" />
        </div>
      </div>
      <div className="search"></div>
    </>
  );
};

export default Header;
