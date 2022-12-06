import React from "react";
import { Childitem } from "./Childitem";
export const Parentitem = ({ callback }) => {
  // const [c,u]=useState()
  const parentChange = (n) => {
    callback(n);
    // console.log(n);
  };
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <Childitem
            name={"Fancy Product"}
            price={"$40.00 - $80.00"}
            parentChange={parentChange}
          />
          <Childitem
            name={"Special Item"}
            price={"$20.00 - $18.00"}
            star={1}
            parentChange={parentChange}
          />
          <Childitem
            name={"Sale Item"}
            price={"$50.00 - $25.00"}
            parentChange={parentChange}
          />
          <Childitem
            name={"Popular Item"}
            price={"$$40.00"}
            star={1}
            parentChange={parentChange}
          />
          <Childitem
            name={"Sale Item"}
            price={"$25.00"}
            parentChange={parentChange}
          />
          <Childitem
            name={"Fancy Product"}
            price={"$280.00"}
            parentChange={parentChange}
          />
          <Childitem
            name={"Special Item"}
            price={"$18.00"}
            star={1}
            parentChange={parentChange}
          />
          <Childitem
            name={"Popular Item"}
            price={"$40.00"}
            star={1}
            parentChange={parentChange}
          />
        </div>
      </div>
    </section>
  );
};
