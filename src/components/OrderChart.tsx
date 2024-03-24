import drink from "../utilis/drink.json";
import Image from "next/image";

const OrderChart = () => {
  return (
    <div className="order_chart">
      <div className="chart">
        <h1 className="chart_header">ORDER DETAILS</h1>
        <div className="order_table">
          <div className="chart_layout">
            <table>
              <thead>
                <tr className="p-[32px]">
                  <th className="table_heading">ID</th>
                  <th className="table_heading">DRINK NAME</th>
                  <th className="table_heading">CUSTOMISATION</th>
                  <th className="table_heading">AMOUNT</th>
                  <th className="table_heading">DRINK STATUS</th>
                  <th className="table_heading">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {drink.slice(0, 4).map((drink) => {
                  return (
                    <tr key={drink.id} className="p-[32px]">
                      <td className="table_body">{drink.id}.</td>
                      <td className="table_body flex flex-row justify-start items-center mt-1">
                        <Image
                          src="https://s3-alpha-sig.figma.com/img/b21c/8759/5394a13e5ebff15cc92349cfc30ad6ea?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gSthAwWVWdo3tnKxUsrTA6fp8p4E7oOOhWM82RYhCstGS1C3jTV3b1~Le-3bU0~Otz1zIQsUm8oxa-K35~co5-ZH7H8oMZeUPtasoPCsb8jWaW8i52oWuqpo31cCmfIBQz7r8cM7CMAwci5a4uELOKlfArJ51bCG0DTGED7kmrXnV-QlGSho7EgwXCq6wvDfHrQazfuLSlFONmGkGQ76E4JAiGYPJcMcrsVrqU39w8p4RwPj70Oe0plimBFB~i8BfDhDJ0iAbquyHxCnqFw9C4xArTUn2vGO1XvPUqW6hTP8hm8Qm8ni3UyQFMTxKQuvMOo5bSduvsBW1CbU7KTwTw__"
                          alt="Basil"
                          width={28}
                          height={28}
                          className="mt-1 me-2"
                        />
                        {drink.drinkName}
                      </td>
                      <td className="table_body">{drink.customization}</td>
                      <td className="table_body">₹{drink.amount}</td>
                      <td className="table_body btn">
                        <button
                          className={`status_button status_${drink.drinkStatus.toLowerCase()} mr-8`}
                        >
                          {drink.drinkStatus}
                        </button>
                      </td>
                      <td className="table_body btn">
                        <button
                          className={`action_button status_${drink.action.toLowerCase()}`}
                        >
                          {drink.action}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderChart;
