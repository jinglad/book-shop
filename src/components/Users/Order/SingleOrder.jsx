const SingleOrder = ({ order }) => {
  // console.log(order.books);
  return (
    <>
      {order.books.map((book) => (
        <tr className="border">
          <td>{order.email}</td>
          <td>{book.name}</td>
          <td><span className="ml-4">1</span></td>
          <td>${book.price}</td>
        </tr>
      ))}
    </>
  );
};

export default SingleOrder;
