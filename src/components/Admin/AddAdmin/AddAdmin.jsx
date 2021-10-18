import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const AddAdmin = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://aeolian-bottlenose-earthquake.glitch.me/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email}),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Admin Added...!");
          setEmail("");
        }
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 mt-5">
          <Sidebar />
        </div>
        <div className="col-md-8 offset-md-1 mt-5">
          <h1 className="font-weight-bold">Make Admin</h1>
          <div className="bg-light p-5 rounded">
            <form className="d-flex">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder="john@gmail.com"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="ml-3" style={{marginTop:"35px"}} >
                <input
                  type="submit"
                  className="btn btn-success form-control-lg"
                  value="Submit"
                  onClick={handleSubmit}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;