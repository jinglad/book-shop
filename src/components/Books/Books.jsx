import img1 from "../../images/books/image-1.png";
import Book from "../Book/Book";

export const books = [
  {
    id: "01",
    name: "JavaScript Everywhere",
    img: img1,
    author: "Adam D. Scottark Lutz",
    price: 234.0,
  },
  {
    id: "02",
    name: "JavaScript Everywhere",
    img: img1,
    author: "Adam D. Scottark Lutz",
    price: 234.0,
  },
  {
    id: "03",
    name: "JavaScript Everywhere",
    img: img1,
    author: "Adam D. Scottark Lutz",
    price: 234.03,
  },
  {
    id: "04",
    name: "JavaScript Everywhere",
    img: img1,
    author: "Adam D. Scottark Lutz",
    price: 234.03,
  },
  {
    id: "05",
    name: "JavaScript Everywhere",
    img: img1,
    author: "Adam D. Scottark Lutz",
    price: 234.03,
  },
  {
    id: "06",
    name: "JavaScript Everywhere",
    img: img1,
    author: "Adam D. Scottark Lutz",
    price: 234.0,
  },
];

const Books = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row mx-5">
        {books.map((book, i) => (
          <Book key={i} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
