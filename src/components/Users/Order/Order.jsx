import { useContext, useEffect } from "react";
import { useState } from "react";
import { AdminContext } from "../../../App";
import Sidebar from "../../Admin/Sidebar/Sidebar";
import SingleOrder from "./SingleOrder";


const Order = () => {
  const [orders, setOrders] = useState([]);
  const [admin, setAdmin] = useContext(AdminContext);
  useEffect(() => {
    if(!admin) {
      fetch(`https://aeolian-bottlenose-earthquake.glitch.me/order?email=${sessionStorage.getItem("email")}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setOrders(data);
    })
    } else if(admin) {
      fetch("https://aeolian-bottlenose-earthquake.glitch.me/allOrder")
      .then(res => res.json())
      .then(data => {
        setOrders(data);
      })
    }
  },[]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-8  mt-3 offset-md-1">
          <h3 className="mb-3">Order List</h3>
          <div className="bg-light p-5 rounded mb-4">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  {/* <th scope="col">Name</th> */}
                  <th scope="col">Email ID</th>
                  <th scope="col">Book Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 &&
                  orders.map((order, i) => (
                    <SingleOrder
                      key={i}
                      // setRejected={setRejected}
                      order={order}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
