const SingleOrder = ({ order }) => {
  return (
    <tr className="border">
      <td>{order.email}</td>

      <td>
        <select
          //   onClick={(e) => setStatus(e.target.value)}
          style={{
            border: "none",
            outline: "none",
            padding: "5px",
          }}
        >
          <option
            value="pending"
            // selected={order.status === "pending" ? true : false}
          >
            Pending
          </option>
          <option
            value="in-progress"
            // selected={order.status === "in-progress" ? true : false}
          >
            In Progress
          </option>
          <option
            value="done"
            // selected={order.status === "done" ? true : false}
          >
            Done
          </option>
          <option value="reject">Reject</option>
        </select>
        <button
          className="ml-2 btn btn-primary btn-sm"
          //   onClick={handleStatusChange}
        >
          Submit
        </button>
      </td>
    </tr>
  );
};

export default SingleOrder;
