import { useContext, useEffect } from "react";
import { useState } from "react";
import { CartContext } from "../../App";
import Book from "../Book/Book";
import Loader from "../../images/icons/loader2.gif";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useContext(CartContext);

  useEffect(() => {
    fetch("https://aeolian-bottlenose-earthquake.glitch.me/books")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooks(data);
      });
  }, []);

  const addToCart = (book) => {
    const newCart = [...cart];
    const index = newCart.find((item) => item._id === book._id);
    // console.log(index);
    if (!index) {
      newCart.push(book);
    } else {
      alert("Book is already exist in cart...");
    }
    setCart(newCart);
  };

  if (books.length > 0) {
    return (
      <div className="container-fluid mt-5">
        <div className="row mx-5">
          {books.map((book, i) => (
            <Book key={i} book={book} addToCart={addToCart} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <img src={Loader} alt="" />
        </div>
      </div>
    );
  }
};

export default Books;
