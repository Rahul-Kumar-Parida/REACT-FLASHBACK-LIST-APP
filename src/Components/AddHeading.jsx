import styles from "./AddHeading.module.css";
const AddHeading = function ({
  todoName,
  amount,
  quantity,
  todoDate,
  todoTime,
  onDeleteClick,
}) {
  return (
    <table className="table">
      <thead>
        <tr className="table-info">
          <th scope="col">Date & Time</th>
          <th scope="col">Item Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Done</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            {todoDate} & {todoTime}
          </th>
          <th scope="row">{todoName}</th>
          <th scope="row">
            {amount} {quantity}
          </th>
          <th scope="row">
            <input type="checkbox" />
          </th>
          <th scope="row">
            <button
              type="button"
              className="btn btn-danger kg-botton"
              onClick={() => onDeleteClick(todoName)}
            >
              Delete
            </button>
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default AddHeading;
