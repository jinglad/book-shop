import Sidebar from "../Sidebar/Sidebar";
import EditBtn from "../../../images/icons/editbtn.png";
import DeleteBtn from "../../../images/icons/deletebtn.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const [books, setBooks] = useState([]);
  const [deleted, setDeleted] = useState(1);

  useEffect(() => {
    fetch("https://aeolian-bottlenose-earthquake.glitch.me/books")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooks(data);
      });
  }, [deleted]);

  const handleDelete = (id) => {
    fetch(`https://aeolian-bottlenose-earthquake.glitch.me/deleteBook/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((success) => {
        setDeleted(deleted + 1);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-8 mt-4 offset-md-1">
          <h3>Manage Books</h3>
          <div style={{ padding: "30px", background: "#F4F7FC" }}>
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
              {books.length > 0 &&
                books.map((book, i) => (
                  <div className="row mt-2">
                    <div className="col-md-4">{book.name}</div>
                    <div className="col-md-4">{book.author}</div>
                    <div className="offset-md-1 col-md-1">${book.price}</div>
                    <div className="offset-md-1 col-md-1">
                      <Link to={`/update-book/${book._id}`}>
                        <img
                          src={EditBtn}
                          alt=""
                          style={{
                            width: "40%",
                            marginRight: "5px",
                            cursor: "pointer",
                          }}
                        />
                      </Link>
                      <img
                        src={DeleteBtn}
                        alt=""
                        style={{ width: "40%", cursor: "pointer" }}
                        onClick={() => handleDelete(book._id)}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBooks;
