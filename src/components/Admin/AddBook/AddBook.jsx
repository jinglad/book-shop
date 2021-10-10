import Sidebar from "../Sidebar/Sidebar";
import styled from "styled-components";
import cloud from "../../../images/icons/cloud.png";

const AddBook = () => {
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-md-2 mr-5">
        <Sidebar />
      </div>
      <div className="col-md-8 mt-3">
        <h3>Add Book</h3>
        <div style={{padding:"30px", background: "#F4F7FC", height:"600px"}}>
        <AddBookContainer>
          <div className="d-flex justify-content-between">
            <div className="form-group w-75">
              <label>Book Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
              />
            </div>
            <div className="form-group w-75 ml-5">
              <label>Author Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
              />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="form-group w-75">
              <label>Add Price</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
              />
            </div>
            <div className="form-group w-75 ml-5">
              <p style={{margin:"0", fontWeight:"600"}}>Add Book Cover Photo</p>
              <Label>
                <input type="file" className="form-control-file" />
                <img src={cloud} style={{width:"15%"}} />
                Upload Image
              </Label> 
            </div>
          </div>
        </AddBookContainer>
        <button className="btn btn-primary float-right">Save</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddBook;

const AddBookContainer = styled.div`
  box-shadow: 0 0 20px lightgray;
  padding:20px;
  border-radius:10px;
  margin-top:50px;
  margin-bottom:20px;
  background: white;
`;

const Label = styled.label`
  border: 1px solid #6946f4;
  background-color: #6946f424;
  color: #6946f4;
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
  margin-top:8px;
  cursor: pointer;
  & input{
    display:none;
  }
`;