import { useState } from "react";
import styles from "./AddSection.module.css";

const AddSection = function ({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [amount, setAmount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [todoTIme, setTodoTime] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };
  const handleTimeChange = (event) => {
    setTodoTime(event.target.value);
  };

  const handleSaveButtonClicked = () => {
    onNewItem(todoName, amount, quantity, todoDate, todoTIme);
    setTodoName("");
    setAmount("");
    setQuantity("");
    setTodoDate("");
    setTodoTime("");
  };
  const handleResetButtonClicked = () => {
    setTodoName("");
    setAmount("");
    setQuantity("");
    setTodoDate("");
    setTodoTime("");
  };

  return (
    <div className={styles.containerDiv}>
      <div className={styles.AddDiv}>
        <input
          className={styles.addInput}
          type="text"
          placeholder="Enter Your Items"
          value={todoName}
          onChange={handleNameChange}
        />
        <div className={styles.QtyDiv}>
          <div className={styles.TotalQty}>
            <label className={styles.TotalLabel} htmlFor="Total">
              Total:
            </label>
            <input
              placeholder="e.g: 500gm"
              type="number"
              value={amount}
              onChange={handleAmountChange}
            />
            <label className={styles.label2} htmlFor="quant">
              Qty.:
            </label>
            <select
              name="quantity"
              id="quant"
              className={styles.selectQunt}
              value={quantity}
              onChange={handleQuantityChange}
            >
              <option value="qty">Qty</option>
              <option value="Kg">kg</option>
              <option value="Gm">Gm</option>
              <option value="Lit">Lit</option>
              <option value="Pac">Pac</option>
              <option value="MiliLit">MiliLit</option>
            </select>
          </div>
          <div className={styles.DateTime}>
            <label htmlFor="date">Date: </label>
            <input
              className={styles.inputDate}
              type="date"
              onChange={handleDateChange}
              value={todoDate}
            />
            <label htmlFor="time">Time: </label>
            <input
              className={styles.inputTime}
              type="time"
              onChange={handleTimeChange}
              value={todoTIme}
            />
          </div>
          <div className={styles.SaveReset}>
            <button
              className={styles.SaveBtn}
              onClick={handleSaveButtonClicked}
            >
              Save
            </button>
            <button
              className={styles.ResetBtn}
              onClick={handleResetButtonClicked}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSection;
