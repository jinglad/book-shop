import Sidebar from "../Sidebar/Sidebar";
import styled from "styled-components";
import cloud from "../../../images/icons/cloud.png";
import { useState } from "react";
import { useHistory } from "react-router";

const AddBook = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);
  const history = useHistory();

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("author", author);
    formData.append("price", price);

    fetch("https://aeolian-bottlenose-earthquake.glitch.me/add-book", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((success) => {
        if (success) {
          alert("Book is added...");
          history.push("/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-8 offset-md-1 mt-3">
          <h3>Add Book</h3>
          <div
            style={{ padding: "30px", background: "#F4F7FC", height: "600px" }}
          >
            <AddBookContainer>
              <div className="d-flex justify-content-between">
                <div className="form-group w-75">
                  <label>Book Name</label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group w-75 ml-5">
                  <label>Author Name</label>
                  <input
                    type="text"
                    placeholder="Enter Author"
                    className="form-control"
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="form-group w-75">
                  <label>Add Price</label>
                  <input
                    type="text"
                    placeholder="Enter Price"
                    className="form-control"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="form-group w-75 ml-5">
                  <p style={{ margin: "0", fontWeight: "600" }}>
                    Add Book Cover Photo
                  </p>
                  <Label>
                    <input
                      type="file"
                      className="form-control-file"
                      onChange={handleFileChange}
                    />
                    <img src={cloud} style={{ width: "15%" }} />
                    Upload Image
                  </Label>
                </div>
              </div>
            </AddBookContainer>
            <button
              onClick={handleSubmit}
              className="btn btn-primary float-right"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;

export const AddBookContainer = styled.div`
  box-shadow: 0 0 20px lightgray;
  padding: 20px;
  border-radius: 10px;
  margin-top: 50px;
  margin-bottom: 20px;
  background: white;
`;

export const Label = styled.label`
  border: 1px solid #6946f4;
  background-color: #6946f424;
  color: #6946f4;
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
  margin-top: 8px;
  cursor: pointer;
  & input {
    display: none;
  }
`;
