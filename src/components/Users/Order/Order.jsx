import Sidebar from "../Sidebar/Sidebar";
import SingleOrder from "./SingleOrder";

const orders = [
  { 
    id:1,
    email: "test@example.com",
    books: [
      {
        id:2,
        name:"Javascript Book",
        author: "Jin Glad"
      },
      {
        id:3,
        name:"Python Book",
        author: "Jin Glad"
      },
    ]
  }
]

const Order = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 mt-5">
          <Sidebar />
        </div>
        <div className="col-md-9 mt-5">
          <h1 className="font-weight-bold mb-3">Order List</h1>
          <div className="bg-light p-5 rounded mb-4">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email ID</th>
                  <th scope="col">Service</th>
                  <th scope="col">Project Details</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 &&
                  orders.map((order, i) => (
                    <SingleOrder
                      key={i}
                      setRejected={setRejected}
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
