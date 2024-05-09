const AddHeading = function () {
  return (
    <table className="table table-striped ">
      <thead className="table-success">
        <tr>
          <th scope="col">Date & Time</th>
          <th scope="col">Item Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Done</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody className="table-light">
        <tr>
          <th scope="row">06/05/2024 & 23.24</th>
          <td>Potato</td>
          <td>500 Gm</td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <button type="button" className="btn btn-danger kg-botton">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
      <tbody className="table-light">
        <tr>
          <th scope="row">06/05/2024 & 23.24</th>
          <td>Garlic</td>
          <td>500 Gm</td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <button type="button" className="btn btn-danger kg-botton">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
      <tbody className="table-light">
        <tr>
          <th scope="row">06/05/2024 & 23.24</th>
          <td>Ginger</td>
          <td>500 Gm</td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <button type="button" className="btn btn-danger kg-botton">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
      <tbody className="table-light">
        <tr>
          <th scope="row">06/05/2024 & 23.24</th>
          <td>Onion</td>
          <td>500 Gm</td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <button type="button" className="btn btn-danger kg-botton">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
      <tbody className="table-light">
        <tr>
          <th scope="row">06/05/2024 & 23.24</th>
          <td>Tomato</td>
          <td>500 Gm</td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <button type="button" className="btn btn-danger kg-botton">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AddHeading;
