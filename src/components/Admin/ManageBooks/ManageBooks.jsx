import Sidebar from "../Sidebar/Sidebar";
import EditBtn from "../../../images/icons/editbtn.png";
import DeleteBtn from "../../../images/icons/deletebtn.png";

const ManageBooks = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-8 mt-4">
          <h3>Manage Books</h3>
          <div
            style={{ padding: "30px", background: "#F4F7FC" }}
          >
            <div
              style={{
                padding: "10px 30px",
                background: "white",
                borderRadius: "10px",
              }}
            >
              <div className="row p-2 bg-light rounded font-weight-bold">
                <div className="col-md-4">Book Name</div>
                <div className="col-md-4">Author Name</div>
                <div className="offset-md-1 col-md-1">Price</div>
                <div className="offset-md-1 col-md-1 text-center">Action</div>
              </div>
              <div className="row mt-2">
                <div className="col-md-4">Javascript EveryWhere</div>
                <div className="col-md-4">Adam D. Scottark Lutz</div>
                <div className="offset-md-1 col-md-1">$234</div>
                <div className="offset-md-1 col-md-1">
                    <img src={EditBtn} alt="" style={{width:"30px", marginRight:"5px", cursor: "pointer"}} />
                    <img src={DeleteBtn} alt="" style={{width:"30px",cursor: "pointer"}} />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-4">Javascript EveryWhere</div>
                <div className="col-md-4">Adam D. Scottark Lutz</div>
                <div className="offset-md-1 col-md-1">$234</div>
                <div className="offset-md-1 col-md-1">
                    <img src={EditBtn} alt="" style={{width:"30px", marginRight:"5px", cursor: "pointer"}} />
                    <img src={DeleteBtn} alt="" style={{width:"30px",cursor: "pointer"}} />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-4">Javascript EveryWhere</div>
                <div className="col-md-4">Adam D. Scottark Lutz</div>
                <div className="offset-md-1 col-md-1">$234</div>
                <div className="offset-md-1 col-md-1">
                    <img src={EditBtn} alt="" style={{width:"30px", marginRight:"5px", cursor: "pointer"}} />
                    <img src={DeleteBtn} alt="" style={{width:"30px",cursor: "pointer"}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBooks;
