import Marquee from "react-fast-marquee";
import { Customer_Data } from "../Customer_Data/Customer_data";

const Customer_Marquee = () => {
  return (
    <Marquee>
      <div className="flex items-center gap-11">
        {Customer_Data.map((customer) => (
          <>
            <h2 key={customer.id} className="text-2xl font-bold">
              {customer.name}
            </h2>
          </>
        ))}
      </div>
    </Marquee>
  );
};

export default Customer_Marquee;
