import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../App";

const Book = ({ book }) => {
  const { name, img, author } = book;
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const newCart = [...cart];
    const index = newCart.find((item) => item.id === book.id);
    console.log(index);
    if (!index) {
      newCart.push(book);
    } else {
      alert("Book is already exist in cart...");
    }
    setCart(newCart);
  };
  return (
    <div className="col-md-4">
      <BookContainer>
        <img src={img} alt="" />
        <h3>{name}</h3>
        <p>{author}</p>
        <div className="d-flex justify-content-between mt-2">
          <h2 style={{ fontWeight: 600, color: "#6946f4" }}>$234</h2>
          <div>
            <button onClick={addToCart} className="btn btn-primary">
              Buy Now
            </button>
          </div>
        </div>
      </BookContainer>
    </div>
  );
};

export default Book;

const BookContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 50px;
  padding: 20px;
  box-shadow: 0 0 10px lightgray;
  border-radius: 10px;
  & img {
    object-fit: contain;
    background-color: lightgray;
    width: 100%;
    padding: 25px;
    border-radius: 10px;
  }
  & p {
    margin: 0;
  }
`;
