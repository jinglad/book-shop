import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { AddBookContainer, Label } from "../AddBook/AddBook";
import Sidebar from "../Sidebar/Sidebar";
import cloud from "../../../images/icons/cloud.png"

const UpdateBook = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);
  const history = useHistory();

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("author", author);
    formData.append("price", price);
      fetch(`https://aeolian-bottlenose-earthquake.glitch.me/updateBook/${id}`,{
          method:"PATCH",
          body:formData
      })
      .then(res => res.json())
      .then(success => {
          alert("updated successfully...");
          history.push("/manage-books");
      })
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-8 mt-3 offset-md-1">
          <h3>Update Book</h3>
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
                    placeholder="Enter Name"
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
                    placeholder="Enter Name"
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
                onClick={handleUpdate}
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

export default UpdateBook;
